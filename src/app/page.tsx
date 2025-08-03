import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
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
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{background: 'none'}}>
         {/* Creative floating timer badge (desktop) */}
         <div className="hidden md:block absolute top-8 right-12 z-20 animate-bounce">
          <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg flex items-center gap-2 border-4 border-white">
            <span className="mr-2 text-white">FIFA 2026:</span>
            <CountdownTimer />
          </div>
          </div>
          <div className="absolute inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  >

      <source
        src="https://res.cloudinary.com/chryzhub/video/upload/v1754255471/HomePage-Background-Visuals_fqzlcy.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black/70" />
  </div>

        {/* Content above video */}
        <div className="relative z-10 w-full">
          <div className="container relative z-20 px-4 pt-10 mx-auto flex flex-col items-center text-center max-w-6xl">
            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 text-lg font-bold rounded-full bg-white/20 text-white animate-fade-in" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>🚀 Exclusive FIFA 2026 Opportunity</div>
            

            <div className="my-20">
            <h1 className="text-6xl font-extrabold mb-10 text-white drop-shadow-xl animate-fade-in" style={{textShadow: '0 2px 16px rgba(0,0,0,0.9)'}}>Unlock Your Business Potential</h1>
            <p className="text-3xl text-white mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Helping Businesses Capitalize on the FIFA World Cup 2026 in Vancouver & Toronto</p>
            </div>
        
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in animation-delay-300">
              <a href="#commercial-opportunities" className="px-8 py-3.5 rounded-xl border-2 border-white text-white font-bold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Discover Revenue Opportunities</a>
              <Link href="/about-us" className="px-8 py-3.5 rounded-xl border-2 border-white text-white font-bold text-lg bg-white/10 hover:bg-white/20 transition-all duration-200">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Commercial Opportunities Section */}
      <section id="commercial-opportunities" className="py-20 md:py-28 relative" style={{backgroundImage: 'url(/Commercial-Opportunity.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="container px-4 mx-auto relative z-10 max-w-6xl">
          <div className="text-center max-w-6xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-lg font-bold rounded-full bg-white/20 text-white mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Commercial Opportunities</span>
            <h2 className="text-4xl font-extrabold text-white mb-6" style={{textShadow: '0 2px 16px rgba(0,0,0,0.9)'}}>The Biggest Sporting Event in North America</h2>
            <p className="text-lg text-white text-center max-w-3xl mx-auto py-5" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>The FIFA World Cup 2026 presents an unprecedented opportunity for businesses in Vancouver and Toronto to thrive on the global stage.</p>
          </div>
          {/* Restore original grid and card design */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Opportunity Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <div className="text-2xl">🚀</div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Why This Matters</h3>
                <ul className="space-y-4 text-gray-900">
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">⚽</span><span>Over 1.2M spectators across Vancouver & Toronto</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">🎉</span><span>High demand for fan engagement, food, merch & digital experiences</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">💰</span><span>Multi-million dollar untapped revenue potential for small businesses</span></li>
                  <li className="flex items-start gap-3"><span className="text-xl mt-0.5">🌎</span><span>Global exposure with visitors from around the world</span></li>
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
                  <Link href="/about-us" className="inline-flex items-center text-white font-medium group">Get expert guidance<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></Link>
                </div>
              </div>
            </div>

            
          </div>
          <div className="mt-20 text-center">
            <Link href="/blog" className="inline-flex items-center text-white font-medium group">Read more<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></Link>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 text-lg font-bold rounded-full bg-white/20 text-primary mb-4">Our Solutions (tiered services)</span>
            <h2 className="text-4xl font-extrabold text-primary mb-6">Comprehensive Business Solutions</h2>
            <p className="text-lg text-secondary text-center">We provide end-to-end support to help your business thrive during the FIFA World Cup 2026</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {/* Service Cards with background images */}
            <div className="rounded-2xl relative overflow-hidden shadow-lg hover:scale-105 transition-transform flex flex-col items-center h-full" style={{backgroundImage: 'url(/Strategy-Session.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex flex-col items-center h-full w-full p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">💡</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Strategy Sessions</h3>
                <p className="text-white mb-4 text-sm text-center" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Personalized consultations to validate your business idea and create a winning strategy for FIFA 2026.</p>
                <ul className="space-y-2 text-white text-sm text-left w-full mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
                  <li>Market analysis</li>
                  <li>Revenue modeling</li>
                  <li>Competitive positioning</li>
                </ul>
                <div className="mt-auto pt-4 w-full flex justify-center">
                  <Link href="/book" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs px-6 py-2 rounded-xl border-2 border-primary from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center">Book<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span></Link>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative overflow-hidden shadow-lg hover:scale-105 transition-transform flex flex-col items-center h-full" style={{backgroundImage: 'url(/Full-Monetization-Blueprint.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex flex-col items-center h-full w-full p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">📊</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Monetization Blueprint</h3>
                <p className="text-white mb-4 text-sm text-center" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Custom plan to maximize your revenue during the tournament with clear action steps.</p>
                <ul className="space-y-2 text-white text-sm text-left w-full mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
                  <li>Pricing strategy</li>
                  <li>Partnership opportunities</li>
                  <li>Revenue streams</li>
                </ul>
                <div className="mt-auto pt-4 w-full flex justify-center">
                  <Link href="/book" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs px-6 py-2 rounded-xl border-2 border-primary from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center">Book<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span></Link>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative overflow-hidden shadow-lg hover:scale-105 transition-transform flex flex-col items-center h-full" style={{backgroundImage: 'url(/Business-Launch-Support.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex flex-col items-center h-full w-full p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-2xl">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Full-Service Launch</h3>
                <p className="text-white mb-4 text-sm text-center" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>End-to-end support to bring your FIFA 2026 business concept to life.</p>
                <ul className="space-y-2 text-white text-sm text-left w-full mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
                  <li>Brand development</li>
                  <li>Marketing execution</li>
                  <li>Operational setup</li>
                </ul>
                <div className="mt-auto pt-4 w-full flex justify-center">
                  <Link href="/book" target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs px-6 py-2 rounded-xl border-2 border-primary from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-center">Book<span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-lg font-medium rounded-full bg-primary/10 text-primary mb-4">Client Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Trusted by <span className="text-secondary">Businesses</span> Like Yours</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto text-center">Don't just take our word for it. Here's what our clients say about working with us.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
            <Link href="/about-us" className="inline-flex items-center text-primary font-medium group">Read more about us<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></Link>
          </div>
        </div>
      </section>

      
        {/* Chat Widget (floating, always visible) */}
        <SimpleChatWidget/>
    
    </main>
  );
}
