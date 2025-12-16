import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

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
        <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight font-mono">
                    <span className="text-secondary">$</span> ls -la blog/
                </h1>
                <p className="text-secondary font-mono text-sm">
                    // All technical writings and insights
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(({ slug, metadata }) => (
                    <Link
                        key={slug}
                        href={`/blog/${slug}`}
                        className="group block bg-surface border border-border p-6 hover:border-foreground transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            {/* Metadata */}
                            <div className="flex items-center text-xs font-mono text-secondary mb-4 space-x-2">
                                <time dateTime={metadata.date}>
                                    {metadata.date}
                                </time>
                                <span>|</span>
                                <span>{metadata.readingTime}</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                                {metadata.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-secondary text-sm line-clamp-3 mb-4 flex-grow">
                                {metadata.excerpt || "Read more about this topic..."}
                            </p>

                            {/* Read link */}
                            <div className="flex items-center text-secondary text-sm font-mono group-hover:text-foreground transition-colors">
                                read
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

