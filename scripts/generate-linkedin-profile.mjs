import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const SIZE = 512;
const FONT_URL =
  "https://cdn.jsdelivr.net/fontsource/fonts/fraunces@5.2.5/latin-800-normal.ttf";

const mark = (background) =>
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background,
        color: "#f6f0e4",
        fontFamily: "Fraunces",
        fontSize: 188,
        fontWeight: 800,
        letterSpacing: "-0.06em",
        paddingBottom: 12,
      },
    },
    "GS",
  );

const generateOne = async (font, background, filename) => {
  const image = new ImageResponse(mark(background), {
    width: SIZE,
    height: SIZE,
    fonts: [
      { name: "Fraunces", data: font, weight: 800, style: "normal" },
    ],
  });

  const file = path.join(process.cwd(), "public", filename);
  await writeFile(file, Buffer.from(await image.arrayBuffer()));
  console.log(`Wrote ${file}`);
};

const generate = async () => {
  const font = await fetch(FONT_URL).then((response) => {
    if (!response.ok) {
      throw new Error(`Could not load Fraunces: ${response.status}`);
    }
    return response.arrayBuffer();
  });

  await mkdir(path.join(process.cwd(), "public"), { recursive: true });

  await generateOne(
    font,
    "linear-gradient(to bottom, #0e2340 50%, #2a5e55 50%)",
    "linkedin-profile.png",
  );

  await generateOne(font, "#0e2340", "favicon-512.png");
};

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
