"use client";

import { WordsPullUp } from "@/components/ui/WordsPullUp";
import { cn } from "@/lib/utils";

/**
 * The consistent header pattern used by every content section, modeled on
 * the PrecisionSection reference's own header: a small badge pill, a plain
 * line, a gradient-accent line, and a muted explainer paragraph. Every
 * section now states what it's about through this same structure instead
 * of five different heading treatments.
 */
export function SectionHeader({
  badge,
  heading,
  accent,
  subtext,
  tone = "light",
  align = "left",
}: {
  badge?: string;
  heading: string;
  accent?: string;
  subtext?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const headingColor = tone === "dark" ? "text-white" : "text-[#1a0b54]";
  const subColor = tone === "dark" ? "text-[#c9b8e8]/70" : "text-[#7a6f96]";

  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center")}>
      {badge && (
        <span
          className={cn(
            "inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium",
            align === "center" && "self-center",
            tone === "dark" ? "bg-white/10 text-white" : "bg-[#f9f9f9] text-[#1a0b54]"
          )}
        >
          <BadgeIcon />
          {badge}
        </span>
      )}

      <div>
        <WordsPullUp as="h2" text={heading} align={align} className={cn("text-3xl font-normal tracking-tight md:text-4xl", headingColor)} />
        {accent && (
          <WordsPullUp
            as="h2"
            text={accent}
            align={align}
            className="mt-1 bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b] bg-clip-text text-3xl font-normal tracking-tight text-transparent md:text-4xl"
          />
        )}
      </div>

      {subtext && <p className={cn("max-w-xl text-base leading-relaxed", subColor)}>{subtext}</p>}
    </div>
  );
}

/** The badge icon from the PrecisionSection reference, reused as-is. */
function BadgeIcon() {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" className="shrink-0">
      <g clipPath="url(#sh-clip)">
        <circle cx="8.5" cy="8" r="7" stroke="#c86fff" fill="none" />
        <path d="M9.5 11.5V10.5H7.5V11.5H9.5ZM7.5 14.5C7.5 15.0523 7.94772 15.5 8.5 15.5C9.05228 15.5 9.5 15.0523 9.5 14.5H7.5ZM8.5 11.5H7.5V14.5H8.5H9.5V11.5H8.5Z" fill="#c86fff" />
        <path d="M12 7H11V9H12V7ZM15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7V9ZM12 8V9H15V8V7L12 7V8Z" fill="#c86fff" />
        <path d="M5 9H6V7H5V9ZM2 7C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9V7ZM5 8V7H2V8V9H5V8Z" fill="#c86fff" />
        <path d="M7.5 4.5V5.5H9.5V4.5H7.5ZM9.5 1.5C9.5 0.947715 9.05228 0.5 8.5 0.5C7.94772 0.5 7.5 0.947715 7.5 1.5H9.5ZM8.5 4.5H9.5V1.5H8.5H7.5V4.5H8.5Z" fill="#c86fff" />
      </g>
      <defs>
        <clipPath id="sh-clip">
          <rect width="16" height="16" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
