import { ImageResponse } from "next/og";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import { palette, serifFonts } from "@/lib/og";

export const alt = "Article by Akap Azmon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const title = post?.title ?? "Writing";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: palette.bg,
          color: palette.ink,
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, color: palette.muted }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: palette.accent }} />
          azmon.dev / writing
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 80 : 100, lineHeight: 1, letterSpacing: -2 }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `2px solid ${palette.line}`,
            paddingTop: 28,
            fontSize: 34,
            color: palette.muted,
          }}
        >
          <span>Akap Azmon · Backend Software Engineer</span>
          <span>{post ? formatDate(post.date) : ""}</span>
        </div>
      </div>
    ),
    { ...size, fonts: await serifFonts() },
  );
}
