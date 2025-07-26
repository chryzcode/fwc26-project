export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  updatedDate?: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "fifa-business-advantage",
    title: "FIFA 2026 Business Advantage – Helping Businesses & Entrepreneurs Capitalize on the FIFA World Cup 2026 in Vancouver & Toronto",
    slug: "fifa-business-advantage",
    author: "Abdul-Rahman Akingbola",
    date: "Jun 18, 2025",
    readTime: "1 min read",
    updatedDate: "Jun 24",
    excerpt: "Are you ready to take your business to the next level and make the most out of the upcoming FIFA World Cup 2026 in Vancouver & Toronto? Discover how our consultation sessions can help you profit from this global event.",
    image: "/blog-image/fifa-businness advantage.avif",
    imageAlt: "FIFA Business Advantage Cover"
  },
  {
    id: "turn-fans-into-customers",
    title: "Turn Fans into Customers - Why this Matters",
    slug: "turn-fans-into-customers",
    author: "Abdul-Rahman Akingbola",
    date: "Jun 18, 2025",
    readTime: "2 min read",
    updatedDate: "Jun 24",
    excerpt: "The FIFA World Cup isn't just a sports event — it's a once-in-a-generation economic catalyst for cities, entrepreneurs, and innovators. Discover why FWC26 is a game-changer for local business.",
    image: "/blog-image/fans-into-client.avif",
    imageAlt: "Turn Fans into Customers Cover"
  },
  {
    id: "world-cup-business-opportunities",
    title: "10 Ways to Make Money During FIFA 2026",
    slug: "world-cup-business-opportunities",
    author: "Abdul-Rahman Akingbola",
    date: "Jun 18, 2025",
    readTime: "2 min read",
    updatedDate: "Jun 24",
    excerpt: "The FIFA World Cup 2026 is more than just a sporting event, it's a multi-billion dollar opportunity for entrepreneurs and small business owners. Discover 10 practical ways to make money during the World Cup.",
    image: "/blog-image/10-ways-to-make.avif",
    imageAlt: "World Cup Business Opportunities Cover"
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 