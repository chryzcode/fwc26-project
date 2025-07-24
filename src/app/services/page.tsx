import Image from "next/image";
import Link from "next/link";

export default function ServicesAboutUs() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">About FWC 2026<br /><span className="text-accent">Business & Marketing Consultancy</span></h1>
          <p className="text-lg text-blue-800 mb-6">We help entrepreneurs and businesses unlock the full potential of the FIFA World Cup 2026. Our team brings together decades of experience in sports, business, and digital strategy to deliver results that matter.</p>
          <ul className="mb-6 space-y-2 text-blue-900 font-medium">
            <li>✓ Trusted by 50+ businesses</li>
            <li>✓ 10+ years of event marketing experience</li>
            <li>✓ Based in Vancouver & Toronto</li>
          </ul>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-lg">Get in Touch</Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/globe.svg" alt="FWC 2026 Team" width={320} height={320} className="rounded-2xl shadow-2xl bg-white p-4" />
        </div>
      </section>
      {/* Mission & Values */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
        <p className="text-lg text-blue-800 mb-8">Empowering businesses to seize the unique opportunities of the 2026 FIFA World Cup through expert guidance, innovative solutions, and hands-on support.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Integrity</h3>
            <p className="text-blue-800">We believe in honest, transparent partnerships that drive real results.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-accent">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Innovation</h3>
            <p className="text-blue-800">We use creative strategies and the latest tech to keep you ahead of the game.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-cta">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Impact</h3>
            <p className="text-blue-800">Our work is measured by the growth and success of our clients.</p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow">
            <Image src="/globe.svg" alt="Jane Doe" width={64} height={64} className="rounded-full bg-white mb-4" />
            <div className="font-bold text-blue-900">Jane Doe</div>
            <div className="text-blue-700 mb-2">Founder & CEO</div>
            <p className="text-blue-800 text-sm text-center">Visionary leader with a passion for sports and business innovation.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow">
            <Image src="/file.svg" alt="John Smith" width={64} height={64} className="rounded-full bg-white mb-4" />
            <div className="font-bold text-blue-900">John Smith</div>
            <div className="text-blue-700 mb-2">Head of Strategy</div>
            <p className="text-blue-800 text-sm text-center">Expert in market analysis and business growth for global events.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow">
            <Image src="/window.svg" alt="Alex Lee" width={64} height={64} className="rounded-full bg-white mb-4" />
            <div className="font-bold text-blue-900">Alex Lee</div>
            <div className="text-blue-700 mb-2">Partnerships Lead</div>
            <p className="text-blue-800 text-sm text-center">Connector of brands, sponsors, and new business opportunities.</p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-8 border-l-4 border-primary">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Strategy Sessions</h3>
            <p className="text-blue-800">Personalized consultations to identify your business's World Cup opportunities and craft a winning plan.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 border-l-4 border-accent">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Monetization Blueprint</h3>
            <p className="text-blue-800">Actionable roadmaps for maximizing revenue from fan engagement, merchandising, and digital experiences.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 border-l-4 border-cta">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Full-Service Launch</h3>
            <p className="text-blue-800">End-to-end support for launching new products, services, or campaigns tailored to the World Cup audience.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 border-l-4 border-blue-900">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Partnership Opportunities</h3>
            <p className="text-blue-800">Connecting you with key partners, sponsors, and collaborators to amplify your impact.</p>
          </div>
        </div>
      </section>
      {/* Impact/Timeline Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Impact</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1 bg-white rounded-xl shadow p-8 text-center border-l-4 border-primary">
            <div className="text-4xl font-extrabold text-blue-900 mb-2">50+</div>
            <div className="text-blue-800">Businesses Helped</div>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow p-8 text-center border-l-4 border-accent">
            <div className="text-4xl font-extrabold text-blue-900 mb-2">10+</div>
            <div className="text-blue-800">Years Experience</div>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow p-8 text-center border-l-4 border-cta">
            <div className="text-4xl font-extrabold text-blue-900 mb-2">100%</div>
            <div className="text-blue-800">Client Satisfaction</div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Grow Your Business?</h2>
        <p className="text-lg text-blue-800 mb-8">Contact us today to discover how FWC 2026 can help you win big during the World Cup.</p>
        <Link href="/contact" className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-lg">Get Started</Link>
      </section>
    </main>
  );
} 