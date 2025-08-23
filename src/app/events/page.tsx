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
  stage: string;
  matchDay: number;
  flag1: string;
  flag2: string;
};

const matches: Match[] = [
  // Group Stage Matches
  {
    id: 1,
    city: 'Vancouver',
    date: '2026-06-13',
    time: 'TBA',
    teams: ['TBA', 'TBA'],
    venue: 'BC Place Vancouver',
    status: 'Waitlist Open',
    stage: 'Group Stage',
    matchDay: 6,
    flag1: '/blog-image/fans-into-client.avif', // Placeholder
    flag2: '/blog-image/10-ways-to-make.avif', // Placeholder
  },
  {
    id: 2,
    city: 'Vancouver',
    date: '2026-06-18',
    time: 'TBA',
    teams: ['Canada', 'TBA'],
    venue: 'BC Place Vancouver',
    status: 'Waitlist Open',
    stage: 'Group Stage',
    matchDay: 27,
    flag1: '/blog-image/fifa-businness advantage.avif', // Placeholder
    flag2: '/blog-image/10-ways-to-make.avif', // Placeholder
  },
  {
    id: 3,
    city: 'Vancouver',
    date: '2026-06-21',
    time: 'TBA',
    teams: ['TBA', 'TBA'],
    venue: 'BC Place Vancouver',
    status: 'Waitlist Open',
    stage: 'Group Stage',
    matchDay: 40,
    flag1: '/blog-image/fans-into-client.avif', // Placeholder
    flag2: '/blog-image/fifa-businness advantage.avif', // Placeholder
  },
  {
    id: 4,
    city: 'Vancouver',
    date: '2026-06-24',
    time: 'TBA',
    teams: ['Canada', 'TBA'],
    venue: 'BC Place Vancouver',
    status: 'Waitlist Open',
    stage: 'Group Stage',
    matchDay: 51,
    flag1: '/blog-image/10-ways-to-make.avif', // Placeholder
    flag2: '/blog-image/fans-into-client.avif', // Placeholder
  },
  {
    id: 5,
    city: 'Vancouver',
    date: '2026-06-26',
    time: 'TBA',
    teams: ['TBA', 'TBA'],
    venue: 'BC Place Vancouver',
    status: 'Waitlist Open',
    stage: 'Group Stage',
    matchDay: 64,
    flag1: '/blog-image/fifa-businness advantage.avif', // Placeholder
    flag2: '/blog-image/10-ways-to-make.avif', // Placeholder
  },
  // Round of 32
  {
    id: 6,
    city: 'Vancouver',
    date: '2026-07-02',
    time: 'TBA',
    teams: ['TBA', 'TBA'],
    venue: 'BC Place Vancouver',
    status: 'Waitlist Open',
    stage: 'Round of 32',
    matchDay: 85,
    flag1: '/blog-image/fans-into-client.avif', // Placeholder
    flag2: '/blog-image/10-ways-to-make.avif', // Placeholder
  },
  // Round of 16
  {
    id: 7,
    city: 'Vancouver',
    date: '2026-07-07',
    time: 'TBA',
    teams: ['TBA', 'TBA'],
    venue: 'BC Place Vancouver',
    status: 'Waitlist Open',
    stage: 'Round of 16',
    matchDay: 96,
    flag1: '/blog-image/fifa-businness advantage.avif', // Placeholder
    flag2: '/blog-image/10-ways-to-make.avif', // Placeholder
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState({ city: '', date: '', team: '', stage: '' });
  const [showModal, setShowModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const filteredMatches = matches.filter((m) =>
    (!filter.city || m.city === filter.city) &&
    (!filter.date || m.date === filter.date) &&
    (!filter.team || m.teams.includes(filter.team)) &&
    (!filter.stage || m.stage === filter.stage)
  );

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    console.log('🚀 Starting waitlist submission process...');
    console.log('📝 Form data:', formData);
    console.log('⚽ Selected match:', selectedMatch);

    try {
      console.log('📡 Making API call to /api/waitlist...');
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          matchId: selectedMatch?.id,
          matchDetails: selectedMatch ? `${selectedMatch.teams[0]} vs ${selectedMatch.teams[1]} (${selectedMatch.city}, ${selectedMatch.date})` : '',
        }),
      });

      console.log('📡 API Response status:', response.status);
      console.log('📡 API Response ok:', response.ok);

      const data = await response.json();
      console.log('📡 API Response data:', data);

      if (response.ok) {
        // Use the session URL directly instead of redirectToCheckout
        if (data.sessionUrl) {
          console.log('✅ Waitlist session created successfully');
          console.log('🔗 Opening checkout URL:', data.sessionUrl);
          
          // Open Stripe checkout in new tab using the provided session URL
          window.open(data.sessionUrl, '_blank');
          console.log('✅ Checkout window opened successfully');
        } else {
          console.error('❌ No session URL in response:', data);
          throw new Error('No checkout URL received');
        }
      } else {
        console.error('❌ API error:', data.error);
        setSubmitMessage({ type: 'error', text: data.error || 'Failed to join waitlist' });
      }
    } catch (error: any) {
      console.error('❌ Waitlist submission error:', error);
      console.error('❌ Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      const errorMsg = error.message || 'Network error. Please try again.';
      setSubmitMessage({ type: 'error', text: errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWaitlistModal = (match: Match) => {
    setSelectedMatch(match);
    setFormData({ name: '', email: '' });
    setSubmitMessage(null);
    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden" style={{backgroundImage: 'url(/Commercial-Opportunity.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Can't Find FIFA 2026 Tickets? Get on the List!</h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto py-5">Join the waitlist, and we'll source ticket availability for you.</p>
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
                <option value="Vancouver">Vancouver</option>
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
                <option value="TBA">TBA</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
            <div className="relative">
              <select className="px-4 py-2 pr-8 min-w-[160px] rounded border appearance-none" value={filter.stage} onChange={e => setFilter(f => ({...f, stage: e.target.value}))}>
                <option value="">All Stages</option>
                <option value="Group Stage">Group Stage</option>
                <option value="Round of 32">Round of 32</option>
                <option value="Round of 16">Round of 16</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </div>
          <div className="max-w-6xl mx-auto my-12">
            {/* Group Stage Matches */}
            {filteredMatches.filter(match => match.stage === 'Group Stage').length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-500 mb-10 text-center" >Group Stage Matches</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredMatches.filter(match => match.stage === 'Group Stage').map(match => (
                    <MatchCard 
                      key={match.id} 
                      match={match} 
                      onJoinWaitlist={openWaitlistModal}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Round of 32 Matches */}
            {filteredMatches.filter(match => match.stage === 'Round of 32').length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-500 mb-10 text-center" >Round of 32 Matches</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredMatches.filter(match => match.stage === 'Round of 32').map(match => (
                    <MatchCard 
                      key={match.id} 
                      match={match} 
                      onJoinWaitlist={openWaitlistModal}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Round of 16 Matches */}
            {filteredMatches.filter(match => match.stage === 'Round of 16').length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-500 mb-10 text-center" >Round of 16 Matches</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredMatches.filter(match => match.stage === 'Round of 16').map(match => (
                    <MatchCard 
                      key={match.id} 
                      match={match} 
                      onJoinWaitlist={openWaitlistModal}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Join Waitlist Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl font-bold" 
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            
            <h2 className="text-2xl font-bold mb-4">Join Waitlist</h2>
            
            {selectedMatch && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Match:</strong> {selectedMatch.teams[0]} vs {selectedMatch.teams[1]}
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Date:</strong> {selectedMatch.date} • <strong>Venue:</strong> {selectedMatch.venue}
                </p>
              </div>
            )}

            {submitMessage && (
              <div className={`mb-4 p-3 rounded-lg border ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                <p className="text-sm">{submitMessage.text}</p>
              </div>
            )}

            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name"
                  required 
                  placeholder="Your Full Name" 
                  className="w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
                  required 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-2 rounded border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="text-xs text-slate-600 bg-yellow-50 p-3 rounded border border-yellow-200">
                <p className="font-medium mb-1">Important Information:</p>
                <ul className="space-y-1">
                  <li>• $9.99 CAD deposit is required to join the waitlist</li>
                  <li>• Deposit is non-refundable and secures your spot</li>
                  <li>• You'll be notified when tickets become available</li>
                  <li>• No obligation to purchase when notified</li>
                </ul>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Pay $9.99 CAD & Join Waitlist'}
              </button>
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
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Join the Waitlist</h3>
              <ul className="text-slate-600 text-sm mb-2">
                <li>Enter your name, email, and match preference</li>
                <li>Submit the 'Join Waitlist' button</li>
                <li>Pay $9.99 CAD deposit to reserve your spot</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">We Search for You</h3>
              <ul className="text-slate-600 text-sm mb-2">
                <li>We source tickets from verified resellers or official channels</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Get Notified & Purchase</h3>
              <ul className="text-slate-600 text-sm mb-2">
                <li>Once a ticket is available, you'll be emailed to complete the purchase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Stripe loader function
async function loadStripe(publishableKey: string) {
  if (typeof window !== 'undefined') {
    const { loadStripe } = await import('@stripe/stripe-js');
    return loadStripe(publishableKey);
  }
  return null;
} 