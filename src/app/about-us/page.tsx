import Image from "next/image";

export default function ServicesAboutUs() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">About Us & Our Services</h1>
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
            <Image src="/globe.svg" alt="Jane Doe" width={48} height={48} className="rounded-full bg-white" />
            <div>
              <div className="font-bold text-primary">Jane Doe</div>
              <div className="text-secondary">Founder & CEO</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
            <Image src="/file.svg" alt="John Smith" width={48} height={48} className="rounded-full bg-white" />
            <div>
              <div className="font-bold text-primary">John Smith</div>
              <div className="text-secondary">Head of Strategy</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
            <Image src="/window.svg" alt="Alex Lee" width={48} height={48} className="rounded-full bg-white" />
            <div>
              <div className="font-bold text-primary">Alex Lee</div>
              <div className="text-secondary">Partnerships Lead</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-secondary mb-6">Our Services</h2>
        <ul className="space-y-6">
          <li className="rounded-xl shadow p-6 border border-blue-100 relative overflow-hidden" style={{backgroundImage: 'url(/Strategy-Session.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Strategy Sessions</h3>
              <p className="text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Personalized consultations to identify your business&apos;s World Cup opportunities and craft a winning plan.</p>
            </div>
          </li>
          <li className="rounded-xl shadow p-6 border border-blue-100 relative overflow-hidden" style={{backgroundImage: 'url(/Full-Monetization-Blueprint.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Monetization Blueprint</h3>
              <p className="text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Actionable roadmaps for maximizing revenue from fan engagement, merchandising, and digital experiences.</p>
            </div>
          </li>
          <li className="rounded-xl shadow p-6 border border-blue-100 relative overflow-hidden" style={{backgroundImage: 'url(/Business-Launch-Support.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Full-Service Launch</h3>
              <p className="text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>End-to-end support for launching new products, services, or campaigns tailored to the World Cup audience.</p>
            </div>
          </li>
          <li className="rounded-xl shadow p-6 border border-blue-100 relative overflow-hidden" style={{backgroundImage: 'url(/Booking-Section.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Partnership Opportunities</h3>
              <p className="text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Connecting you with key partners, sponsors, and collaborators to amplify your impact.</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
