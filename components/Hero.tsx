// Opening research pitch: headline, who we talk to, and the annotated ship.
import BookCallButton from "@/components/BookCallButton";
import ShipDiagram from "@/components/ShipDiagram";

const Hero = () => (
  <section id="research" className="relative overflow-hidden px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
    <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.15fr)] lg:gap-6">
      <div className="max-w-xl">
        <p className="label-caps mb-5 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
          01 · Research
        </p>
        <h1 className="font-display text-[clamp(2.15rem,6vw,4.35rem)] leading-[1.05] text-navy">
          The ocean is still a black box after you pay.
        </h1>
        <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-navy/75">
          Conversations with import managers, FMCG buyers, and supply chain
          leads at wholesale import-export firms of 11 to 50 people. We want
          to understand how ocean cargo actually lands on your dock.
        </p>
        <div className="mt-8">
          <BookCallButton>Book a 30-minute conversation</BookCallButton>
        </div>
      </div>

      <ShipDiagram />
    </div>

    <p className="mt-16 text-center text-[0.65rem] uppercase tracking-[0.28em] text-annotation/70">
      keep scrolling
      <span className="mx-auto mt-2 block h-6 w-px bg-line" />
    </p>
  </section>
);

export default Hero;
