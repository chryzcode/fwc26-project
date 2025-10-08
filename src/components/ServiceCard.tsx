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
  
  const getCalendlyUrlForTier = (tier?: number): string => {
    switch (tier) {
      case 2:
        return "https://calendly.com/fwc26info/full-monetization-blueprint-tier-2";
      case 3:
        return "https://calendly.com/fwc26info/business-launch-support-tier-3";
      default:
        return "https://calendly.com/fwc26info/30min?utm_source=stripe&utm_medium=checkout&utm_campaign=fifa2026";
    }
  };
  
  const handleBookAndPay = () => {
    // Redirect to /book page with appropriate service parameter
    if (tier === 2) {
      window.location.href = '/book?service=tier2';
    } else if (tier === 3) {
      window.location.href = '/book?service=tier3';
    } else {
      // Default to tier 1
      window.location.href = '/book';
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
            <button
              onClick={() => window.location.href = '/book'}
              className="block w-full max-w-xs px-6 py-2 rounded-xl border-2 border-primary from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center"
            >
              Book<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          ) : (
            <button 
              onClick={handleBookAndPay}
              className="block w-full max-w-xs px-6 py-2 rounded-xl border-2 border-primary from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center"
            >
              Book & Pay<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
