import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/writing/${slug}`,
      publishedTime: post.date,
      authors: [profile.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const posts = getAllPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  const newer = posts[i - 1];
  const older = posts[i + 1];

  return (
    <article className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6 md:pt-20 md:pb-32 lg:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          url: `https://azmon.dev/writing/${post.slug}`,
          image: `https://azmon.dev/writing/${post.slug}/opengraph-image`,
          keywords: post.tags,
          author: { "@type": "Person", name: profile.name, url: "https://azmon.dev" },
        }}
      />
      <Link
        href="/writing"
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        All writing
      </Link>

      <header className="mt-10 max-w-3xl border-b border-line pb-10 md:mt-14">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-faint">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
          {post.draft && (
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent uppercase">Draft</span>
          )}
        </div>
        <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">{post.title}</h1>
        {post.description && <p className="mt-6 text-xl leading-relaxed text-muted">{post.description}</p>}
        {post.tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
            {post.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="article mt-10 max-w-3xl" dangerouslySetInnerHTML={{ __html: post.html }} />

      <footer className="mt-20 max-w-3xl">
        <div className="rounded-2xl border border-line bg-surface/60 p-6 md:p-8">
          <p className="font-serif text-2xl leading-snug tracking-tight">
            Thanks for reading. I&apos;m {profile.name}, a backend engineer working on APIs, Kafka and
            performance.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-1 text-muted hover:text-ink">
              Email me <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-ink">
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link href="/" className="inline-flex items-center gap-1 text-muted hover:text-ink">
              About me <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {(newer || older) && (
          <nav className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="More articles">
            {older ? (
              <Link href={`/writing/${older.slug}`} className="group rounded-2xl border border-line p-5 transition-colors hover:border-ink">
                <div className="font-mono text-xs text-faint">← Older</div>
                <div className="mt-2 font-serif text-xl leading-snug group-hover:text-accent">{older.title}</div>
              </Link>
            ) : (
              <span />
            )}
            {newer && (
              <Link href={`/writing/${newer.slug}`} className="group rounded-2xl border border-line p-5 text-right transition-colors hover:border-ink">
                <div className="font-mono text-xs text-faint">Newer →</div>
                <div className="mt-2 font-serif text-xl leading-snug group-hover:text-accent">{newer.title}</div>
              </Link>
            )}
          </nav>
        )}
      </footer>
    </article>
  );
}
