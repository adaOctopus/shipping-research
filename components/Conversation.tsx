// Who the research is for, and what a 30-minute Calendly conversation actually is.
import BookCallButton from "@/components/BookCallButton";

const ROLES = [
  "Import managers",
  "FMCG buyers",
  "Import buyers",
  "Purchasing managers",
  "Supply chain managers",
];

const Conversation = () => (
  <section id="conversation" className="px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-20">
      <div>
        <p className="label-caps mb-5">03 · A conversation</p>
        <h2 className="max-w-xl font-display text-[clamp(1.85rem,4vw,3.1rem)] leading-[1.12] text-navy">
          Thirty minutes on how ocean cargo lands on your dock.
        </h2>
        <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-navy/75">
          We are speaking with operators at wholesale import-export companies
          of about 11 to 50 people. We are not booking your freight. We want
          the unvarnished version of charges, tracking, carriers, customs, and
          cash.
        </p>
        <div className="mt-8">
          <BookCallButton>Book a call</BookCallButton>
        </div>
      </div>

      <div className="border border-line bg-cream p-7 md:p-9">
        <p className="label-caps mb-6">Who this is for</p>
        <ul className="flex flex-wrap gap-2">
          {ROLES.map((role) => (
            <li
              key={role}
              className="rounded-full border border-line bg-cream-deep/50 px-3.5 py-2 text-sm text-navy"
            >
              {role}
            </li>
          ))}
        </ul>
        <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-navy/70">
          If you sit between the forwarder, the carrier, and the warehouse —
          and the margin on the shipment is yours to protect — we would like to
          hear how it actually runs.
        </p>
      </div>
    </div>
  </section>
);

export default Conversation;
