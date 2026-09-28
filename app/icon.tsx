import { ImageResponse } from "next/og";
import { palette, serifFonts } from "@/lib/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 14,
          color: palette.bg,
          fontFamily: "Instrument Serif",
          fontSize: 52,
          lineHeight: 1,
          position: "relative",
        }}
      >
        <span style={{ marginTop: 6 }}>A</span>
        <div
          style={{
            position: "absolute",
            right: 11,
            bottom: 13,
            width: 9,
            height: 9,
            borderRadius: 999,
            background: palette.accent,
          }}
        />
      </div>
    ),
    { ...size, fonts: await serifFonts() },
  );
}
