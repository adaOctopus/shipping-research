// Original containership diagram: cream-paper silhouette, colored stacks, and research callouts.
import type { Dictionary } from "@/lib/i18n";

const COLORS = ["#e5b0a2", "#eb6953", "#bca12e", "#2a5e55", "#b2a6be", "#b7c3c3"];

const CONTAINERS = Array.from({ length: 13 }, (_, bay) => {
  const tiers = bay < 1 || bay > 11 ? 3 : 4;
  return Array.from({ length: tiers }, (_, tier) => ({
    x: 302 + bay * 37,
    y: 122 + (4 - tiers) * 28 + tier * 28,
    fill: COLORS[(bay * 2 + tier * 3) % COLORS.length],
  }));
}).flat();

const LABEL_LAYOUT = [
  { id: "charges" as const, className: "left-0 top-[28%]" },
  { id: "tracking" as const, className: "left-[52%] top-0 -translate-x-1/2" },
  { id: "carriers" as const, className: "right-0 top-[8%]" },
  { id: "capital" as const, className: "right-0 top-[48%]" },
];

type ShipDiagramProps = {
  t: Dictionary;
};

const ShipDiagram = ({ t }: ShipDiagramProps) => (
  <figure className="relative mx-auto w-full max-w-[920px]">
    <div className="relative">
      <svg
        viewBox="0 0 920 400"
        role="img"
        aria-labelledby="shipTitle shipDesc"
        className="h-auto w-full"
      >
        <title id="shipTitle">{t.ship.title}</title>
        <desc id="shipDesc">{t.ship.desc}</desc>

        <g opacity="0.1" transform="translate(200 300)">
          <path
            d="M20 48 L140 48 L200 8 L270 48 L400 48"
            fill="none"
            stroke="#0e2340"
            strokeWidth="1.3"
          />
          <path
            d="M60 48 L60 4 M140 48 L140 -6 M200 8 L200 -14 M270 48 L270 -4 M350 48 L350 10"
            fill="none"
            stroke="#0e2340"
            strokeWidth="1.1"
          />
          <path
            d="M8 54 C80 68, 180 70, 210 54 C250 68, 350 64, 420 52 L210 82 Z"
            fill="#0e2340"
          />
        </g>

        <line x1="36" y1="304" x2="884" y2="304" stroke="#c9bfa8" strokeWidth="1" />

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
            stroke="#0e2340"
            strokeWidth="0.55"
            strokeOpacity="0.16"
          />
        ))}

        <g>
          <rect x="148" y="168" width="142" height="76" rx="2" fill="#f3eee3" />
          <rect x="148" y="158" width="142" height="12" fill="#d5ccbb" />
          <rect x="186" y="128" width="16" height="32" fill="#c9c0ae" />
          <rect x="236" y="102" width="9" height="58" fill="#b7ae9c" />
          <rect x="224" y="88" width="32" height="16" rx="1" fill="#c2642a" />
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={162 + col * 30}
                y={176 + row * 18}
                width="18"
                height="10"
                rx="0.6"
                fill="#2c4a6e"
                opacity="0.5"
              />
            )),
          )}
          <rect x="268" y="148" width="14" height="32" rx="1" fill="#0e2340" />
        </g>

        <g className="max-md:hidden" stroke="#2c4a6e" strokeWidth="1" fill="none">
          <path d="M96 258 L40 176" />
          <path d="M520 122 L520 36" />
          <path d="M740 122 L848 64" />
          <path d="M850 256 L892 214" />
        </g>
      </svg>

      <ul className="pointer-events-none absolute inset-0 hidden md:block">
        {LABEL_LAYOUT.map((label) => (
          <li key={label.id} className={`label-caps absolute ${label.className}`}>
            {t.ship.labels[label.id]}
          </li>
        ))}
      </ul>
    </div>

    <figcaption className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 md:hidden">
      {LABEL_LAYOUT.map((label) => (
        <p key={label.id} className="label-caps">
          {t.ship.labels[label.id]}
        </p>
      ))}
    </figcaption>
  </figure>
);

export default ShipDiagram;
