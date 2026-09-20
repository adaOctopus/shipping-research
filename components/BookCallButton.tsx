// Shared Calendly CTA used in the header, hero, conversation, and footer.
import { CALENDLY_URL } from "@/lib/constants";

type BookCallButtonProps = {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
};

const BookCallButton = ({
  variant = "primary",
  children,
  className = "",
}: BookCallButtonProps) => {
  const styles =
    variant === "primary"
      ? "w-full bg-signal text-white hover:bg-[#c91820] sm:w-auto"
      : "shrink-0 border border-navy/25 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-cream";

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors ${styles} ${className}`}
    >
      {children}
    </a>
  );
};

export default BookCallButton;
