"use client";
import { loadStripe } from '@stripe/stripe-js';

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
  tier?: number;
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
  serviceDescription,
  tier
}: ServiceCardProps) {
  
  const handleStripeCheckout = async () => {
    if (!serviceName || !amount || !serviceDescription) {
      console.log('❌ Missing required props:', { serviceName, amount, serviceDescription });
      return;
    }
    
    console.log('🚀 Starting Stripe checkout process...');
    console.log('📝 Service details:', { serviceName, amount, serviceDescription });
    
    try {
      console.log('📡 Making API call to /api/create-checkout-session...');
      
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
      
      console.log('📡 API Response status:', response.status);
      console.log('📡 API Response ok:', response.ok);
      
      const responseData = await response.json();
      console.log('📡 API Response data:', responseData);
      
      const { sessionId, sessionUrl } = responseData;
      
      if (!sessionId || !sessionUrl) {
        console.error('❌ Missing session data in response:', responseData);
        throw new Error('Missing session data');
      }
      
      console.log('✅ Session ID received:', sessionId);
      console.log('✅ Session URL received:', sessionUrl);
      
      // Open Stripe checkout using the provided session URL
      console.log('🔗 Opening Stripe checkout URL:', sessionUrl);
      
      window.open(sessionUrl, '_blank');
      console.log('✅ Checkout window opened successfully');
      
    } catch (error) {
      console.error('❌ Stripe checkout error:', error);
      console.error('❌ Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
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
              Pay & Book<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
