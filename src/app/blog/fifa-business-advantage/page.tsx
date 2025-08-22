import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import { getBlogPost } from "@/data/blog-posts";

export default function FifaBusinessAdvantageBlog() {
  const post = getBlogPost("fifa-business-advantage");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <BlogPost post={post}>
      <p className="text-lg text-slate-700 mb-6">
        Are you ready to take your business to the next level and make the most out of the upcoming FIFA World Cup 2026 in Vancouver &amp; Toronto?
      </p>

                <h2 className="text-2xl font-bold text-blue-600 mb-4">What to Expect in This Session</h2>
              <p>
          In this 30–45 min consultation, we&apos;ll explore how your business or idea can profit from the FIFA World Cup 2026. Whether you&apos;re a local entrepreneur, small business owner, or creative professional, this session will help uncover opportunities tailored to your niche.
        </p>

              <h2 className="text-2xl font-bold text-blue-600 mb-4 mt-8">Meeting Agenda</h2>
      <ul className="space-y-3 text-gray-900">
        <li className="flex items-start gap-3">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">1</span>
          <span><strong>Quick Introduction</strong></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">2</span>
          <span><strong>Market Opportunity Overview</strong></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">3</span>
          <span><strong>Overview of Our Services & Tiers</strong></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">4</span>
          <span><strong>Implementation Roadmap</strong></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">5</span>
          <span><strong>Next Steps & Q&A</strong></span>
        </li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-secondary mb-3">Why This Matters</h3>
                    <p className="font-medium text-blue-600">FWC26 Business strategy - Ebook</p>
      </div>

              <h2 className="text-2xl font-bold text-blue-600 mb-4">After the Session</h2>
      <p className="mb-4">
        You&apos;ll have the option to move into <strong>Tier 2</strong>, which includes:
      </p>
      <ul className="space-y-3 text-gray-900 mb-6">
        <li className="flex items-start gap-3">
          <span className="text-blue-600 mt-1">•</span>
          <span>A personalized strategy session for niche discovery & validation</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-600 mt-1">•</span>
          <span>A detailed monetization blueprint (marketing, logistics, pricing)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-600 mt-1">•</span>
          <span>Optional full-service launch support (branding, website, content, on-site logistics)</span>
        </li>
      </ul>

      <div className="bg-blue-400 text-white p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold mb-3">Let's Meet to Build Your FIFA WORLD CUP 2026 Business Advantage Strategy</h3>
        <p className="mb-4">
          Whether you&apos;re running an existing business or exploring a new idea, now is the time to prepare for the massive opportunities coming with the FIFA World Cup.
        </p>
        <Link 
          href="/#contact" 
          className="inline-block bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Book Your Consultation
        </Link>
      </div>
    </BlogPost>
  );
} 