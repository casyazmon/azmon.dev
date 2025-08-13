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
    <section id="blog"  className="py-50">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-16">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {/* Featured Blog */}
          <div className="col-span-1 lg:col-span-1 bg-gray-50 dark:text-white">
            <img
              src="https://i.pinimg.com/736x/d0/1b/23/d01b23e881e673ca71214c078edd031f.jpg"
              alt="kasina azmon"
              className="w-full md:h-100 aspect-video object-cover mb-4 rounded-tl-lg rounded-tr-lg md:rounded-tl-lg md:rounded-tr-lg "
            />
            <div className="flex flex-col gap-4 px-4">
              <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-2 ">
                Featured Blog Post
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                Discover the latest trends in web development and design. This featured post covers everything you need to know about modern web technologies.
              </p>
              <a
                href="/blog/featured-post"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                Read More →
              </a>

            </div>
          </div>

          {/* Blog List */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="flex justify-between gap-6 pb-6 border-b border-gray-200 dark:border-gray-700"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-30 h-30  md:w-48 md:h-40 object-cover rounded-md"
                />
                <div className="flex flex-col flex-1 justify-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {blog.category} -{" "}
                  </p>
                  <h3 className="text-[16px] md:text-xl font-semibold text-black dark:text-white mb-2">
                    {blog.title}
                  </h3>
                  <p className="hidden md:block text-gray-600 dark:text-gray-300 text-sm md:text-base mb-1">
                    {blog.except}
                  </p>
                  <a
                    href={blog.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    Read More →
                  </a>
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
