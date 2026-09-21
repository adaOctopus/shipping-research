// Opening research pitch: headline, who we talk to, and the annotated ship.
import BookCallButton from "@/components/BookCallButton";
import ShipDiagram from "@/components/ShipDiagram";
import type { Dictionary } from "@/lib/i18n";

type HeroProps = {
  t: Dictionary;
};

const Hero = ({ t }: HeroProps) => (
  <section id="research" className="relative overflow-hidden px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
    <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.15fr)] lg:gap-6">
      <div className="max-w-xl">
        <h1 className="font-display text-[clamp(2.15rem,6vw,4.35rem)] font-normal text-pretty leading-[1.08] text-navy">
          {t.hero.h1.split(t.hero.h1Emphasis).map((part, index, parts) => (
            <span key={`${part}-${index}`}>
              {part}
              {index < parts.length - 1 && (
                <span className="font-extrabold">{t.hero.h1Emphasis}</span>
              )}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-navy/75">
          {t.hero.body}
        </p>
        <div className="mt-8">
          <BookCallButton>{t.hero.cta}</BookCallButton>
        </div>
      </div>

      <ShipDiagram t={t} />
    </div>
  </section>
);

export default Hero;
