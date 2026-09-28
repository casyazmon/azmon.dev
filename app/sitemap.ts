import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://azmon.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...(posts.length > 0 ? [{ url: `${siteUrl}/writing`, changeFrequency: "weekly" as const }] : []),
    ...posts.map((post) => ({ url: `${siteUrl}/writing/${post.slug}`, lastModified: post.date })),
  ];
}
