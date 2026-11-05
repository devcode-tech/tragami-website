"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  LayoutGrid,
  GitBranch,
  SlidersHorizontal,
  ClipboardList,
  Link2,
  ShieldCheck,
  BarChart3,
  Webhook,
  Download,
  AppWindow,
  type LucideIcon,
} from "lucide-react";

/**
 * Feature overview: the ten supporting features as one grid, with no
 * separate product categories, as the brief asks. Descriptions restate what
 * the product sections above already say.
 */
const features: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Drag-and-drop campaign forms", description: "Build entry forms with configurable fields.", icon: LayoutGrid },
  { title: "Conditional form logic", description: "Tailor the entry experience for each participant.", icon: GitBranch },
  { title: "Custom fields", description: "Collect the information each promotion needs.", icon: SlidersHorizontal },
  { title: "Campaign and entry management", description: "Keep campaign submissions organized in one place.", icon: ClipboardList },
  { title: "Source and referral attribution", description: "Associate eligible entries with the source that generated them.", icon: Link2 },
  { title: "Bot protection and entry validation", description: "Help reduce invalid and automated submissions.", icon: ShieldCheck },
  { title: "Campaign performance reporting", description: "Monitor participation and submission activity.", icon: BarChart3 },
  { title: "Webhook integrations", description: "Send submission data to supported external systems.", icon: Webhook },
  { title: "Submission exports", description: "Export captured data for follow-up.", icon: Download },
  { title: "Embeddable campaign experiences", description: "Available where supported.", icon: AppWindow },
];

export default function FeatureGridGamiflow({ className }: { className?: string }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section id="features" className={"w-full bg-[#FFFEFF] py-20 lg:py-32 overflow-hidden " + (className || "")}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
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
                Features
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 w-full max-w-[820px] text-[#111827] text-center font-onest text-[32px] sm:text-[40px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px]"
            >
              Everything You Need to Run a{" "}
              <span className="text-black/40 font-playfair italic font-semibold">Measurable</span> Giveaway
            </motion.h2>

            <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
              {features.map((f, idx) => (
                <motion.div
                  key={f.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx % 5) * 0.07, ease: [0.21, 0.45, 0.32, 0.9] as const }}
                  className="flex flex-col gap-4 rounded-[24px] border border-[#2563EB]/10 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(4,39,24,0.06)]"
                >
                  <div className="w-10 h-10 bg-[#f9fbfb] border border-[#F9F9FD] rounded-lg flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-[#3779eb]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[#111827] font-onest text-[18px] font-semibold leading-[24px] tracking-[-0.4px]">
                      {f.title}
                    </h3>
                    <p className="text-[#111827] font-inter text-[15px] leading-[22px] opacity-70">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
