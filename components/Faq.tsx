// Crawlable FAQ from operator research: post-delivery charges, CBM, D&D, dispute playbook, FOB vs DDP.
import type { Dictionary } from "@/lib/i18n";

type FaqProps = {
  t: Dictionary;
};

const Faq = ({ t }: FaqProps) => (
  <section
    id="faq"
    aria-labelledby="faq-heading"
    className="border-t border-line bg-cream-deep/40 px-5 py-20 md:px-8 md:py-28"
  >
    <div className="mx-auto max-w-6xl">
      <h2
        id="faq-heading"
        className="max-w-2xl font-display text-[clamp(1.85rem,4vw,3.1rem)] leading-[1.12] text-navy"
      >
        {t.faq.h2}
      </h2>
      <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-navy/75">
        {t.faq.intro}
      </p>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {t.faq.items.map((item) => (
          <details key={item.question} className="group py-1">
            <summary className="flex min-h-14 cursor-pointer list-none items-start justify-between gap-4 py-4 text-left font-display text-[1.15rem] leading-snug text-navy md:text-[1.3rem]">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-annotation transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="max-w-3xl space-y-3 pb-6 pr-8 text-[0.98rem] leading-relaxed text-navy/70">
              {item.answer.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
