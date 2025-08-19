import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/data/blog-posts";

export default function BlogIndex() {
  const blogPosts = getAllBlogPosts();

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8">All Blog Posts</h1>
      <ul className="space-y-8">
        {blogPosts.map((post) => (
          <li key={post.id} className="bg-white rounded-xl shadow p-6 border border-blue-100 flex gap-4 items-center">
            <Image 
              src={post.image} 
              alt={post.imageAlt} 
              width={200} 
              height={200} 
              className="rounded-lg object-cover w-40 h-40 flex-shrink-0" 
            />
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-5">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                  {post.title}
                </Link>
            </h2>

            <div className="text-sm text-gray-700 mb-2">
                <span className="font-semibold pr-2">{post.author}</span>
                <span>{post.date} • {post.readTime}</span>
                {post.updatedDate && (
                  <span className="ml-2 text-xs text-gray-500">Updated: {post.updatedDate}</span>
                )}
              </div>

              <p className="text-slate-700 mb-5">{post.excerpt}</p>
                              <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold">Read more →</Link>
            </div>
          </li>
        ))}

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