// Quiet close: antique-ship watermark, research note, Calendly CTA, email, and LinkedIn.
import BookCallButton from "@/components/BookCallButton";
import { EMAIL, LINKEDIN_URL } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  t: Dictionary;
};

const Footer = ({ t }: FooterProps) => (
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
          {t.footer.blurb}
        </p>
      </div>

      <div className="flex flex-col items-start gap-3 md:items-end">
        <BookCallButton>{t.footer.bookCall}</BookCallButton>
        <div className="flex items-center gap-1">
          <a
            href={`mailto:${EMAIL}`}
            aria-label={t.footer.emailAria}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-navy/70 transition-colors hover:text-signal"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.linkedinAria}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-navy/70 transition-colors hover:text-signal"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46C23.2 24 24 23.22 24 22.27V1.73C24 .77 23.2 0 22.23 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <p className="relative mx-auto mt-14 max-w-6xl text-xs text-navy/45">
      © 2026 Greek Ships XYZ
    </p>
  </footer>
);

export default Footer;
