import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Cta } from "@/content/types";
import { SIGNUP_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CtaLink({
  cta,
  dark = false,
  signupHref = SIGNUP_HREF,
}: {
  cta: Cta;
  dark?: boolean;
  signupHref?: string;
}) {
  const href = cta.href === "#" ? signupHref : cta.href;
  const primary = cta.variant === "primary";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm sm:text-[15px] font-medium transition-all duration-300",
        primary
          ? dark
            ? "bg-white text-[#2563EB] hover:bg-white/90 shadow-[0_8px_24px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
            : "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
          : dark
            ? "bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white/20 hover:border-white/50"
            : "bg-white/90 backdrop-blur-md border border-[#2563EB]/20 text-[#111827] hover:border-[#2563EB]/40 hover:bg-[#2563EB]/5 shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
      )}
    >
      <span>{cta.label}</span>
      {cta.arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      )}
    </Link>
  );
}

