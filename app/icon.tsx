import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

const Icon = async () => {
  const font = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/fraunces@5.2.5/latin-800-normal.ttf",
  ).then((response) => response.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e2340",
          color: "#f6f0e4",
          fontFamily: "Fraunces",
          fontSize: 188,
          fontWeight: 800,
          letterSpacing: "-0.06em",
          paddingBottom: 12,
        }}
      >
        GS
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: font, weight: 800, style: "normal" },
      ],
    },
  );
};

export default Icon;
