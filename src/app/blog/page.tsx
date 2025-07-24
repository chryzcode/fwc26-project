import Link from "next/link";
import Image from "next/image";

export default function BlogIndex() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8">All Blog Posts</h1>
      <ul className="space-y-8">
        <li className="bg-white rounded-xl shadow p-6 border border-blue-100 flex gap-4 items-center">
          <Image src="/globe.svg" alt="Market Opportunity" width={80} height={80} className="rounded-lg bg-blue-50" />
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-5">
              <Link href="/market-opportunity" className="hover:text-accent transition-colors">Market Opportunity vs. Problem</Link>
            </h2>

            {/*add author and date*/}
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-semibold pr-2">Abdul-Rahman Akingbola</span>
              <span>Jun 18, 2025</span>
            </div>

            <p className="text-slate-700 mb-5">How to distinguish between chasing problems and seizing real opportunities in business. Learn the difference and why it matters for your World Cup strategy.</p>
            <Link href="/market-opportunity" className="text-primary font-semibold">Read more →</Link>
          </div>
        </li>
        {/* Placeholder for future posts */}
        <li className="bg-white rounded-xl shadow p-6 border border-blue-100 opacity-60 flex gap-4 items-center">
          <div className="w-20 h-20 rounded-lg bg-blue-50 flex items-center justify-center text-3xl text-blue-200">?</div>
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-1">Coming Soon</h2>
            <p className="text-slate-400 mb-2">More insights and strategies for FWC 2026 business success.</p>
          </div>
        </li>
      </ul>
    </main>
  );
} 