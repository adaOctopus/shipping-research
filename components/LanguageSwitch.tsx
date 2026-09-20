// Flag switch in the header; English is the default at /, Spanish lives at /es.
import { localePath, type Locale } from "@/lib/i18n";
import Link from "next/link";

type LanguageSwitchProps = {
  locale: Locale;
  label: string;
  englishLabel: string;
  spanishLabel: string;
};

const flagClass = (active: boolean) =>
  `inline-flex h-7 w-7 items-center justify-center rounded-sm transition ${
    active
      ? "opacity-100 ring-1 ring-navy/25"
      : "opacity-40 hover:opacity-80"
  }`;

const FlagUnitedKingdom = () => (
  <svg
    viewBox="0 0 60 30"
    aria-hidden="true"
    className="h-3 w-[18px] overflow-hidden rounded-[1px] shadow-[0_0_0_1px_rgba(14,35,64,0.16)]"
  >
    <rect width="60" height="30" fill="#012169" />
    <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="10" />
    <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="6" />
    <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
    <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const FlagSpain = () => (
  <svg
    viewBox="0 0 22 16"
    aria-hidden="true"
    className="h-3 w-[18px] overflow-hidden rounded-[1px] shadow-[0_0_0_1px_rgba(14,35,64,0.16)]"
  >
    <rect width="22" height="16" fill="#c60b1e" />
    <rect y="4" width="22" height="8" fill="#ffc400" />
  </svg>
);

const LanguageSwitch = ({
  locale,
  label,
  englishLabel,
  spanishLabel,
}: LanguageSwitchProps) => (
  <nav aria-label={label} className="flex items-center gap-0.5">
    <Link
      href={localePath("en")}
      hrefLang="en"
      lang="en"
      aria-label={englishLabel}
      aria-current={locale === "en" ? "page" : undefined}
      title={englishLabel}
      className={flagClass(locale === "en")}
    >
      <FlagUnitedKingdom />
    </Link>
    <Link
      href={localePath("es")}
      hrefLang="es"
      lang="es"
      aria-label={spanishLabel}
      aria-current={locale === "es" ? "page" : undefined}
      title={spanishLabel}
      className={flagClass(locale === "es")}
    >
      <FlagSpain />
    </Link>
  </nav>
);

export default LanguageSwitch;
