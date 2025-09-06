"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServicesAboutUs() {
  const handleBookAndPay = (serviceName: string, amount: number, description: string, tier?: number) => {
    try {
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

      const calendlyUrl = getCalendlyUrlForTier(tier);
      
      // For Tier 2 and 3, Calendly already handles payment, so just redirect to Calendly
      if (tier === 2 || tier === 3) {
        window.open(calendlyUrl, '_blank');
        return;
      }
      
      // For Tier 1 (free service), use our custom redirect logic
      const paymentUrl = `/book?service=${encodeURIComponent(serviceName)}&amount=${amount}&description=${encodeURIComponent(description)}&tier=${tier || 1}`;
      const separator = calendlyUrl.includes('?') ? '&' : '?';
      const calendlyWithRedirect = `${calendlyUrl}${separator}redirect_uri=${encodeURIComponent(window.location.origin + paymentUrl)}`;
      
      // Open Calendly first
      window.open(calendlyWithRedirect, '_blank');
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to open booking. Please try again.');
    }
  };

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">FIFA 2026 Business Consulting - About Us & Our Services</h1>
        <p className="text-lg text-gray-900 max-w-2xl mx-auto">FWC 2026 is a passionate team dedicated to helping businesses thrive during the FIFA World Cup. We combine deep industry knowledge with creative strategy to unlock new opportunities for our clients.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-3">Our Mission</h2>
        <p className="text-gray-900 mb-2">To empower businesses to seize the unique opportunities of the 2026 FIFA World Cup through expert guidance, innovative solutions, and hands-on support.</p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
            <Image src="/globe.svg" alt="AB.Rahman King - FIFA 2026 Business Consulting Founder & CEO" width={48} height={48} className="rounded-full bg-white" />
            <div>
              <div className="font-bold text-blue-600">AB.Rahman King</div>
              <div className="text-secondary">Founder & CEO</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-secondary mb-6">Our Services</h2>
        <ul className="space-y-6">
          <li className="rounded-xl shadow p-6 border border-blue-100 relative overflow-hidden" style={{backgroundImage: 'url(/Strategy-Session.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} aria-label="FIFA 2026 Strategy Sessions - Personalized business consultations">
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Strategy Sessions</h3>
              <p className="text-white mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Personalized consultations to identify your business&apos;s World Cup opportunities and craft a winning plan.</p>
              <div className="flex justify-center">
                <a href="https://calendly.com/fwc26info/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-xl border-2 border-white text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center bg-white/20 hover:bg-white/30">
                  Book<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>
          </li>
          <li className="rounded-xl shadow p-6 border border-blue-100 relative overflow-hidden" style={{backgroundImage: 'url(/Full-Monetization-Blueprint.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} aria-label="FIFA 2026 Monetization Blueprint - Revenue optimization strategies">
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Monetization Blueprint</h3>
              <p className="text-white mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Actionable roadmaps for maximizing revenue from fan engagement, merchandising, and digital experiences.</p>
              <div className="flex justify-center">
                <button 
                  onClick={() => handleBookAndPay('Monetization Blueprint', 497, 'Actionable roadmaps for maximizing revenue from fan engagement, merchandising, and digital experiences', 2)}
                  className="px-6 py-2 rounded-xl border-2 border-white text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center bg-white/20 hover:bg-white/30"
                >
                  Book & Pay<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          </li>
          <li className="rounded-xl shadow p-6 border border-blue-100 relative overflow-hidden" style={{backgroundImage: 'url(/Business-Launch-Support.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} aria-label="FIFA 2026 Full-Service Launch - End-to-end business support">
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Full-Service Launch</h3>
              <p className="text-white mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>End-to-end support for launching new products, services, or campaigns tailored to the World Cup audience.</p>
              <div className="flex justify-center">
                <button 
                  onClick={() => handleBookAndPay('Full-Service Launch', 1997, 'End-to-end support for launching new products, services, or campaigns tailored to the World Cup audience', 3)}
                  className="px-6 py-2 rounded-xl border-2 border-white text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center bg-white/20 hover:bg-white/30"
                >
                  Book & Pay<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
