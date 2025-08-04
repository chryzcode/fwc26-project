import Image from 'next/image';

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

interface MatchCardProps {
  match: Match;
  onJoinWaitlist: (match: Match) => void;
}

export default function MatchCard({ match, onJoinWaitlist }: MatchCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Match Stage and Day */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {match.stage}
          </span>
          <span className="text-sm text-gray-500">
            Match Day {match.matchDay}
          </span>
        </div>
      </div>
      
      {/* Match Header - Teams */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image 
                src={match.flag1} 
                alt={match.teams[0]} 
                width={40} 
                height={40} 
                className="rounded-full border-2 border-gray-200 shadow-sm"
              />
            </div>
            <span className="font-bold text-lg text-gray-800">{match.teams[0]}</span>
          </div>
          
          <div className="px-4 py-1 bg-gray-100 rounded-full">
            <span className="text-gray-600 font-semibold text-sm">VS</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg text-gray-800">{match.teams[1]}</span>
            <div className="relative">
              <Image 
                src={match.flag2} 
                alt={match.teams[1]} 
                width={40} 
                height={40} 
                className="rounded-full border-2 border-gray-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Match Details */}
      <div className="px-6 pb-4">
        <div className="grid grid-cols-1 gap-2 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{match.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{match.time}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{match.venue}</span>
          </div>
        </div>
      </div>

      {/* Status and Action */}
      <div className="px-6 pb-6">
        <div className="flex flex-col items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {match.status}
          </span>
          
          <button 
            onClick={() => onJoinWaitlist(match)}
            className="w-full px-6 py-3 bg-blue-800  hover:bg-blue-900 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
} 