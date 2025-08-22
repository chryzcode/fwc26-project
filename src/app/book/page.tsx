

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book FIFA 2026 Strategy Session | FIFA World Cup 2026 Business Consulting",
  description: "Book your FIFA 2026 strategy session with expert consultants. Monetize FIFA 2026 Toronto Vancouver opportunities. Secure your 30-minute consultation today.",
  keywords: [
    "Book FIFA 2026 strategy session",
    "FIFA 2026 business consulting booking",
    "FIFA World Cup 2026 consultation",
    "Monetize FIFA 2026 Toronto Vancouver",
    "FIFA 2026 business opportunities booking",
  ],
};

export default function Book() {
  return (
    <main className="bg-white">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-2000" />
        
                  <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6 animate-fade-in">
          Book Your FIFA 2026 Strategy Session
        </h1>
        <p className="text-gray-700 mb-10 max-w-xl text-lg animate-fade-in">
          Secure your spot for a 30-minute strategy session to monetize FIFA 2026 opportunities in Toronto and Vancouver.
        </p>
        
        {/* Calendly Embed */}
        <div className="rounded-2xl bg-white/90 w-full max-w-4xl mb-8 flex flex-col items-center justify-center shadow-xl animate-fade-in overflow-hidden">
          <iframe
            src="https://calendly.com/fwc26info/30min?embed=true"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book FIFA 2026 Strategy Session"
            className="rounded-2xl"
          />
        </div>
        
        {/* Direct Booking CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="/about-us"
            className="px-8 py-4 rounded-xl font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Learn More About Our Services
          </a>
        </div>
      </section>
    </main>
  );
}
