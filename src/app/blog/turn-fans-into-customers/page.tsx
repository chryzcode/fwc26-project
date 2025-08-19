import Image from "next/image";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import { getBlogPost } from "@/data/blog-posts";

export default function TurnFansIntoCustomersBlog() {
  const post = getBlogPost("turn-fans-into-customers");
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <BlogPost post={post}>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Key Highlights</h3>
          <ul className="text-secondary space-y-2">
            <li>• Over 1.2M spectators across Vancouver & Toronto</li>
            <li>• High demand for fan engagement, food, merch & digital experiences</li>
            <li>• Multi-million dollar untapped revenue potential for small businesses</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-blue-600 mb-4">Why FWC26 Is a Game-Changer for Local Business</h2>
        <p className="text-gray-900">
          The FIFA World Cup isn&apos;t just a sports event — it&apos;s a once-in-a-generation economic catalyst for cities, entrepreneurs, and innovators. With the 2026 tournament landing in Vancouver and Toronto, there&apos;s never been a better time to activate your business for global impact.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mb-4 mt-8">Key Insights & Value Propositions</h2>
        
        <h3 className="text-xl font-bold text-secondary mb-3">Massive Foot Traffic & Tourism</h3>
        <p className="text-gray-900">
          Over 1.2 million spectators will attend matches across both cities, creating massive foot traffic, tourism, and commercial activity across multiple sectors — retail, hospitality, entertainment, tech, and more.
        </p>

        <h3 className="text-xl font-bold text-secondary mb-3">Diverse Customer Base</h3>
        <p className="text-gray-900">
          Local fans + global travellers = diverse customer base hungry for food, culture, merch, and digital experiences that reflect both global excitement and local flavour.
        </p>

        <h3 className="text-xl font-bold text-secondary mb-3">Untapped Revenue Potential</h3>
        <p className="text-gray-900">
          Most small businesses don&apos;t have the time or tools to tailor their offers for a global event. With the right strategy, even solo entrepreneurs can unlock 5- to 6-figure revenue opportunities.
        </p>

        <h3 className="text-xl font-bold text-secondary mb-3">Brand Visibility on a World Stage</h3>
        <p className="text-gray-900">
          For startups and creators, this is a unique moment to gain exposure and build long-term customer relationships with international visitors and local fans alike.
        </p>

        <h3 className="text-xl font-bold text-secondary mb-3">Once-in-a-lifetime Momentum</h3>
        <p className="text-gray-900">
          Unlike annual events, FIFA only comes once every 4 years, and rarely to your city. This is your chance to ride the wave of cultural relevance, fan loyalty, and spending momentum.
        </p>

        <h3 className="text-xl font-bold text-secondary mb-3">Small Businesses are the Local Heroes</h3>
        <p className="text-gray-900">
          FIFA fans crave authentic experiences, meaning they&apos;ll often choose a neighbourhood pop-up, cultural vendor, or niche digital product over a big-box alternative. That&apos;s your edge.
        </p>

        <div className="bg-blue-400 text-white p-6 rounded-xl my-8">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Let's Meet to Build Your FIFA WORLD CUP 2026 Business Advantage Strategy</h3>
                  <p className="mb-4">
          Whether you&apos;re running an existing business or exploring a new idea, now is the time to prepare for the massive opportunities coming with the FIFA World Cup.
        </p>
          <p className="mb-4">
            Book a strategy session today and let's develop a custom plan to help you monetize this global event.
          </p>
          <Link 
            href="/#contact" 
            className="inline-block bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Download Free Ebook!</h3>
          <Link href="/FWC26 Business strategy - Ebook.pdf" target="_blank" className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded transition-colors">
            <Image src="/file.svg" alt="PDF File" width={32} height={40} className="w-8 h-10" />
            <div>
              <p className="font-medium text-blue-600">FWC26 Business strategy - Ebook</p>
              <p className="text-sm text-gray-600">Download PDF • 7.91MB</p>
            </div>
          </Link>
        </div>

    </BlogPost>
  );
} 