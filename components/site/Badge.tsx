import React from "react";
import { cn } from "@/lib/utils";

/** Small pill used above headings (matching the Finsyc homepage badge). */
export function Badge({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all",
        tone === "dark"
          ? "bg-white/10 text-white border border-white/20 backdrop-blur-sm"
          : "bg-[#3779eb]/10 text-[#3779eb] border border-[#3779eb]/20 shadow-[0_2px_10px_rgba(55,121,235,0.08)]",
        className
      )}
    >
      <span>{children}</span>
    </span>
  );
}

