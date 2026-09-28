import { ImageResponse } from "next/og";
import { palette, serifFonts } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS applies its own rounded mask, so this one is a full-bleed square.
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: palette.ink,
          color: palette.bg,
          fontFamily: "Instrument Serif",
          fontSize: 136,
          lineHeight: 1,
          position: "relative",
        }}
      >
        <span style={{ marginTop: 16 }}>A</span>
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 44,
            width: 20,
            height: 20,
            borderRadius: 999,
            background: palette.accent,
          }}
        />
      </div>
    ),
    { ...size, fonts: await serifFonts() },
  );
}
