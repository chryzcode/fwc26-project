"use client";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  backgroundImage: string;
  isFree: boolean;
  calendlyUrl?: string;
  serviceName?: string;
  amount?: number;
  serviceDescription?: string;
}

// Stripe loader function
async function loadStripe(publishableKey: string) {
  if (typeof window !== 'undefined') {
    const { loadStripe } = await import('@stripe/stripe-js');
    return loadStripe(publishableKey);
  }
  return null;
}

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  backgroundImage, 
  isFree, 
  calendlyUrl,
  serviceName,
  amount,
  serviceDescription
}: ServiceCardProps) {
  
  const handleStripeCheckout = async () => {
    if (!serviceName || !amount || !serviceDescription) return;
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceName,
          amount,
          description: serviceDescription,
          email: 'customer@example.com'
        })
      });
      const { sessionId } = await response.json();
      
      if (!sessionId) {
        throw new Error('No session ID received');
      }
      
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          throw error;
        }
      }
    } catch (error) {
      console.error('Stripe checkout error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="rounded-2xl relative overflow-hidden shadow-lg hover:scale-105 transition-transform flex flex-col items-center h-full" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center h-full w-full p-8">
        <h3 className="text-xl font-bold text-white mb-3 text-center" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>{title}</h3>
        <p className="text-white mb-4 text-sm text-center" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>{description}</p>
        <ul className="space-y-2 text-white text-sm text-left w-full mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="mt-auto pt-4 w-full flex justify-center">
          {isFree ? (
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-xs px-6 py-2 rounded-xl border-2 border-primary from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center"
            >
              Book<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          ) : (
            <button 
              onClick={handleStripeCheckout}
              className="block w-full max-w-xs px-6 py-2 rounded-xl border-2 border-primary from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center"
            >
              Book<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
