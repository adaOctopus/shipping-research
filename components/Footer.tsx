// Quiet close: antique-ship watermark, research note, and the Calendly link again.
import BookCallButton from "@/components/BookCallButton";
import { CALENDLY_URL } from "@/lib/constants";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-line bg-gradient-to-b from-cream to-[#eef3ea] px-5 pb-12 pt-20 md:px-8 md:pb-14 md:pt-24">
    <svg
      viewBox="0 0 640 180"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-6 left-1/2 w-[min(640px,90vw)] -translate-x-1/2 opacity-[0.12]"
    >
      <path
        d="M40 130 L160 130 L230 70 L300 130 L440 130 L500 88"
        fill="none"
        stroke="#0e2340"
        strokeWidth="1.6"
      />
      <path
        d="M90 130 L90 48 M160 130 L160 36 M230 70 L230 28 M300 130 L300 40 M400 130 L400 58"
        fill="none"
        stroke="#0e2340"
        strokeWidth="1.4"
      />
      <path
        d="M20 138 C120 158, 250 162, 320 138 C400 160, 520 152, 620 132 L320 176 Z"
        fill="#0e2340"
      />
    </svg>

    <div className="relative mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-display text-2xl text-navy">
          Greek Ships <span className="font-sans text-sm tracking-[0.2em] text-signal">XYZ</span>
        </p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy/65">
          Research with operators. We talk to the people who receive ocean
          cargo. We do not move it — yet.
        </p>
      </div>

      <div className="flex flex-col items-start gap-3 md:items-end">
        <BookCallButton>Book a call</BookCallButton>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-xs text-annotation underline-offset-4 hover:underline"
        >
          calendly.com/tasos-valtinos/30min
        </a>
      </div>
    </div>

    <p className="relative mx-auto mt-14 max-w-6xl text-xs text-navy/45">
      © 2026 Greek Ships XYZ
    </p>
  </footer>
);

export default Footer;
