import { ImageResponse } from "next/og";
import { palette, serifFonts } from "@/lib/og";

export const alt = "Akap Azmon — Backend Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const headline = "Backend systems that stay fast under load.";

// Mirrors the hero trace: [start, duration] in ms against a 100 ms budget
const bars = [
  [0, 84],
  [2, 9],
  [12, 66],
  [15, 14],
  [31, 27],
  [64, 5],
];

export default async function OpengraphImage() {
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
          azmon.dev
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 60 }}>
          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 22, fontSize: 96, lineHeight: 1, letterSpacing: -2, maxWidth: 700 }}>
            {headline.split(" ").map((word) => (
              <span key={word} style={word === "fast" ? { fontStyle: "italic", color: palette.accent } : undefined}>
                {word}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 280, paddingBottom: 12 }}>
            {bars.map(([start, duration], i) => (
              <div key={i} style={{ display: "flex", height: 14, borderRight: `2px dashed ${palette.accent}` }}>
                <div style={{ width: `${start}%` }} />
                <div
                  style={{
                    width: `${duration}%`,
                    borderRadius: 3,
                    background: i === 0 ? palette.ink : palette.accent,
                  }}
                />
              </div>
            ))}
          </div>
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
          <span>Ontario, Canada</span>
        </div>
      </div>
    ),
    { ...size, fonts: await serifFonts() },
  );
}
