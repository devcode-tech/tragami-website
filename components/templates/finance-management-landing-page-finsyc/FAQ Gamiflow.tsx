"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is Tragami?",
    a: "Tragami is a giveaway campaign platform for collecting entries, capturing leads, and tracking participation across campaigns and channels.",
  },
  {
    q: "What is the difference between Conversion Giveaways and Channel Giveaways?",
    a: "Conversion Giveaways focus on campaign entry and lead capture. Channel Giveaways add source attribution to help businesses understand which tracked channels and partners generate participation.",
  },
  {
    q: "Can I customize my giveaway forms?",
    a: "Yes. Campaign forms can be configured using the available form-building features, fields, and conditional logic.",
  },
  {
    q: "Can I track entries from different partners?",
    a: "Yes. Channel Giveaways can use trackable links and available attribution data to associate eligible entries with identifiable sources.",
  },
  {
    q: "Can I connect Tragami to other tools?",
    a: "Tragami supports webhooks for sending captured submission data to external systems that can receive them.",
  },
  {
    q: "Does Tragami include mini-games?",
    a: "The current product offering focuses on giveaway campaigns, lead capture, and attribution.",
  },
];

export default function FaqGamiflow({ className }: { className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section id="faq" className={"w-full bg-[#F7FDFF] py-20 lg:py-32 " + (className || "")}>
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-[#3779eb]" />
            <span className="text-[#3779eb] font-inter text-base leading-6 tracking-[-0.3px]">FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-[#111827] text-center font-onest text-[32px] sm:text-[40px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px]"
          >
            Frequently Asked{" "}
            <span className="text-black/40 font-playfair italic font-semibold">Questions</span>
          </motion.h2>

          <div className="mt-12 w-full flex flex-col gap-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className={cn(
                    "rounded-[20px] border bg-white transition-shadow duration-300",
                    isOpen ? "border-[#3779eb]/25 shadow-[0_8px_30px_rgba(37,99,235,0.06)]" : "border-[#111827]/10"
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-onest text-[18px] sm:text-[20px] font-semibold leading-[26px] tracking-[-0.4px] text-[#111827]">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-[#111827]/60" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#111827]/60" aria-hidden="true" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-6 font-inter text-base sm:text-[18px] leading-relaxed text-[#111827] opacity-80">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
