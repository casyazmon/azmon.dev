import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Rss } from "lucide-react";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles by Akap Azmon on backend engineering, APIs, event-driven systems and performance.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const posts = getAllPosts();
  if (posts.length === 0) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6 md:pt-24 md:pb-32 lg:px-8">
      <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Writing</div>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1] tracking-tight md:text-7xl">
            Notes from the <em className="text-accent">backend</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            On APIs, event-driven systems, performance and the trade-offs behind them.
          </p>
        </div>
        <a
          href="/writing/rss.xml"
          className="inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-ink hover:text-ink md:self-auto"
        >
          <Rss className="h-4 w-4" />
          RSS
        </a>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
