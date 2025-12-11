import { getAllPosts } from "@/lib/posts";
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

const Blog = () => {
  const posts = getAllPosts() as unknown as Post[];
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1)
  const topPosts = otherPosts.slice(0, 3)
  const bottomPosts = otherPosts.slice(3)


  return (
    <section id="blog" className="py-24 bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-stone-900 dark:text-stone-100 mb-16 tracking-tight">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured Blog */}
          <div className="col-span-1 lg:col-span-1 group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-6">
              <img
                src={featuredPost.metadata.image}
                alt="kasina azmon"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Featured</span>
              <h3 className="text-2xl md:text-3xl font-medium text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                {featuredPost.metadata.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-base md:text-lg leading-relaxed font-light">
                {featuredPost.metadata.excerpt}
              </p>
              <a
                href="/blog/featured-post"
                className="text-stone-900 dark:text-stone-100 font-medium inline-flex items-center gap-2 mt-2"
              >
                Read More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>

            </div>
          </div>

          {/* Blog List */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {topPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group flex gap-6 pb-8 border-b border-stone-200 dark:border-stone-800 last:border-0"
              >
                <div className="overflow-hidden rounded-xl w-32 h-24 md:w-48 md:h-32 flex-shrink-0">
                  <img
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  {/* <p className="text-xs font-medium text-stone-500 dark:text-stone-500 mb-2 uppercase tracking-wide">
                    {post.metadata.category}
                  </p> */}
                  <h3 className="text-lg md:text-xl font-medium text-stone-900 dark:text-stone-100 mb-2 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                    {post.metadata.title}
                  </h3>
                  <p className="hidden md:block text-stone-600 dark:text-stone-400 text-sm leading-relaxed font-light line-clamp-2">
                    {post.metadata.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
