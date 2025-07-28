import Image from "next/image";

export default function ServicesAboutUs() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">About Us & Our Services</h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto">FWC 2026 is a passionate team dedicated to helping businesses thrive during the FIFA World Cup. We combine deep industry knowledge with creative strategy to unlock new opportunities for our clients.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-3">Our Mission</h2>
        <p className="text-slate-700 mb-2">To empower businesses to seize the unique opportunities of the 2026 FIFA World Cup through expert guidance, innovative solutions, and hands-on support.</p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
            <Image src="/globe.svg" alt="Jane Doe" width={48} height={48} className="rounded-full bg-white" />
            <div>
              <div className="font-bold text-blue-900">Jane Doe</div>
              <div className="text-blue-700">Founder & CEO</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
            <Image src="/file.svg" alt="John Smith" width={48} height={48} className="rounded-full bg-white" />
            <div>
              <div className="font-bold text-blue-900">John Smith</div>
              <div className="text-blue-700">Head of Strategy</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
            <Image src="/window.svg" alt="Alex Lee" width={48} height={48} className="rounded-full bg-white" />
            <div>
              <div className="font-bold text-blue-900">Alex Lee</div>
              <div className="text-blue-700">Partnerships Lead</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Services</h2>
        <ul className="space-y-6">
          <li className="bg-white rounded-xl shadow p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Strategy Sessions</h3>
            <p className="text-slate-700">Personalized consultations to identify your business&apos;s World Cup opportunities and craft a winning plan.</p>
          </li>
          <li className="bg-white rounded-xl shadow p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Monetization Blueprint</h3>
            <p className="text-slate-700">Actionable roadmaps for maximizing revenue from fan engagement, merchandising, and digital experiences.</p>
          </li>
          <li className="bg-white rounded-xl shadow p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Full-Service Launch</h3>
            <p className="text-slate-700">End-to-end support for launching new products, services, or campaigns tailored to the World Cup audience.</p>
          </li>
          <li className="bg-white rounded-xl shadow p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Partnership Opportunities</h3>
            <p className="text-slate-700">Connecting you with key partners, sponsors, and collaborators to amplify your impact.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
