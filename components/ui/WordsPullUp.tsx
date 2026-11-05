import { cn } from "@/lib/utils";

/**
 * Splits text on spaces and reveals each word with a pure CSS animation
 * (see .animate-word-rise in globals.css). Deliberately NOT built on
 * Framer/Motion's `whileInView` -- that depends on an IntersectionObserver
 * firing correctly, and when it didn't (the cause of the "missing
 * headers" bug), the text was stuck at its `initial` opacity: 0 forever.
 * A CSS animation with `forwards` fill mode always settles on its `to`
 * state once it plays, with no JS/observer involved, so the words are
 * guaranteed to end up visible.
 */
export function WordsPullUp({
  text,
  className,
  wordClassName,
  as: Tag = "h2",
  align = "left",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
}) {
  const words = text.split(" ");
  return (
    <Tag
      className={cn(
        "flex flex-wrap gap-x-[0.28em]",
        align === "center" && "justify-center text-center",
        className
      )}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block pb-[0.1em]">
          <span
            className={cn("inline-block animate-word-rise", wordClassName)}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
