import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content", "writing");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

// Drafts are visible in `next dev` so you can preview them, and never ship in a build.
const showDrafts = process.env.NODE_ENV !== "production";

function readPostFile(slug: string) {
  const file = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (!data.title || !data.date) {
    throw new Error(`content/writing/${slug}.md needs "title" and "date" in its frontmatter`);
  }

  const meta: PostMeta = {
    slug,
    title: String(data.title),
    description: String(data.description ?? ""),
    // gray-matter parses unquoted YAML dates into Date objects
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(content.split(/\s+/).filter(Boolean).length / 225)),
  };

  return { meta, content };
}

function getSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getSlugs()
    .map((slug) => readPostFile(slug)?.meta)
    .filter((meta): meta is PostMeta => !!meta && (showDrafts || !meta.draft))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = readPostFile(slug);
  if (!file || (file.meta.draft && !showDrafts)) return null;

  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypePrettyCode, {
      theme: { light: "github-light", dark: "github-dark-dimmed" },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(file.content);

  return { ...file.meta, html: String(html) };
}

export function formatDate(date: string, month: "short" | "long" = "long") {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month,
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
