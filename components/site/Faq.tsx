"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "rounded-[20px] border bg-white transition-all duration-300 shadow-xs",
              isOpen ? "border-[#2563EB]/40 shadow-sm" : "border-[#2563EB]/15 hover:border-[#2563EB]/30"
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-onest text-base sm:text-lg font-semibold text-[#111827] cursor-pointer"
            >
              <span>{item.q}</span>
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300",
                  isOpen ? "rotate-180 bg-[#3779eb]/10 text-[#2563EB]" : "bg-gray-50 text-gray-400"
                )}
              >
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 font-inter text-sm sm:text-base leading-relaxed text-gray-600 border-t border-gray-100">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

