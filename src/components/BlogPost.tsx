import Image from "next/image";
import Link from "next/link";
import { BlogPost as BlogPostType } from "@/data/blog-posts";

interface BlogPostProps {
  post: BlogPostType;
  children: React.ReactNode;
}

export default function BlogPost({ post, children }: BlogPostProps) {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={post.image}
          alt={post.imageAlt}
          width={800}
          height={320}
          className="w-full h-64 object-cover"
        />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
        {post.title}
      </h1>
      
      <div className="text-sm text-gray-700 mb-6">
        <span className="font-semibold pr-2">{post.author}</span>
        <span>{post.date} • {post.readTime}</span>
        {post.updatedDate && (
          <span className="ml-2 text-xs text-gray-500">Updated: {post.updatedDate}</span>
        )}
      </div>
      
      <article className="prose prose-blue max-w-none">
        {children}
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to All Blog Posts
          </Link>
        </div>
      </article>
    </main>
  );
} 