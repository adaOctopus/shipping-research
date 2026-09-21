// Sticky chrome: wordmark, journey strip, language switch, and Calendly.
import BookCallButton from "@/components/BookCallButton";
import LanguageSwitch from "@/components/LanguageSwitch";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  t: Dictionary;
};

const Header = ({ locale, t }: HeaderProps) => (
  <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:gap-4 md:px-8">
      <a
        href={localePath(locale)}
        aria-label={t.header.homeAria}
        className="shrink-0 font-display text-[1.05rem] leading-none text-navy"
      >
        GShips{" "}
        <span className="text-signal tracking-[0.18em] text-[0.72rem] font-sans font-semibold">
          Inc.
        </span>
      </a>

      <nav
        aria-label={t.header.journeyAria}
        className="hidden min-w-0 flex-1 items-center justify-center overflow-hidden xl:flex"
      >
        <ol className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-annotation whitespace-nowrap">
          {t.header.stages.map((stage, index) => (
            <li key={stage} className="flex items-center gap-2">
              {index > 0 && (
                <span className="h-px w-6 bg-line" aria-hidden="true" />
              )}
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-navy/40" />
                {stage}
              </span>
            </li>
          ))}
        </ol>
      </nav>

      <div className="flex shrink-0 items-center gap-1 sm:gap-3">
        <LanguageSwitch
          locale={locale}
          label={t.header.languageAria}
          englishLabel={t.header.languageEn}
          spanishLabel={t.header.languageEs}
        />
        <BookCallButton variant="outline" className="shrink-0 px-3 text-[0.8rem] sm:px-4">
          {t.header.bookCall}
        </BookCallButton>
      </div>
    </div>

    <div className="border-t border-line/60 xl:hidden">
      <ol className="flex items-center gap-3 overflow-x-auto px-5 py-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-annotation whitespace-nowrap">
        {t.header.stages.map((stage, index) => (
          <li key={stage} className="flex items-center gap-3">
            {index > 0 && <span className="text-line">—</span>}
            {stage}
          </li>
        ))}
      </ol>
    </div>
  </header>
);

export default Header;
