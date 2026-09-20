// Who the research is for, and what a 30-minute Calendly conversation actually is.
import BookCallButton from "@/components/BookCallButton";
import type { Dictionary } from "@/lib/i18n";

type ConversationProps = {
  t: Dictionary;
};

const Conversation = ({ t }: ConversationProps) => (
  <section id="conversation" className="px-5 py-20 md:px-8 md:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-20">
      <div>
        <h2 className="max-w-xl font-display text-[clamp(1.85rem,4vw,3.1rem)] leading-[1.12] text-navy">
          {t.conversation.h2}
        </h2>
        <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-navy/75">
          {t.conversation.body}
        </p>
        <div className="mt-8">
          <BookCallButton>{t.conversation.cta}</BookCallButton>
        </div>
      </div>

      <div className="border border-line bg-cream p-7 md:p-9">
        <p className="label-caps mb-6">{t.conversation.whoLabel}</p>
        <ul className="flex flex-wrap gap-2">
          {t.conversation.roles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-line bg-cream-deep/50 px-3.5 py-2 text-sm text-navy"
            >
              {role}
            </li>
          ))}
        </ul>
        <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-navy/70">
          {t.conversation.whoBody}
        </p>
      </div>
    </div>
  </section>
);

export default Conversation;
