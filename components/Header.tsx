// Sticky chrome: wordmark, maritime journey strip, and the Calendly call button.
import BookCallButton from "@/components/BookCallButton";

const STAGES = ["Booked", "On water", "Customs", "On dock"];

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
      <a
        href="#top"
        aria-label="Greek Ships XYZ home"
        className="shrink-0 font-display text-[1.05rem] leading-none text-navy"
      >
        Greek Ships{" "}
        <span className="text-signal tracking-[0.18em] text-[0.72rem] font-sans font-semibold">
          XYZ
        </span>
      </a>

      <nav
        aria-label="Shipment journey"
        className="hidden min-w-0 flex-1 items-center justify-center overflow-x-auto md:flex"
      >
        <ol className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-annotation whitespace-nowrap">
          {STAGES.map((stage, index) => (
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

      <BookCallButton variant="outline" className="shrink-0 px-4 text-[0.8rem]">
        Book a call
      </BookCallButton>
    </div>

    <div className="border-t border-line/60 md:hidden">
      <ol className="flex items-center gap-3 overflow-x-auto px-5 py-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-annotation whitespace-nowrap">
        {STAGES.map((stage, index) => (
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
