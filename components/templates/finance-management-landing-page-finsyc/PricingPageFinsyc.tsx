"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import PricingFinsyc from "./Pricing Finsyc";
import CTAWithFooter01Finsyc from "./CTA with Footer 01 Finsyc";

const pricingFaqs = [
  {
    q: "Can I switch between Conversion and Channel plans?",
    a: "Yes. Conversion and Channel are modular engines. You can subscribe to either or both depending on whether your current focus is lead generation or partner attribution.",
  },
  {
    q: "What happens if I exceed my monthly or yearly entry limit?",
    a: "You will never lose entries or have your campaigns cut off unexpectedly. Tragami alerts you when you reach 80% volume, and you can seamlessly upgrade or customize your volume tier directly from your dashboard.",
  },
  {
    q: "Do you offer annual discounts?",
    a: "Yes. Annual billing gives you a discount of up to 40% compared to monthly billing, with annual volume pooled across your entire year.",
  },
  {
    q: "Can I remove Tragami branding on campaigns?",
    a: "Yes. The Growth and Scale tiers for both Conversion and Channel allow you to remove Tragami branding completely and present a 100% white-labeled experience to your participants.",
  },
];

export default function PricingPageFinsyc() {
  const [isMounted, setIsMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <div className="min-h-screen bg-white">
        {/* TOP HERO & NAV */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#eaf2f8] via-[#f1f6fa] to-white pt-6 lg:pt-8 pb-12">
          {/* Ambient Video Background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_160px)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_160px)]">
            {isMounted && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover translate-y-28 sm:translate-y-36 lg:translate-y-48 opacity-60"
              >
                <source
                  src="https://raw.githubusercontent.com/devwithprem/bgvid/eb04be929f9a670e5fbdc98cc105f8917103b814/bgvid7.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-8">
            {/* Hero Heading */}
            <div className="flex flex-col items-center mt-4 lg:mt-8 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#3779eb]/10 border border-[#3779eb]/20 mb-6 whitespace-nowrap"
              >
                <span className="font-inter text-xs sm:text-sm font-semibold tracking-wide text-[#3779eb] uppercase">
                  Simple, Transparent Pricing
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-[860px] w-full font-onest text-[38px] sm:text-[50px] lg:text-[64px] font-semibold leading-tight lg:leading-[72px] tracking-tight lg:tracking-[-2.5px] text-[#111827]"
              >
                Choose Your{" "}
                <span className="font-playfair italic font-semibold text-[#010101] opacity-50 tracking-normal">
                  Tragami Plan.
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="max-w-[640px] w-full mt-4 font-inter text-base sm:text-lg lg:text-[20px] font-normal leading-relaxed text-[#111827] opacity-80"
              >
                Conversion and Channel are priced separately, so you only pay for the exact giveaway capability you need. Upgrade or customize volume anytime.
              </motion.p>
            </div>
          </div>
        </section>

        {/* PRICING FINSYC SECTION */}
        <div id="plans">
          <PricingFinsyc className="pt-8 pb-16 lg:py-20" />
        </div>

        {/* PRICING FAQ */}
        <section className="w-full bg-[#F7FDFF] py-20 lg:py-28">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap mb-6">
              <span className="text-[#3779eb] font-inter text-base leading-6 tracking-[-0.3px]">
                Billing Questions
              </span>
            </div>

            <h2 className="text-[#111827] text-center font-onest text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-tight tracking-[-1.2px]">
              Frequently Asked{" "}
              <span className="text-black/40 font-playfair italic font-semibold">Questions</span>
            </h2>

            <div className="mt-10 w-full flex flex-col gap-3">
              {pricingFaqs.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={item.q}
                    className={cn(
                      "rounded-[20px] border bg-white transition-shadow duration-300",
                      isOpen
                        ? "border-[#3779eb]/25 shadow-[0_8px_30px_rgba(37,99,235,0.06)]"
                        : "border-[#111827]/10"
                    )}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    >
                      <span className="font-onest text-[18px] sm:text-[20px] font-semibold text-[#111827]">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 shrink-0 text-[#111827]/60" />
                      ) : (
                        <ChevronDown className="h-5 w-5 shrink-0 text-[#111827]/60" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="px-6 pb-6 font-inter text-base leading-relaxed text-[#111827] opacity-80">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <CTAWithFooter01Finsyc />
      </div>
    </>
  );
}
