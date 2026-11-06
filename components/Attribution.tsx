"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TragamiMark } from "@/components/ui/TragamiMark";
import { cn } from "@/lib/utils";

/**
 * PrecisionSection staircase, rebuilt to be robust instead of copying the
 * reference's fragile absolute-vw math (which was landing disconnected
 * from its own chip labels at real widths). Each pillar is one rigid
 * column -- chip, line, items all in normal flow, never absolutely
 * positioned apart from each other -- and the "stair" comes from a
 * per-column `translateY`, not from independently-positioned pieces. An
 * SVG line behind the row animates a moving dot through all four stages.
 */
const PILLARS = [
  { label: "Captures", items: ["QR scan", "campaign", "source", "customer"] },
  { label: "Entries", items: ["form", "entry", "submission", "validation"] },
  { label: "Rewards", items: ["type", "issued", "wallet", "expiry"] },
  { label: "Measures", items: ["redemption", "purchase", "lift", "ROI"] },
];

const STAIR_LIFT_PX = [0, 40, 80, 120]; // how far each pillar rises, left to right
const FLOW_PATH = "M40,210 L280,130 L520,90 L760,10";

const CHECKLIST_CARDS = [
  {
    n: "01",
    title: "Every source, tagged",
    items: ["QR scans by location", "Paid vs. organic entry", "Repeat vs. first-touch"],
    bg: "linear-gradient(180deg, #fcfdfd 0%, #f4f7f9 30%, #e2ebef 66%, #cedce4 100%)",
  },
  {
    n: "02",
    title: "Every entry, scored",
    items: ["Form completion rate", "Reward issued vs. claimed", "Time from entry to redemption"],
    bg: "linear-gradient(168deg, #e2ebc9 0%, #e9f0c4 48%, #f0f4b8 78%, #f3f5b0 100%)",
  },
  {
    n: "03",
    title: "Every outcome, traced",
    items: ["Redemption to purchase", "Location-level performance", "Campaign-to-campaign lift"],
    bg: "linear-gradient(180deg, #f9f1e8 0%, #f7efe6 100%)",
  },
];

export function Attribution() {
  return (
    <section
      id="attribution"
      className="mx-auto px-6 py-24"
      style={{
        backgroundImage:
          'url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_125638_553b96dc-a1fd-4b2b-81a9-ed7daa80006e.png&w=1280&q=85")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Structured Attribution"
          heading="Know what brought the customer in,"
          accent="and what brought them back."
          subtext="Most tools can tell you a form was filled out. Tragami can tell you which QR code it came from, which campaign they engaged with, which reward they redeemed, and whether they walked back in the door because of it."
        />
      </div>

      {/* desktop staircase */}
      <div className="relative mx-auto mt-24 hidden max-w-6xl pb-[132px] text-[#1a0b54] sm:block">
        <svg viewBox="0 0 800 220" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
          <path d={FLOW_PATH} fill="none" stroke="rgba(75,60,240,.25)" strokeWidth="2" />
          <motion.path
            d={FLOW_PATH}
            fill="none"
            stroke="#4b3cf0"
            strokeWidth="2.5"
            className="flow-line"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          <circle r="6" fill="#4b3cf0">
            <animateMotion dur="5s" repeatCount="indefinite" path={FLOW_PATH} />
          </circle>
        </svg>

        <div className="relative flex items-end justify-between gap-4">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.label}
              className="flex flex-col items-center"
              style={{ transform: `translateY(-${STAIR_LIFT_PX[i]}px)` }}
            >
              <div
                className="z-10 flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-base font-medium shadow-sm"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(255,255,255), rgba(255,255,255,.85))" }}
              >
                <TragamiMark className="h-4 w-4 shrink-0 text-[#4b3cf0]" />
                {pillar.label}
              </div>

              <div className="pillar-line mt-2" style={{ width: "1px", height: "36px" }} />

              <div className="mt-2 flex flex-col items-center gap-1.5 text-sm text-gray-600">
                {pillar.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* mobile alternating flow */}
      <div className="mt-14 flex w-full flex-col text-[#1a0b54] sm:hidden">
        {PILLARS.map((pillar, index) => {
          const isRight = index % 2 !== 0;
          return (
            <div
              key={pillar.label}
              className="flex w-full flex-col pb-2"
              style={{ alignItems: isRight ? "flex-end" : "flex-start" }}
            >
              <div
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-[18px] py-[10px] text-[15px] font-medium"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(255,255,255), rgba(255,255,255,.6))" }}
              >
                <TragamiMark className="h-4 w-4 text-[#4b3cf0]" />
                {pillar.label}
              </div>
              <div className="flex w-full items-stretch" style={{ flexDirection: isRight ? "row-reverse" : "row" }}>
                <div
                  className="pillar-line shrink-0"
                  style={{
                    width: "1px",
                    minHeight: "120px",
                    marginLeft: isRight ? 0 : 22,
                    marginRight: isRight ? 22 : 0,
                  }}
                />
                <div
                  className="flex flex-col py-2"
                  style={{
                    alignItems: isRight ? "flex-end" : "flex-start",
                    paddingLeft: isRight ? 0 : 20,
                    paddingRight: isRight ? 20 : 0,
                  }}
                >
                  {pillar.items.map((item) => (
                    <div key={item} className="py-2 text-sm text-gray-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* checklist grid, pastel mosaic cards */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-3">
        {CHECKLIST_CARDS.map((card, i) => (
          <motion.div
            key={card.n}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-[22px] border border-white/90 p-6 shadow-[0_2px_16px_rgba(24,30,45,.06)]"
            style={{ backgroundImage: card.bg }}
          >
            <p className="text-xs font-medium text-black/40">{card.n}</p>
            <h3 className="mt-2 text-base font-semibold text-[#0d0d0d]">{card.title}</h3>
            <ul className="mt-4 flex-1 space-y-2.5">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#2b2b2b]">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4b3cf0]" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#pricing" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d0d0d]">
              Learn more <ArrowRight className={cn("h-3.5 w-3.5 -rotate-45")} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
