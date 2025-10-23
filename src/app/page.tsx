import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import ServiceCard from "../components/ServiceCard";


export const metadata = {
  title: "FWC26 Marketing Group | FIFA World Cup 2026 Business Opportunities Canada",
  description: "FWC26 Marketing Group provides FIFA World Cup 2026 business consulting, vendor support programs, and small business initiatives for Toronto and Vancouver. $940M economic impact opportunity.",
  keywords: [
    "FWC26 web design and marketing in Canada",
    "FIFA WORLD CUP 2026 Toronto small business support",
    "FIFA WORLD CUP 2026 Vancouver vendor license",
    "Toronto fifa world cup 2026",
    "World Cup 2026",
    "vancouver fifa world cup 2026",
    "FWC26 Vancouver business opportunities",
    "FIFA WORLD CUP 2026 Canada small business initiative program",
    "How to get a FIFA 2026 vendor license in Toronto",
    "Steps to launch a food truck for FIFA 2026 Canada",
    "How to monetize the FIFA World Cup 2026 in Canada",
    "FWC26 business development services",
    "FIFA WORLD CUP 2026 permits and vendor applications",
    "FWC26 Marketing Group",
    "FWC26 vendor program support",
    "FWC26 small business initiative",
    "FWC26 Toronto business vendors",
    "WEARE26 Toronto",
    "WEARE26 Vancouver",
    "FWC26 consulting services Canada",
    "FIFA WORLD CUP 2026 small business funding Canada",
    "FIFA 2026 vendor program Vancouver",
    "Small business FIFA World Cup 2026 Canada",
    "How to start a business for the FIFA World Cup 2026",
    "FWC26 vendor license Canada",
    "FWC26 food truck business in Toronto",
    "FWC26 Canada marketing consulting",
    "FWC26 permits and licenses Canada",
    "FIFA WORLD CUP 2026 vendor support program",
    "FIFA World Cup 2026 business opportunities",
    "FWC26 Canada business consulting",
    "FIFA WORLD CUP 2026 vendor program",
    "FWC26 Canada entrepreneur program",
    "FIFA 2026 Canada hospitality business",
    "FWC26 Toronto business opportunities",
    "FWC26 Vancouver business vendors",
    "FWC26 marketing services in Toronto"
  ],
  openGraph: {
    title: "FWC26 Marketing Group | FIFA World Cup 2026 Business Opportunities Canada",
    description: "FWC26 Marketing Group provides FIFA World Cup 2026 business consulting, vendor support programs, and small business initiatives for Toronto and Vancouver. $940M economic impact opportunity.",
    url: "https://www.fwc26.ca/",
    siteName: "FWC26 Marketing Group",
    type: "website",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FWC26 Marketing Group",
    "description": "FIFA World Cup 2026 business consulting and vendor support services for Toronto and Vancouver",
    "url": "https://www.fwc26.ca",
    "logo": "https://www.fwc26.ca/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "email": "support@fwc26.ca"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.instagram.com/fwc26_canada"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "FWC26 Small Business Initiative Program",
        "description": "Comprehensive support for small businesses during FIFA World Cup 2026",
        "price": "0",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "FWC26 Vendor Support Program",
        "description": "Vendor application and compliance support for FIFA 2026",
        "price": "1499",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{background: 'none'}}>
         {/* Countdown timer - centered on mobile, right on desktop */}
         <div className="absolute top-3 md:top-8 left-1/2 md:left-auto right-auto md:right-12 z-20 transform -translate-x-1/2 md:translate-x-0">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg font-bold text-xs sm:text-sm md:text-lg flex items-center gap-1 sm:gap-2 border-2 border-white min-w-max w-auto">
            <span className="mr-1 sm:mr-2 text-white">FIFA 2026:</span>
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
          <div className="container relative z-20 px-4 md:px-6 pt-10 mx-auto flex flex-col items-center text-center max-w-6xl">
            <div className="inline-flex items-center justify-center px-4 md:px-6 py-2 mb-6 text-base md:text-lg font-bold rounded-full bg-white/20 text-white animate-fade-in mt-16 md:mt-0" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>FWC26 Small Business & Entrepreneur Initiative
            </div>
            

            <div className="my-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-10 text-white drop-shadow-xl animate-fade-in px-4 md:px-8" style={{textShadow: '0 2px 16px rgba(0,0,0,0.9)'}}>FIFA World Cup 2026 Business Opportunities</h1>
            
            {/* Highlighted USP Section */}
            <div className="mb-8 animate-fade-in animation-delay-200 px-4 md:px-8">
              <div className="bg-white/20 text-white max-w-4xl mx-auto rounded-2xl p-8 md:p-12 border border-white/30 shadow-2xl" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-4 tracking-tight">$940M</div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">ECONOMIC OUTPUT</div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">Unmatched economic impact for GTA & Vancouver</div>
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-300 px-4 md:px-8" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Hosting the tournament will bring an unprecedented positive economic output to the GTA and Vancouver. A contribution that will be felt far past the tournament's close.</p>
            </div>
        
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-in animation-delay-300">
              <a href="/blog" className="px-6 py-3 md:px-8 md:py-4 rounded-xl border-2 border-white text-white font-bold text-sm md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-w-[180px] md:min-w-[200px] text-center">Discover Opportunities</a>
              <Link href="/book" className="px-6 py-3 md:px-8 md:py-4 rounded-xl border-2 border-white text-white font-bold text-sm md:text-lg bg-white/20 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[180px] md:min-w-[200px] text-center">Book Free Discovery</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Commercial Opportunities Section */}
      <section id="commercial-opportunities" className="py-20 md:py-28 relative" style={{backgroundImage: 'url(/Commercial-Opportunity.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="container px-4 mx-auto relative z-10 max-w-6xl">
          <div className="text-center max-w-6xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 text-sm md:text-lg font-bold rounded-full bg-white/20 text-white mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Commercial Opportunities</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 md:mb-6" style={{textShadow: '0 2px 16px rgba(0,0,0,0.9)'}}>FIFA 2026 Small Business Support - The Biggest Sporting Event in North America</h2>
            <p className="text-sm sm:text-base md:text-lg text-white text-center max-w-3xl mx-auto py-3 md:py-5" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>The FIFA World Cup 2026 presents an unprecedented opportunity for businesses in Vancouver and Toronto to thrive on the global stage.</p>
          </div>
          {/* Restore original grid and card design */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* SBIP Program Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-500/5" />
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-3 md:mb-4">FWC26 Small Business Initiative Program (SBIP)</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-6">
                  Empowering local entrepreneurs for FIFA World Cup 2026™. Comprehensive support for small businesses looking to capitalize on FIFA 2026 opportunities in Toronto and Vancouver.
                </p>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-blue-600 text-white mb-2">
                    Launch Date: February 17, 2026
                  </span>
                  <span className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-green-600 text-white ml-2">
                    Pre-Registration Open Now!
                  </span>
                </div>
                <div className="mb-6">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Program Launch Countdown</p>
                    <CountdownTimer targetDate={new Date('2026-02-17T00:00:00')} textColor="text-blue-600" />
                    <p className="text-xs text-gray-500 mt-1">Until FWC26 Small Business Initiative Program Launch</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Vendor application & compliance support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Licensing & permit assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Business setup & documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Marketing & operations strategy</span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <Link href="/vendor-support" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Pre-Register Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* VSP Program Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">FWC26 Vendor Support Program (VSP)</h3>
                <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6">
                  Vendor Support Services are designed to help navigate the complex requirements of vending during the FIFA World Cup 2026, encompassing applications and permits, as well as marketing and business readiness.
                </p>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-slate-600 text-white mb-2">
                    Launch Date: March 2026
                  </span>
                  <span className="inline-block px-3 py-1 text-sm font-bold rounded-full bg-green-600 text-white ml-2">
                    Registration Open Now!
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Vendor Application & Compliance Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Licensing & Permit Assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Public Viewing & FIFA Licensing Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Business Setup & Documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✓</span>
                    <span className="text-slate-200">Vendor Education & Strategy Sessions</span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <Link href="/vendor-support" className="inline-flex items-center px-6 py-3 bg-white text-slate-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Enroll Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
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
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 text-sm md:text-lg font-bold rounded-full bg-white/20 text-blue-600 mb-4">Our Solutions (tiered services)</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-4 md:mb-6">FIFA 2026 Business Consulting - Comprehensive Business Solutions</h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary text-center">We provide end-to-end support to help your business thrive during the FIFA World Cup 2026</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
            {/* Service Cards with background images */}
            <ServiceCard
              title="Strategy Sessions"
              description="Personalized consultations to validate your business idea and create a winning strategy for FIFA 2026."
              features={["Market analysis", "Revenue modeling", "Competitive positioning"]}
              backgroundImage="/Strategy-Session.jpg"
              isFree={true}
              calendlyUrl="https://calendly.com/fwc26info/30min"
            />
            
            <ServiceCard
              title="Business Development Support (Tier 2)"
              description="Comprehensive 4-week program with personalized sessions and follow-up support to accelerate your FIFA 2026 business growth."
              features={["4 weeks / 4 sessions", "2 hours per session", "3 follow-up sessions", "Pricing strategy", "Partnership opportunities", "Revenue streams"]}
              backgroundImage="/Full-Monetization-Blueprint.jpg"
              isFree={false}
              serviceName="Business Development Support (Tier 2)"
              amount={1299}
              serviceDescription="Comprehensive 4-week program with personalized sessions and follow-up support to accelerate your FIFA 2026 business growth"
              tier={2}
            />
            
            <ServiceCard
              title="Business Launch Support (Tier 3)"
              description="Complete 8-week intensive program to launch your FIFA 2026 business with full operational support. Program begins before or starting game day; enrollment closes two weeks before opening."
              features={["8 weeks / 8 sessions", "2 hours per session", "Brand development", "Marketing execution", "Operational setup", "Full launch support"]}
              backgroundImage="/Business-Launch-Support.jpg"
              isFree={false}
              serviceName="Business Launch Support (Tier 3)"
              amount={3999}
              serviceDescription="Complete 8-week intensive program to launch your FIFA 2026 business with full operational support. Program begins before or starting game day; enrollment closes two weeks before opening."
              tier={3}
            />
            
            <ServiceCard
              title="Vendor Support Services"
              description="Comprehensive vendor application and compliance support for FIFA 2026. Navigate permits, licenses, and municipal requirements with expert guidance."
              features={["Vendor Application Support", "Permit & License Assistance", "FIFA Licensing Support", "Business Setup Documentation", "Vendor Education Sessions", "Ongoing Tournament Support"]}
              backgroundImage="/Commercial-Opportunity.jpg"
              isFree={false}
              serviceName="Vendor Support Services"
              amount={1499}
              serviceDescription="Comprehensive vendor application and compliance support for FIFA 2026. Navigate permits, licenses, and municipal requirements with expert guidance."
              tier={4}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 text-sm md:text-lg font-medium rounded-full bg-blue-600/10 text-blue-600 mb-4">Client Success Stories</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6">Trusted by <span className="text-secondary">Businesses</span> Like Yours</h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary max-w-2xl mx-auto text-center">Don't just take our word for it. Here's what our clients say about working with us.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center h-full">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-sm sm:text-base md:text-lg text-slate-700 mb-4 md:mb-6 flex-grow">"The strategy session with FWC26 Consulting was incredibly eye-opening. I came in with just a general idea and walked away with a clear, actionable roadmap tailored to my business goals. They asked the right questions, challenged my assumptions, and helped me see real opportunities."</blockquote>
              <div className="flex items-center justify-center mt-auto">
                <div className="text-center">
                  <p className="font-medium text-slate-900">Kemi O.</p>
                  <p className="text-slate-500 text-sm">Owner, Kulture Streetwear Co.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center h-full">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-sm sm:text-base md:text-lg text-slate-700 mb-4 md:mb-6 flex-grow">"They provided a strategic roadmap that broke things down clearly. Their insights were specific to our industry, and the actionable steps helped us position our business to take full advantage of the upcoming market opportunity."</blockquote>
              <div className="flex items-center justify-center mt-auto">
                <div className="text-center">
                  <p className="font-medium text-slate-900">Jason M.</p>
                  <p className="text-slate-500 text-sm">Co-Founder, MetroLink Tours</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center h-full">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-sm sm:text-base md:text-lg text-slate-700 mb-4 md:mb-6 flex-grow">"I had an idea but didn't know where to start. The team at FWC26 Consulting helped me validate it, understand my market, and turn it into a viable business plan. Their strategic insight, especially around the FIFA 2026 landscape, gave me the direction I needed."</blockquote>
              <div className="flex items-center justify-center mt-auto">
                <div className="text-center">
                  <p className="font-medium text-slate-900">Aisha L.</p>
                  <p className="text-slate-500 text-sm">Solo Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
                <Link href="/about-us" className="inline-flex items-center text-blue-600 font-medium group">Read more about us<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></Link>
          </div>
        </div>
      </section>

      
        {/* Chat Widget (floating, always visible) */}

    
    </main>
  );
}
