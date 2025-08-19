"use client";
import { useState } from 'react';

interface StripePaymentProps {
  serviceName: string;
  amount: number;
  description: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function StripePayment({ serviceName, amount, description, onSuccess, onError }: StripePaymentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceName,
          amount,
          description,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          throw error;
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
      if (onError) {
        onError('Payment failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Book {serviceName}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6">
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <span className="text-gray-700">Service:</span>
          <span className="font-semibold">{serviceName}</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-gray-700">Total:</span>
                          <span className="text-2xl font-bold text-blue-600">${amount}</span>
        </div>
      </div>

      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder="your@email.com"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !email}
                      className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        >
          {isLoading ? 'Processing...' : `Pay $${amount}`}
        </button>
      </form>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Secure payment powered by Stripe. Your information is protected.
      </div>
    </div>
  );
}

// Stripe loader function
async function loadStripe(publishableKey: string) {
  if (typeof window !== 'undefined') {
    const { loadStripe } = await import('@stripe/stripe-js');
    return loadStripe(publishableKey);
  }
  return null;
}
