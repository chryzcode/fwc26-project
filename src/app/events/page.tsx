"use client"
import { useState } from 'react';
import MatchCard from '@/components/MatchCard';

type Match = {
  id: number;
  city: string;
  date: string;
  time: string;
  teams: string[];
  venue: string;
  status: string;
  flag1: string;
  flag2: string;
};

const matches: Match[] = [
  // Example data, replace with real data or fetch from API
  {
    id: 1,
    city: 'Toronto',
    date: '2026-06-14',
    time: '19:00',
    teams: ['Canada', 'France'],
    venue: 'BMO Field',
    status: 'Waitlist Open',
    flag1: '/blog-image/fans-into-client.avif', // Placeholder
    flag2: '/blog-image/10-ways-to-make.avif', // Placeholder
  },
  {
    id: 2,
    city: 'Vancouver',
    date: '2026-06-16',
    time: '16:00',
    teams: ['USA', 'Mexico'],
    venue: 'BC Place',
    status: 'Waitlist Open',
    flag1: '/blog-image/fifa-businness advantage.avif', // Placeholder
    flag2: '/blog-image/10-ways-to-make.avif', // Placeholder
  },
  {
    id: 3,
    city: 'Montreal',
    date: '2026-06-18',
    time: '20:00',
    teams: ['Brazil', 'Argentina'],
    venue: 'Olympic Stadium',
    status: 'Waitlist Open',
    flag1: '/blog-image/fans-into-client.avif', // Placeholder
    flag2: '/blog-image/fifa-businness advantage.avif', // Placeholder
  },
  {
    id: 4,
    city: 'Edmonton',
    date: '2026-06-20',
    time: '18:30',
    teams: ['Germany', 'Spain'],
    venue: 'Commonwealth Stadium',
    status: 'Waitlist Open',
    flag1: '/blog-image/10-ways-to-make.avif', // Placeholder
    flag2: '/blog-image/fans-into-client.avif', // Placeholder
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState({ city: '', date: '', team: '' });
  const [showModal, setShowModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const filteredMatches = matches.filter((m) =>
    (!filter.city || m.city === filter.city) &&
    (!filter.date || m.date === filter.date) &&
    (!filter.team || m.teams.includes(filter.team))
  );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden" style={{backgroundImage: 'url(/Commercial-Opportunity.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Can’t Find FIFA 2026 Tickets? Get on the List!</h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto py-5">Join the waitlist, and we’ll source ticket availability for you.</p>
          <a href="#matches" className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:bg-accent transition hover:scale-110">Browse Matches & Join Waitlist</a>
        </div>
      </section>

      {/* Match Listings & Filters */}
      <section id="matches" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="relative">
              <select className="px-4 py-2 pr-8 min-w-[160px] rounded border appearance-none" value={filter.city} onChange={e => setFilter(f => ({...f, city: e.target.value}))}>
                <option value="">All Cities</option>
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Montreal">Montreal</option>
                <option value="Edmonton">Edmonton</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            <input type="date" className="px-4 py-2 pr-8 min-w-[160px] rounded border appearance-none" value={filter.date} onChange={e => setFilter(f => ({...f, date: e.target.value}))} />
            <div className="relative">
              <select className="px-4 py-2 pr-8 min-w-[160px] rounded border appearance-none" value={filter.team} onChange={e => setFilter(f => ({...f, team: e.target.value}))}>
                <option value="">All Teams</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Brazil">Brazil</option>
                <option value="Argentina">Argentina</option>
                <option value="Germany">Germany</option>
                <option value="Spain">Spain</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredMatches.map(match => (
              <MatchCard 
                key={match.id} 
                match={match} 
                onJoinWaitlist={(match) => {
                  setShowModal(true);
                  setSelectedMatch(match);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Waitlist Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-slate-400 hover:text-slate-700" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-2xl font-bold mb-4">Join Waitlist</h2>
            <form onSubmit={e => { e.preventDefault(); setShowModal(false); alert('Payment flow placeholder'); }} className="space-y-4">
              <input type="text" required placeholder="Your Name" className="w-full px-4 py-2 rounded border" />
              <input type="email" required placeholder="Your Email" className="w-full px-4 py-2 rounded border" />
              <select required className="w-full px-4 py-2 rounded border" defaultValue={selectedMatch?.id}>
                {matches.map(m => (
                  <option key={m.id} value={m.id}>{m.teams[0]} vs {m.teams[1]} ({m.city}, {m.date})</option>
                ))}
              </select>
              <div className="text-xs text-slate-500 bg-yellow-50 p-2 rounded">$9.99 deposit is non-refundable and does not guarantee ticket availability or count toward final ticket price.</div>
              <button type="submit" className="w-full py-3 rounded-lg bg-primary text-white font-bold shadow hover:bg-accent transition">Pay $9.99 & Join Waitlist</button>
            </form>
          </div>
        </div>
      )}

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-2xl">📝</div>
              <h3 className="font-bold text-lg mb-2">Join the Waitlist</h3>
              <ul className="text-slate-600 text-sm mb-2">
                <li>Enter your name, email, and match preference</li>
                <li>Submit the 'Join Waitlist' button</li>
                <li>Pay $9.99 deposit to reserve your spot</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-2xl">🔎</div>
              <h3 className="font-bold text-lg mb-2">We Search for You</h3>
              <ul className="text-slate-600 text-sm mb-2">
                <li>We source tickets from verified resellers or official channels</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-2xl">📧</div>
              <h3 className="font-bold text-lg mb-2">Get Notified & Purchase</h3>
              <ul className="text-slate-600 text-sm mb-2">
                <li>Once a ticket is available, you’ll be emailed to complete the purchase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 