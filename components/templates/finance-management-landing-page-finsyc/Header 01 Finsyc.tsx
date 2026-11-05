"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardMock, SampleNote } from "./Mockups";

const trustPoints = [
  "Campaign-focused lead capture",
  "Channel and referral attribution",
  "Flexible forms and entry validation",
];

function HeroCta({
  href,
  label,
  variant,
  delay,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const primary = variant === "primary";
  return (
    <motion.a
      href={href}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" as const }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
      className={cn(
        "flex items-center gap-3 py-2 rounded-full group cursor-pointer relative h-14 border transition-all duration-300",
        primary ? "bg-[#2563EB] border-white/20" : "bg-white/20 backdrop-blur-xl border-white/60",
        isHovered ? "flex-row-reverse pl-2 pr-5" : "flex-row pl-5 pr-2"
      )}
    >
      <motion.span
        layout
        className={cn(
          "font-inter text-base lg:text-[18px] font-medium leading-[28px]",
          primary ? "text-white" : "text-[#2563EB]"
        )}
      >
        {label}
      </motion.span>

      <motion.div
        layout
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden shrink-0",
          primary ? "bg-white" : "bg-[#2563EB]"
        )}
      >
        <motion.div
          animate={{
            x: isHovered ? [-24, 0] : 0,
            opacity: isHovered ? [0, 1] : 1,
          }}
          transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
        >
          <ArrowUpRight className={cn("w-4 h-4", primary ? "text-[#2563EB]" : "text-white")} />
        </motion.div>
      </motion.div>
    </motion.a>
  );
}

export default function FinsycOriginalHeader({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
        className={"relative w-full overflow-hidden min-h-[800px] lg:min-h-[900px] bg-gradient-to-b from-[#eaf2f8] via-[#f1f6fa] to-white " + (className || "")}
      >
        {/* Background Video - shifted lower down to keep text clear and legible */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_180px)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_180px)]">
          {isMounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover translate-y-28 sm:translate-y-36 lg:translate-y-48"
            >
              <source
                src="https://raw.githubusercontent.com/devwithprem/bgvid/eb04be929f9a670e5fbdc98cc105f8917103b814/bgvid7.mp4"
                type="video/mp4"
              />
            </video>
          )}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-16">
          {/* Hero Content */}
          <div className="flex flex-col items-center mt-4 lg:mt-8">
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" as const }}
              className="flex flex-row items-center gap-1.5 sm:gap-2 px-3 sm:px-[14px] py-1.5 rounded-full bg-[#3779eb]/10 border border-[#3779eb]/20 mb-6 whitespace-nowrap"
            >
              <span className="font-inter text-sm sm:text-base lg:text-[18px] font-medium leading-[28px] text-[#3779eb]">
                Giveaway campaign platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" as const }}
              className="max-w-[860px] w-full text-center font-onest text-[40px] sm:text-[50px] lg:text-[66px] font-semibold leading-tight lg:leading-[72px] tracking-tight lg:tracking-[-3px] text-[#111827]"
            >
              Run Giveaways. Capture Leads.{" "}
              <span className="font-playfair italic font-semibold text-[#010101] opacity-50 tracking-normal lg:tracking-[-3.566px]">
                Track What Works.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" as const }}
              className="max-w-[660px] w-full text-center mt-5 font-inter text-lg lg:text-[20px] font-normal leading-relaxed lg:leading-[30px] tracking-[-0.4px] text-[#111827] opacity-80"
            >
              From lead-generating promotions to partner-driven campaigns, Tragami helps you collect entries, capture contact details, and measure where participation comes from.
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center gap-4">
              <HeroCta href="#conversion" label="Explore Conversion" variant="primary" delay={1} />
              <HeroCta href="#channel" label="Explore Channel" variant="secondary" delay={1.1} />
            </div>

            {/* Trust points */}
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" as const }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3"
            >
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 font-inter text-[15px] text-[#111827]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3779eb]/10">
                    <Check className="h-3 w-3 text-[#3779eb]" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>

            {/* Dashboard mockup */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 1, ease: "easeOut" as const }}
              className="mt-14 lg:mt-16 w-full max-w-[980px] flex flex-col items-center gap-3"
            >
              <DashboardMock />
              <SampleNote className="text-[#111827]/60" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
