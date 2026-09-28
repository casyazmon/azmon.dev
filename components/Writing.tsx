import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostList from "./PostList";
import SectionHeading from "./SectionHeading";
import type { PostMeta } from "@/lib/posts";

const Writing = ({ posts, index }: { posts: PostMeta[]; index: string }) => (
  <section id="writing" className="border-t border-line">
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <SectionHeading
        index={index}
        label="Writing"
        title={
          <>
            Notes from the <em className="text-accent">backend</em>.
          </>
        }
      />
      <PostList posts={posts.slice(0, 3)} />
      <Link href="/writing" className="group mt-10 inline-flex items-center gap-2 text-sm font-medium">
        <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
          {posts.length > 3 ? `All ${posts.length} articles` : "All articles"}
        </span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  </section>
);

export default Writing;
