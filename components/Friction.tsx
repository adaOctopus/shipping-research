// Four operational frictions small wholesale importers face once cargo is on the water.

const PROBLEMS = [
  {
    number: "01",
    title: "Charges that appear after the quote",
    body: "A CBM or weight remeasurement that does not match the packing list. Demurrage and detention under the wrong free-time terms. Customs exam markups, war-risk surcharges, destination-mismatch fees. The invoice arrives after delivery. The measurement record exists on the forwarder’s side. It is not shared unless you already know to ask.",
  },
  {
    number: "02",
    title: "Tracking that is a pin, not a picture",
    body: "A forwarded link shows a last known location. It does not tell you whether the box will make the cutoff, sit at transshipment, or miss the truck.",
  },
  {
    number: "03",
    title: "The forwarder as the only door to the carrier",
    body: "Proof sits with the carrier or the LCL console. The importer talks to the forwarder. Mid-size forwarders more often bake unverified charges into margin. Asking for the weighbridge record, the agreed tariff, and the W/M calculation makes a lot of lines vanish. Exceptions bounce. Days disappear.",
  },
  {
    number: "04",
    title: "Cash that leaves before cargo earns",
    body: "Freight, duties, and deposits go out while the container is still at sea. Delay is not only late stock. It is working capital sitting in a box.",
  },
];

const Friction = () => (
  <section id="friction" className="border-t border-line bg-cream-deep/40 px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-6xl">
      {/* <p className="label-caps mb-5">02 · The friction</p> */}
      <h2 className="max-w-2xl font-display text-[clamp(1.85rem,4vw,3.1rem)] leading-[1.12] text-navy">
        Import & Purchase Managers, FMCG Buyers & Supply Chain Leads face these challenges.
      </h2>

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
        {PROBLEMS.map((problem) => (
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
