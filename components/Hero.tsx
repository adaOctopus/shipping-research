// Opening research pitch: headline, who we talk to, and the annotated ship.
import BookCallButton from "@/components/BookCallButton";
import ShipDiagram from "@/components/ShipDiagram";

const Hero = () => (
  <section id="research" className="relative overflow-hidden px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
    <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.15fr)] lg:gap-6">
      <div className="max-w-xl">
        {/* <p className="label-caps mb-5 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
          01 · Research
        </p> */}
        <h1 className="font-display text-[clamp(2.15rem,6vw,4.35rem)] leading-[1.05] text-navy">
          Making ocean freight for SMB importers more profitable.
        </h1>
        <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-navy/75">
          Wholesale import-export companies of 11 to 50 people get billed after
          delivery for ocean freight charges they cannot independently verify —
          CBM remeasurement, demurrage, detention, customs exam, war-risk.
          Surprise lines hit about 5–20% of shipments. The proof usually exists.
          It is not sent unless you ask.
        </p>
        <div className="mt-8">
          <BookCallButton>BOOK A CALL WITH US</BookCallButton>
        </div>
      </div>

      <ShipDiagram />
    </div>

  
  </section>
);

export default Hero;
