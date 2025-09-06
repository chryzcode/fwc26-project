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
    if (!serviceName || !amount || !serviceDescription) {
      return;
    }
    
    const calendlyUrl = getCalendlyUrlForTier(tier);
    
    // For Tier 2 and 3, Calendly already handles payment, so just redirect to Calendly
    if (tier === 2 || tier === 3) {
      window.open(calendlyUrl, '_blank');
      return;
    }
    
    // For Tier 1 (free service), use our custom redirect logic
    const paymentUrl = `/book?service=${encodeURIComponent(serviceName)}&amount=${amount}&description=${encodeURIComponent(serviceDescription)}&tier=${tier || 1}`;
    const separator = calendlyUrl.includes('?') ? '&' : '?';
    const calendlyWithRedirect = `${calendlyUrl}${separator}redirect_uri=${encodeURIComponent(window.location.origin + paymentUrl)}`;
    
    // Open Calendly first
    window.open(calendlyWithRedirect, '_blank');
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
