import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-white">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-2000" />
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-10 animate-fade-in">Our Tiered Service Offerings</h1>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-white/80 p-8 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">💡</div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Tier 1: Strategy Sessions</h2>
            <p className="text-blue-800 text-lg mb-4">Validate your niche and business idea for FIFA 2026.</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Market analysis</li>
              <li>• Revenue modeling</li>
              <li>• Competitive positioning</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/80 p-8 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">📊</div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Tier 2: Monetization Blueprint</h2>
            <p className="text-blue-800 text-lg mb-4">We develop your operational strategy, pricing model, service offers, licensing requirements, strategic partnerships, and a tailored marketing plan to position your business for success.</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Pricing strategy</li>
              <li>• Partnership opportunities</li>
              <li>• Revenue streams</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/80 p-8 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">🚀</div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Tier 3: Full-Service Launch</h2>
            <p className="text-blue-800 text-lg mb-4">Includes branding, content creation, website & event logistics.</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Brand development</li>
              <li>• Marketing execution</li>
              <li>• Operational setup</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-16 animate-fade-in">
          <Link href="/book" className="px-8 py-3.5 rounded-xl border-2 border-primary text-primary bg-white font-semibold shadow-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 inline-flex items-center animate-bounce">
            Book a Strategy Session <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
