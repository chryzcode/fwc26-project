

export default function Book() {
  return (
    <main className="bg-white">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-2000" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Book a Consultation</h1>
        <p className="text-white mb-10 max-w-xl text-lg animate-fade-in">
          Secure your spot for a 30-minute strategy session. Payment and scheduling are handled securely via Calendly and Stripe.
        </p>
        {/* Calendly Embed Placeholder */}
        <div className="rounded-2xl bg-white/80 w-full max-w-xl mb-8 flex flex-col items-center justify-center shadow-lg animate-fade-in">
          <div className="w-full h-72 flex items-center justify-center text-blue-400 border-2 border-dashed border-blue-200 rounded-lg">
            Calendly Widget Placeholder
          </div>
        </div>
        {/* Stripe Payment Placeholder */}
        <div className="rounded-2xl bg-white/80 w-full max-w-xl mb-8 flex flex-col items-center justify-center shadow-lg animate-fade-in">
          <div className="w-full h-24 flex items-center justify-center text-blue-400 border-2 border-dashed border-blue-200 rounded-lg">
            Stripe Payment Placeholder
          </div>
        </div>
        <a
          href="https://calendly.com/fwc26info/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 animate-pulse"
        >
          Book Now <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </section>
    </main>
  );
}
