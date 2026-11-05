"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Unplug, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PRISMA_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const SCATTERED_TOOLS = [
  { label: "Giveaway tool", rotate: -6 },
  { label: "Coupon app", rotate: 4 },
  { label: "Loyalty card", rotate: -3 },
  { label: "Game plugin", rotate: 7 },
  { label: "Spreadsheet, to tie it all together", rotate: -2 },
];

const CONNECTED_STEPS = ["Capture", "Play", "Reward", "Return", "Purchase", "Measure"];

export function Problem() {
  return (
    <section className="bg-black px-3 py-16 sm:px-4 md:py-24">
      {/* cinematic block, from the Prisma hero spec. Font kept to Inter
          (italic, not a second serif face) per the "keep the font
          consistent" instruction -- everything else follows the reference:
          inset padding, rounded corners, noise overlay, gradient overlay. */}
      <div className="relative h-[92vh] max-h-[820px] overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={PRISMA_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-12 sm:px-10 md:px-16 md:pb-16">
          <PullUpHeading />
          <ScrollRevealParagraph />
        </div>
      </div>

      {/* the VS comparison */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <ScatteredCard />

        <div className="flex justify-center">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold text-white/70">
            VS
          </span>
        </div>

        <ConnectedCard />
      </div>
    </section>
  );
}

function ScatteredCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
      <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/50">
        <Unplug className="h-3.5 w-3.5" /> Every tool, working alone
      </p>
      <div className="flex flex-wrap gap-3">
        {SCATTERED_TOOLS.map((tool) => (
          <span
            key={tool.label}
            className="rounded-lg border border-dashed border-white/20 bg-white/[0.02] px-3 py-2 text-sm text-white/50"
            style={{ transform: `rotate(${tool.rotate}deg)` }}
          >
            {tool.label}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/40">
        Five logins, five exports, and nothing that tells you which one actually worked.
      </p>
    </div>
  );
}

function ConnectedCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#4b3cf0]/50 bg-[#4b3cf0]/[0.08] p-7">
      <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-white/70">Tragami</p>
      <div className="relative flex flex-col">
        {/* the connecting line the steps sit on, with a dot that flows down
            it continuously -- a plain CSS animation, always playing, not
            gated behind any scroll observer */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#4b3cf0] via-[#4b3cf0] to-[#4b3cf0]/10" />
        <span className="absolute left-[3px] h-2 w-2 animate-flow-dot rounded-full bg-white" />

        {CONNECTED_STEPS.map((step, i) => (
          <div
            key={step}
            className={cn(
              "relative flex items-center gap-3 py-3 pl-6 text-sm font-medium text-white",
              i !== CONNECTED_STEPS.length - 1 && "border-b border-dashed border-white/10"
            )}
          >
            <span className="absolute left-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#4b3cf0]">
              <Check className="h-2.5 w-2.5 text-white" />
            </span>
            {step}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/70">One login. One export. One record per customer.</p>
    </div>
  );
}

function PullUpHeading() {
  const words = [
    { text: "Most", style: "" },
    { text: "campaigns", style: "" },
    { text: "die", style: "italic text-[#f0492f]" },
    { text: "at", style: "" },
    { text: "the", style: "" },
    { text: "email", style: "" },
    { text: "address.", style: "" },
  ];
  return (
    <h2 className="flex max-w-3xl flex-wrap gap-x-[0.28em] text-4xl font-medium leading-[0.95] tracking-tight text-[#E1E0CC] sm:text-5xl md:text-6xl">
      {words.map((w, i) => (
        <span key={i} className="overflow-hidden pb-[0.08em]">
          <span className={cn("inline-block animate-word-rise", w.style)} style={{ animationDelay: `${i * 0.08}s` }}>
            {w.text}
          </span>
        </span>
      ))}
    </h2>
  );
}

function ScrollRevealParagraph() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.3"] });
  const text =
    "A giveaway grabs an email and disappears. A coupon gets used once. A loyalty card sits forgotten in a drawer. A game holds attention for thirty seconds and nothing after. None of them talk to each other, and none of them bring the same customer back twice.";
  const chars = text.split("");

  return (
    <p ref={ref} className="mt-6 max-w-xl text-sm leading-relaxed text-[#DEDBC8] sm:text-base">
      {chars.map((c, i) => (
        <AnimatedChar key={i} char={c} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}

function AnimatedChar({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const p = index / total;
  const opacity = useTransform(progress, [Math.max(p - 0.1, 0), p + 0.05], [0.18, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}
