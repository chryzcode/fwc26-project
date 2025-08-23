"use client";
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface StripePaymentProps {
  serviceName: string;
  amount: number;
  description: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

// Payment form component
function PaymentForm({ serviceName, amount, description, onSuccess, onError }: StripePaymentProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      // Create payment intent
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create payment');
      }

      setClientSecret(data.clientSecret);

      // Confirm the payment
      const { error: confirmError } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            email: email,
          },
        },
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      // Payment successful
      setIsSuccess(true);
      if (onSuccess) {
        onSuccess();
      }
      
    } catch (error: any) {
      console.error('Payment error:', error);
      const errorMsg = error.message || 'Payment failed. Please try again.';
      setErrorMessage(errorMsg);
      if (onError) {
        onError(errorMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for your payment of ${amount} CAD for {serviceName}. 
            You'll receive a confirmation email shortly.
          </p>
          <p className="text-sm text-gray-500">
            Our team will contact you within 24 hours to schedule your consultation.
          </p>
        </div>
      </div>
    );
  }

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

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Details
          </label>
          <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !email || !stripe}
          className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        >
          {isLoading ? 'Processing Payment...' : `Pay $${amount} CAD`}
        </button>
      </form>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Secure payment powered by Stripe. Your information is protected.
      </div>
    </div>
  );
}

// Main component with Stripe Elements
export default function StripePayment(props: StripePaymentProps) {
  const [stripePromise, setStripePromise] = useState<any>(null);

  useEffect(() => {
    // Load Stripe
    const loadStripeInstance = async () => {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      setStripePromise(stripe);
    };
    loadStripeInstance();
  }, []);

  if (!stripePromise) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading payment system...</p>
        </div>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm {...props} />
    </Elements>
  );
}
