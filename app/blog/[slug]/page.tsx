import { getPostSlugs, getPostHtml } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";

interface Post {
    slug: string;
    metadata: {
        title: string;
        date: string;
        readingTime: string;
        image?: string;
    };
    contentHtml: string;
}

export async function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostHtml(slug) as unknown as Post;

    // If post doesn't exist, show 404
    if (!post) {
        notFound();
    }

    return (
        <article className=" prose max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <Link
                href="/blog"
                className="inline-flex items-center text-stone-500 hover:text-stone-800 transition-colors mb-8 group"
            >
                <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Writing
            </Link>

            {post.metadata.image && (
                <div className="relative h-64 md:h-96 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight leading-tight">
                    {post.metadata.title}
                </h1>
                <div className="flex items-center text-stone-500 text-sm space-x-4 border-b border-stone-200 pb-8">
                    <time dateTime={post.metadata.date}>
                        {format(new Date(post.metadata.date), 'MMMM d, yyyy')}
                    </time>
                    <span>•</span>
                    <span>{post.metadata.readingTime}</span>
                </div>
            </header>

            <div
                className="prose prose-stone prose-lg max-w-none
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-stone-800
                prose-a:text-stone-600 prose-a:no-underline hover:prose-a:text-stone-900 hover:prose-a:underline
                prose-strong:text-stone-900
                prose-code:text-stone-800 prose-code:bg-stone-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-stone-900 prose-pre:text-stone-50
                prose-blockquote:border-l-stone-300 prose-blockquote:text-stone-600 prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
        </article>
    );
}

