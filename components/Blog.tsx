import Link from "next/link";
import React from "react";



interface Post {
  slug: string;
  metadata: {
    title: string;
    date: string;
    excerpt?: string;
    readingTime: string;
    image?: string;
  };
}

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight font-mono">
          <span className="text-secondary">$</span> cat blog/posts.log
        </h2>
        <p className="text-secondary mb-16 font-mono text-sm">
          // Technical writings and insights
        </p>

        <div className="max-w-4xl space-y-6">
          {posts.slice(0, 3).map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group block bg-surface border border-border p-6 hover:border-foreground transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                    {post.metadata.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-secondary mb-4 leading-relaxed">
                    {post.metadata.excerpt || "Read more about this topic..."}
                  </p>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-secondary">
                    <span>{post.metadata.date}</span>
                    <span className="text-border">|</span>
                    <span>{post.metadata.readingTime}</span>
                  </div>
                </div>

                {/* Read arrow */}
                <div className="flex items-center gap-2 font-mono text-sm text-secondary group-hover:text-foreground transition-colors">
                  <span>read</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-accent transition-colors duration-300 border-b border-foreground hover:border-accent"
          >
            <span>$ view_all_posts</span>
            <span className="transform translate-x-0 hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
