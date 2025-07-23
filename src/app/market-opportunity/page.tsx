import Image from "next/image";
import Link from "next/link";

export default function MarketOpportunity() {
  return (
    <main className="bg-white">
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 grid md:grid-cols-2 gap-10 items-center min-h-[60vh] animate-fade-in">
        <div className="rounded-2xl bg-white/80 p-10 shadow-lg flex flex-col items-start animate-fade-in">
          <h1 className="text-4xl font-bold mb-6 text-blue-900 flex items-center gap-2">
            <span className="inline-block bg-blue-100 p-2 rounded-full"><Image src="/globe.svg" alt="Globe" width={32} height={32} /></span>
            Market Opportunity
          </h1>
          <ul className="space-y-4 text-blue-800 text-lg">
            <li>⚽ Over 1.2M spectators across Vancouver & Toronto</li>
            <li>🎉 High demand for fan engagement, food, merch & digital experiences</li>
            <li>💰 Multi-million dollar untapped revenue potential for small businesses</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 shadow-lg flex flex-col items-start animate-fade-in">
          <h2 className="text-3xl font-semibold mb-5 text-white flex items-center gap-2">
            <span className="inline-block bg-blue-100 p-2 rounded-full"><Image src="/file.svg" alt="Problem" width={28} height={28} /></span>
            The Problem
          </h2>
          <ul className="space-y-4 text-slate-200 text-lg">
            <li>❌ Businesses lack event-specific strategy</li>
            <li>⏰ Tight timelines & high competition</li>
            <li>⚠️ Risk of missed revenue without a plan</li>
          </ul>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-slate-300 mb-4">Don't miss out on this once-in-a-generation opportunity.</p>
            <Link href="/services" className="inline-flex items-center text-white font-medium group">
              See Our Solutions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
