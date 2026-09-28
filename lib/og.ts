import { readFile } from "fs/promises";
import path from "path";

// Shared bits for generated images (link previews, icons). These render at build
// time with Satori, which needs raw font data rather than a CSS font stack.
export const palette = {
  bg: "#f5f3ee",
  ink: "#161614",
  muted: "#5d5b55",
  line: "#d9d5cb",
  accent: "#c2410c",
};

const fontDir = path.join(process.cwd(), "assets", "fonts");

export async function serifFonts() {
  const [regular, italic] = await Promise.all([
    readFile(path.join(fontDir, "InstrumentSerif-Regular.ttf")),
    readFile(path.join(fontDir, "InstrumentSerif-Italic.ttf")),
  ]);
  return [
    { name: "Instrument Serif", data: regular, style: "normal" as const, weight: 400 as const },
    { name: "Instrument Serif", data: italic, style: "italic" as const, weight: 400 as const },
  ];
}
