import React from "react";

interface BlogProps {
  title: string;
  except: string;
  date: string;
  image: string;
  link: string;
  description: string;
  category?: string;
  author?: string;
  tags?: string[];
  comments?: number;
  likes?: number;
  shares?: number;
  views?: number;
  readTime?: string;
  featured?: boolean;
}

const Blog = () => {
  const blogData: BlogProps[] = [
    {
      title: "Understanding React Hooks",
      except: "A deep dive into React hooks and how they can simplify your component logic.",
      date: "2023-10-01",
      image: "https://i.pinimg.com/736x/60/d5/44/60d544bbb24cb7e2a80f0e4b9a6f1fd5.jpg",
      link: "/blog/react-hooks",
      category: "UI/UX Design",
      description:
        "In this article, we explore the power of React hooks, including useState, useEffect, and custom hooks. Learn how to manage state and side effects in functional components.",
    },
    {
      title: "Building Scalable APIs with Node.js",
      except: "Learn how to create scalable and efficient APIs using Node.js and Express.",
      date: "2023-08-20",
      image: "https://i.pinimg.com/1200x/80/b2/b9/80b2b921d3922d8054e0e66ce8ca3511.jpg",
      link: "/blog/nodejs-api",
      category: "Backend Development",
      description:
        "This article discusses best practices for building RESTful APIs with Node.js, including error handling, authentication, and performance optimization.",
    },
    {
      title: "Next.js for Beginners",
      except: "An introduction to Next.js and its features for building server-rendered React applications.",
      date: "2023-09-15",
      image: "https://i.pinimg.com/736x/26/c3/42/26c34247d8babb8318cf0d3dbbb09d98.jpg",
      link: "/blog/nextjs-beginners",
      category: "Web Development",
      description:
        "This guide covers the basics of Next.js, including routing, data fetching, and static site generation. Perfect for those new to server-side rendering with React.",
    },
  ];

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
                src="https://i.pinimg.com/736x/d0/1b/23/d01b23e881e673ca71214c078edd031f.jpg"
                alt="kasina azmon"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Featured</span>
              <h3 className="text-2xl md:text-3xl font-medium text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                Featured Blog Post
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-base md:text-lg leading-relaxed font-light">
                Discover the latest trends in web development and design. This featured post covers everything you need to know about modern web technologies.
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
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="group flex gap-6 pb-8 border-b border-stone-200 dark:border-stone-800 last:border-0"
              >
                <div className="overflow-hidden rounded-xl w-32 h-24 md:w-48 md:h-32 flex-shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <p className="text-xs font-medium text-stone-500 dark:text-stone-500 mb-2 uppercase tracking-wide">
                    {blog.category}
                  </p>
                  <h3 className="text-lg md:text-xl font-medium text-stone-900 dark:text-stone-100 mb-2 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="hidden md:block text-stone-600 dark:text-stone-400 text-sm leading-relaxed font-light line-clamp-2">
                    {blog.except}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
