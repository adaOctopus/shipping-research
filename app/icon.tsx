import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const Icon = () =>
  new ImageResponse(
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
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        GS
      </div>
    ),
    { ...size },
  );

export default Icon;
