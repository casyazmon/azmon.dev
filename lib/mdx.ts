import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'blog');

export function getPostSlugs() {
  return fs.readdirSync(POSTS_PATH).filter((p) => /\.mdx?$/.test(p));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug));
}
