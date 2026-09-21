import { getDictionary, type Locale } from "@/lib/i18n";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_TYPE = "image/png";

const COLORS = ["#e5b0a2", "#eb6953", "#bca12e", "#2a5e55", "#b2a6be", "#b7c3c3"];

const CONTAINERS = Array.from({ length: 13 }, (_, bay) => {
  const tiers = bay < 1 || bay > 11 ? 3 : 4;
  return Array.from({ length: tiers }, (_, tier) => ({
    x: 302 + bay * 37,
    y: 122 + (4 - tiers) * 28 + tier * 28,
    fill: COLORS[(bay * 2 + tier * 3) % COLORS.length],
  }));
}).flat();

const loadFraunces = async (weight: 400 | 800) => {
  const response = await fetch(
    `https://cdn.jsdelivr.net/fontsource/fonts/fraunces@5.2.5/latin-${weight}-normal.ttf`,
  );
  if (!response.ok) {
    throw new Error(`Could not load Fraunces ${weight}`);
  }
  return response.arrayBuffer();
};

const Headline = ({
  text,
  emphasis,
  fontSize,
}: {
  text: string;
  emphasis: string;
  fontSize: number;
}) => {
  const words = text.replace(/\.$/, "").split(" ");
  const lastIsEmphasis = words[words.length - 1] === emphasis;
  const lead = lastIsEmphasis ? words.slice(0, -1) : words;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        fontSize,
        lineHeight: 1.08,
        letterSpacing: "-0.03em",
        color: "#0e2340",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {lead.map((word, index) => {
          const last = index === lead.length - 1;
          return (
            <span
              key={`${word}-${index}`}
              style={{
                display: "flex",
                marginRight: last && !lastIsEmphasis ? 0 : 14,
                fontWeight: word === emphasis ? 800 : 400,
              }}
            >
              {word}
              {last && !lastIsEmphasis ? "." : ""}
            </span>
          );
        })}
      </div>
      {lastIsEmphasis ? (
        <div style={{ display: "flex", fontWeight: 800 }}>{emphasis}.</div>
      ) : null}
    </div>
  );
};

const Ship = ({
  labels,
}: {
  labels: { charges: string; tracking: string; carriers: string; capital: string };
}) => (
  <div
    style={{
      display: "flex",
      position: "relative",
      width: 620,
      height: 360,
    }}
  >
    <svg width="620" height="360" viewBox="0 0 920 400">
      <path
        d="M72 246 C108 232, 158 228, 198 230 L798 234 L852 246 L868 268 L858 300 C800 316, 210 318, 108 304 L68 272 Z"
        fill="#0e2340"
      />
      <path
        d="M78 292 L856 296 L858 302 C800 316, 210 318, 108 304 Z"
        fill="#2a5e55"
      />
      <path d="M68 272 L54 280 L74 244 Z" fill="#0e2340" />
      {CONTAINERS.map((box) => (
        <rect
          key={`${box.x}-${box.y}`}
          x={box.x}
          y={box.y}
          width="34"
          height="26"
          rx="1.2"
          fill={box.fill}
        />
      ))}
      <rect x="148" y="168" width="142" height="76" rx="2" fill="#f3eee3" />
      <rect x="148" y="158" width="142" height="12" fill="#d5ccbb" />
      <rect x="186" y="128" width="16" height="32" fill="#c9c0ae" />
      <rect x="236" y="102" width="9" height="58" fill="#b7ae9c" />
      <rect x="224" y="88" width="32" height="16" rx="1" fill="#c2642a" />
      <rect x="268" y="148" width="14" height="32" rx="1" fill="#0e2340" />
      <path d="M96 258 L40 176" stroke="#2c4a6e" strokeWidth="1.4" />
      <path d="M520 122 L520 36" stroke="#2c4a6e" strokeWidth="1.4" />
      <path d="M740 122 L848 64" stroke="#2c4a6e" strokeWidth="1.4" />
      <path d="M850 256 L892 214" stroke="#2c4a6e" strokeWidth="1.4" />
    </svg>
    <div
      style={{
        position: "absolute",
        left: 8,
        top: 118,
        display: "flex",
        fontSize: 13,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#2c4a6e",
      }}
    >
      {labels.charges}
    </div>
    <div
      style={{
        position: "absolute",
        left: 250,
        top: 4,
        display: "flex",
        fontSize: 13,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#2c4a6e",
      }}
    >
      {labels.tracking}
    </div>
    <div
      style={{
        position: "absolute",
        right: 8,
        top: 28,
        display: "flex",
        fontSize: 13,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#2c4a6e",
      }}
    >
      {labels.carriers}
    </div>
    <div
      style={{
        position: "absolute",
        right: 8,
        top: 188,
        display: "flex",
        fontSize: 13,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#2c4a6e",
      }}
    >
      {labels.capital}
    </div>
  </div>
);

export const buildOgImage = async (locale: Locale) => {
  const t = getDictionary(locale);
  const spanish = locale === "es";
  const [regular, extraBold] = await Promise.all([
    loadFraunces(400),
    loadFraunces(800),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f6f0e4",
          color: "#0e2340",
          fontFamily: "Fraunces",
          padding: "42px 56px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 28 }}>
            Greek Ships
            <span
              style={{
                marginLeft: 8,
                fontSize: 16,
                letterSpacing: "0.2em",
                fontWeight: 800,
                color: "#c2642a",
              }}
            >
              XYZ
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 44,
              padding: "0 22px",
              border: "1px solid rgba(14,35,64,0.25)",
              borderRadius: 999,
              fontSize: 18,
            }}
          >
            {t.header.bookCall}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 500,
              overflow: "hidden",
            }}
          >
            <Headline
              text={t.hero.h1}
              emphasis={t.hero.h1Emphasis}
              fontSize={spanish ? 48 : 58}
            />
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 20,
                lineHeight: 1.4,
                color: "rgba(14,35,64,0.72)",
                maxWidth: 460,
              }}
            >
              {`${t.hero.body.split(". ")[0].replace(" & ", " and ")}.`}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 28,
                height: 48,
                padding: "0 26px",
                background: "#c2642a",
                color: "#fff",
                borderRadius: 999,
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: "0.08em",
                alignSelf: "flex-start",
              }}
            >
              {t.hero.cta}
            </div>
          </div>
          <Ship labels={t.ship.labels} />
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Fraunces", data: regular, weight: 400, style: "normal" },
        { name: "Fraunces", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
};
