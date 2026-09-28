import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type PostMeta } from "@/lib/posts";

const PostList = ({ posts }: { posts: PostMeta[] }) => (
  <ol className="border-t border-line">
    {posts.map((post) => (
      <li key={post.slug} className="border-b border-line">
        <Link
          href={`/writing/${post.slug}`}
          className="group grid gap-3 py-8 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-10"
        >
          <time dateTime={post.date} className="font-mono text-xs text-faint">
            {formatDate(post.date, "short")}
          </time>
          <div>
            <h3 className="font-serif text-2xl leading-tight tracking-tight transition-colors group-hover:text-accent md:text-3xl">
              {post.title}
              {post.draft && (
                <span className="ml-3 rounded-full bg-accent-soft px-2 py-0.5 align-middle font-mono text-[10px] tracking-normal text-accent uppercase">
                  Draft
                </span>
              )}
            </h3>
            {post.description && <p className="mt-2 max-w-2xl leading-relaxed text-muted">{post.description}</p>}
          </div>
          <span className="hidden items-center gap-1 font-mono text-xs text-faint md:flex">
            {post.readingMinutes} min
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </span>
        </Link>
      </li>
    ))}
  </ol>
);

export default PostList;
