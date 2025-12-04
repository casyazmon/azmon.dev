import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

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

export default function BlogPage() {
    const posts = getAllPosts() as unknown as Post[];

    return (
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-stone-800 mb-4 tracking-tight">Writing</h1>
                <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                    Thoughts, tutorials, and insights on development and design.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(({ slug, metadata }) => (
                    <Link
                        key={slug}
                        href={`/blog/${slug}`}
                        className="group block bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        {metadata.image && (
                            <div className="relative h-48 w-full">
                                <Image
                                    src={metadata.image}
                                    alt={metadata.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        )}
                        <div className="p-6 h-full flex flex-col">
                            <div className="flex items-center text-xs text-stone-500 mb-3 space-x-2">
                                <time dateTime={metadata.date}>
                                    {format(new Date(metadata.date), 'MMMM d, yyyy')}
                                </time>
                                <span>•</span>
                                <span>{metadata.readingTime}</span>
                            </div>

                            <h2 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-stone-600 transition-colors">
                                {metadata.title}
                            </h2>

                            <p className="text-stone-600 text-sm line-clamp-3 mb-4 flex-grow">
                                {metadata.excerpt || "Read more about this topic..."}
                            </p>

                            <div className="flex items-center text-stone-500 text-sm font-medium group-hover:text-stone-800 transition-colors">
                                Read article
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
