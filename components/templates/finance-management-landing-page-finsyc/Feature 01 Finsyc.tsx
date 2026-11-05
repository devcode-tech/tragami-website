"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FormInput, Route, Sparkles, Check, ArrowUpRight } from "lucide-react";
import { CHANNEL_HREF, CONVERSION_HREF } from "@/lib/site";
import { ChannelMock, ConversionMock, SampleNote } from "./Mockups";

/**
 * Product overview: the two products as two prominent cards, in the
 * template's feature-card layout (visual on top, copy below).
 */
interface ProductCardProps {
  name: string;
  title: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: React.ElementType;
  visual: React.ReactNode;
  className?: string;
  delay?: number;
  isMounted?: boolean;
}

function ProductCard({
  name,
  title,
  description,
  benefits,
  ctaLabel,
  ctaHref,
  icon: Icon,
  visual,
  className = "",
  delay = 0,
  isMounted = false,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] as const }}
      className={"flex flex-col items-start shrink-0 border border-[#2563EB]/10 overflow-hidden bg-white group w-full rounded-[24px] sm:rounded-[32px] " + (className || "")}
    >
      <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[440px] overflow-hidden flex items-center justify-center p-6 sm:p-8 bg-[#F9FBFB]">
        {isMounted && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          >
            <source
              src="https://raw.githubusercontent.com/devwithprem/bgvid/b0e855513b80550eab54cbf284a07ca97a299cbf/bgvid6.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <div className="relative z-10 w-full flex flex-col items-center justify-center gap-3 transition-all duration-500 group-hover:translate-y-[-6px]">
          {visual}
          <SampleNote />
        </div>
      </div>

      <div className="p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-5 self-stretch bg-white">
        <div className="w-10 h-10 p-2 flex items-center justify-center border border-[#3779eb]/20 bg-[#3779eb]/5 rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-[#3779eb] stroke-[2.5px]" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#3779eb] font-inter text-sm font-medium">{name}</p>
          <h3 className="text-[#111827] font-onest text-xl sm:text-2xl font-semibold leading-tight sm:leading-[30px] tracking-[-0.8px]">
            {title}
          </h3>
          <p className="text-[#111827] font-inter text-base sm:text-lg font-normal leading-relaxed sm:leading-[28px] opacity-80">
            {description}
          </p>
          <ul className="mt-2 flex flex-col gap-2.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3779eb]/10">
                  <Check className="h-3 w-3 text-[#3779eb]" strokeWidth={3} />
                </span>
                <span className="text-[#111827] font-inter text-base leading-6 tracking-[-0.3px]">{b}</span>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 font-inter text-base font-medium text-white transition-colors hover:bg-blue-700"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function OriginaFinsycFeature({ className }: { className?: string }) {
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

      <section id="products" className={"w-full bg-[#FFFEFF] py-20 lg:py-32 overflow-hidden " + (className || "")}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#3779eb]" />
                <span className="text-[#3779eb] text-center font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                  Our Products
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 w-full max-w-[760px] text-[#111827] text-center font-onest text-[32px] sm:text-[40px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px]"
              >
                Two Ways to Make Every Giveaway{" "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  Count
                </span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-3 w-full max-w-[640px] text-[#111827] text-center font-inter text-base sm:text-lg font-normal leading-relaxed sm:leading-7 opacity-80"
              >
                Whether you&apos;re generating leads directly or coordinating promotions across multiple channels, Tragami gives you the tools to launch campaigns and measure participation.
              </motion.p>
            </div>

            <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <ProductCard
                name="Conversion Giveaways"
                title="Turn Giveaway Entries Into Valuable Leads"
                description="Create giveaway campaigns designed to capture leads and encourage participation. Build forms, collect contact information, validate entries, and understand how your campaigns perform."
                benefits={[
                  "Create campaign-specific entry forms.",
                  "Capture names, email addresses, and custom information.",
                  "Use conditional logic to tailor the entry experience.",
                  "Apply entry validation and bot protection.",
                  "Track submissions and campaign performance.",
                  "Send captured data to supported external tools through webhooks.",
                ]}
                ctaLabel="Explore Conversion"
                ctaHref="#conversion"
                icon={FormInput}
                visual={<ConversionMock />}
                isMounted={isMounted}
                delay={0.2}
              />
              <ProductCard
                name="Channel Giveaways"
                title="Know Which Channels Drive Participation"
                description="Run giveaways across multiple marketing channels and track where entries originate. Attribute participation to partners, distributors, retail locations, influencers, or campaign-specific referral links."
                benefits={[
                  "Create trackable campaign and referral links.",
                  "Attribute entries to identifiable sources and partners.",
                  "Capture source and campaign information alongside submissions.",
                  "Compare participation across channels.",
                  "Review campaign and source performance in one dashboard.",
                  "Export or send captured data to supported external systems.",
                ]}
                ctaLabel="Explore Channel"
                ctaHref="#channel"
                icon={Route}
                visual={<ChannelMock />}
                isMounted={isMounted}
                delay={0.3}
              />
            </div>

            <p className="mt-8 max-w-[760px] text-center font-inter text-[15px] leading-relaxed text-[#111827]/60">
              {/* Conversion Giveaways capture leads. Channel Giveaways connect those leads to their recorded sources. Tragami helps businesses run and measure both. */}
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
