// Four operational frictions small wholesale importers face once cargo is on the water.
import type { Dictionary } from "@/lib/i18n";

type FrictionProps = {
  t: Dictionary;
};

const Friction = ({ t }: FrictionProps) => (
  <section id="friction" className="border-t border-line bg-cream-deep/40 px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-6xl">
      <h2 className="max-w-2xl font-display text-[clamp(1.85rem,4vw,3.1rem)] leading-[1.12] text-navy">
        {t.friction.h2}
      </h2>

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
        {t.friction.problems.map((problem) => (
          <article key={problem.number} className="bg-cream p-7 md:p-10">
            <p className="label-caps mb-6">{problem.number}</p>
            <h3 className="font-display text-[1.45rem] leading-snug text-navy md:text-[1.65rem]">
              {problem.title}
            </h3>
            <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-navy/70">
              {problem.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Friction;
