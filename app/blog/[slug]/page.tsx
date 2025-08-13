// app/blog/[slug]/page.tsx
import { getAllPosts } from '@/lib/mdx';
import BlogLayout from '@/components/BlogLayout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const Post = (await import(`@/../blog/${slug}.mdx`)).default;
    const meta = (await import(`@/../blog/${slug}.mdx`)).meta;

    return (
      <BlogLayout>
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{meta.date}</p>
        <Post />
      </BlogLayout>
    );
  } catch (e) {
    notFound();
  }
}
