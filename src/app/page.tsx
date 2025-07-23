import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import CountdownTimer from "@/components/CountdownTimer";
import NewsletterSignup from "@/components/NewsletterSignup";
import SimpleChatWidget from "@/components/SimpleChatWidget";

export const metadata = {
  title: "FIFA 2026 Biz Advantage | Business & Marketing Consultancy",
  description: "Monetization strategy consulting for entrepreneurs and businesses during the FIFA World Cup 2026 in Vancouver and Toronto.",
  keywords: [
    "FIFA 2026",
    "Business Consulting",
    "Monetization",
    "Vancouver",
    "Toronto",
    "World Cup",
    "Strategy",
    "Entrepreneurs",
    "Small Business",
  ],
  openGraph: {
    title: "FIFA 2026 Biz Advantage | Business & Marketing Consultancy",
    description: "Monetization strategy consulting for entrepreneurs and businesses during the FIFA World Cup 2026 in Vancouver and Toronto.",
    url: "https://www.fwc26.ca/",
    siteName: "FIFA 2026 Biz Advantage",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100 py-10 md:py-20">
        {/* Creative floating timer badge (desktop) */}
        <div className="hidden md:block absolute top-8 right-12 z-20 animate-bounce">
          <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg flex items-center gap-2 border-4 border-white">
            <span className="mr-2 text-blue-900">FIFA 2026:</span>
            <CountdownTimer />
          </div>
        </div>
        <div className="md:hidden flex justify-center w-full mb-6 animate-bounce">
          <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full shadow-lg font-bold text-base flex items-center gap-2 border-2 border-white">
            <span className="mr-1 text-blue-900">FIFA 2026:</span>
            <CountdownTimer />
          </div>
        </div>
        <div className="container relative z-10 px-4 mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            🚀 Exclusive FIFA 2026 Opportunity
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 text-blue-900 drop-shadow-xl animate-fade-in bg-gradient-to-r from-blue-900 via-blue-600 to-accent bg-clip-text text-transparent animate-gradient-x">
            Unlock Your Business Potential
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            Transform your business with expert strategies to capitalize on the FIFA World Cup in Vancouver & Toronto. Turn 1.2M+ visitors into loyal customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in animation-delay-300">
            <Link href="https://calendly.com/fwc26info/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-xl border-2 border-primary from-primary to-accent text-blue-900 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
              Book Free Strategy Call <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link href="#services" className="px-8 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold bg-white transition-all duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Market Opportunity vs. Problem */}
      <section id="opportunity" className="py-20 md:py-28 bg-gradient-to-br from-white to-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">Market Opportunity</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The <span className="text-primary">Biggest Sporting Event</span> in North America</h2>
            <p className="text-lg text-slate-600">The FIFA World Cup 2026 presents an unprecedented opportunity for businesses in Vancouver and Toronto to thrive on the global stage.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Opportunity Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <div className="text-2xl">🚀</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why This Matters</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">⚽</span><span className="text-slate-700">Over 1.2M spectators across Vancouver & Toronto</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">🎉</span><span className="text-slate-700">High demand for fan engagement, food, merch & digital experiences</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">💰</span><span className="text-slate-700">Multi-million dollar untapped revenue potential for small businesses</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">🌎</span><span className="text-slate-700">Global exposure with visitors from around the world</span></li>
                </ul>
              </div>
            </div>
            {/* Problem Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
              <div className="relative p-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <div className="text-2xl">⚠️</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">❌</span><span className="text-slate-200">Businesses lack event-specific strategy</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">⏰</span><span className="text-slate-200">Tight timelines & high competition for prime locations</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">📊</span><span className="text-slate-200">Difficulty in measuring ROI and tracking success</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">🌉</span><span className="text-slate-200">Navigating local regulations and FIFA requirements</span></li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-slate-300 mb-4">Don't miss out on this once-in-a-generation opportunity.</p>
                  <Link href="#contact" className="inline-flex items-center text-white font-medium group">Get expert guidance<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive <span className="text-primary">Business Solutions</span></h2>
            <p className="text-lg text-slate-600">We provide end-to-end support to help your business thrive during the FIFA World Cup 2026</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service Cards */}
            <div className="rounded-2xl bg-white/80 p-8 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">💡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy Sessions</h3>
              <p className="text-slate-600 mb-4">Personalized consultations to validate your business idea and create a winning strategy for FIFA 2026.</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Market analysis</li>
                <li>• Revenue modeling</li>
                <li>• Competitive positioning</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 p-8 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Monetization Blueprint</h3>
              <p className="text-slate-600 mb-4">Custom plan to maximize your revenue during the tournament with clear action steps.</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Pricing strategy</li>
                <li>• Partnership opportunities</li>
                <li>• Revenue streams</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 p-8 shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">🚀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full-Service Launch</h3>
              <p className="text-slate-600 mb-4">End-to-end support to bring your FIFA 2026 business concept to life.</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Brand development</li>
                <li>• Marketing execution</li>
                <li>• Operational setup</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link href="https://calendly.com/fwc26info/30min" target="_blank" rel="noopener noreferrer"  className="px-8 py-3.5 border-2 border-primary rounded-xl bg-gradient-to-r from-primary to-accent text-primary font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-lg w-full focus:outline-none ">
              Book Your Free Consultation <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">Client Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Trusted by <span className="text-primary">Businesses</span> Like Yours</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients say about working with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 mb-6">"The strategy session completely transformed our approach to the World Cup."</blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl">🏟️</div>
                <div className="ml-4">
                  <p className="font-medium text-slate-900">Alex Johnson</p>
                  <p className="text-slate-500 text-sm">CEO, Fan Experience Co.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 mb-6">"We've optimized our pricing strategy and saw a 40% increase in bookings."</blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl">🎯</div>
                <div className="ml-4">
                  <p className="font-medium text-slate-900">Maria Garcia</p>
                  <p className="text-slate-500 text-sm">Founder, Event Masters</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 mb-6">"The team's expertise in sports marketing is unmatched."</blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl">⚽</div>
                <div className="ml-4">
                  <p className="font-medium text-slate-900">James Wilson</p>
                  <p className="text-slate-500 text-sm">Director, Sports Marketing Inc.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link href="/testimonials" className="inline-flex items-center text-primary font-medium group">Read more success stories<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Let’s Build Your FIFA Strategy</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Schedule a free consultation to discuss how we can help you capitalize on the FIFA World Cup 2026 opportunity.</p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl bg-white/80 w-full max-w-lg shadow-lg p-8 flex flex-col gap-5 animate-fade-in">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Send us a message</h3>
              <ContactForm />
            </div>
          </div>
          {/* Newsletter Signup below the form */}
          <div className="flex justify-center mt-10">
            <div className="rounded-2xl bg-white/80 w-full max-w-xl shadow-lg p-6 border border-blue-100 animate-fade-in">
              <h4 className="text-lg font-semibold text-blue-900 mb-5">Subscribe to our newsletter</h4>
              <NewsletterSignup />
            </div>
          </div>
        </div>
        {/* Chat Widget (floating, always visible) */}
        <SimpleChatWidget />
      </section>
    </main>
  );
}
