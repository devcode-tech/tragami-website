"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { DotNumber } from "@/components/ui/DotNumber";
import { cn } from "@/lib/utils";

/**
 * Rebuilt from the "Built for Intelligent Performance" glass-card spec.
 * Kept as literal as reasonably possible: the paper-gray stage, the
 * looping background video (wide/narrow swap), the fixed 429x554 card
 * ratio with the --u scaling unit, the LED dot-matrix metric numbers, the
 * grain texture, and the exact "Learn More" pill styling.
 *
 * Two things are simplified rather than traced pixel-for-pixel: the
 * bespoke gauge / tile-wall / network illustrations inside each card
 * (rebuilt as a lighter analog per card instead of the full multi-filter
 * SVGs) and the entrance choreography (done with Motion's whileInView
 * instead of a hand-rolled entrance-active class). Say the word if you
 * want either of those traced exactly.
 */

const STAGE_VIDEO = {
  wide: {
    poster:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5c3ec08f-2dbf-4c0a-8588-f6106a789443.webp",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_125226_45cb4f38-aa7e-47e1-885d-ae0b69745369.mp4",
  },
  narrow: {
    poster:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/0f4926a4-e660-4df2-9195-2bfb3e341bdd.webp",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_125242_daae1570-386d-4bd5-8896-80499e2371e0.mp4",
  },
};

const CARDS = [
  {
    id: "capture",
    href: "#capture",
    label: "Capture",
    title: "Customer Capture",
    sub: "QR & giveaway entry",
    metric: "1",
    unit: "form replaced by play",
    caption: "Average setup time, under 5 minutes",
    gradient: "linear-gradient(165deg,#6a5cf5 0%,#4b3cf0 45%,#241a8a 100%)",
    media: {
      poster:
        "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/167977c6-8539-46b1-9a15-8dba566f50b8.png",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130045_1a612b69-4854-4b34-8043-ccb91f2c60af.mp4",
    },
    visual: <GaugeVisual color="#c9c2ff" />,
  },
  {
    id: "channel",
    href: "#channel",
    label: "Channel",
    title: "Partner Attribution",
    sub: "Channel tracking engine",
    metric: "100%",
    unit: "attribution accuracy",
    caption: "Track every partner and QR code",
    gradient: "linear-gradient(165deg,#ff8a5c 0%,#f0492f 50%,#8a2415 100%)",
    media: {
      poster:
        "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/0446d1d5-e65e-4db5-8090-3e30d09afc43.png",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130054_dd005674-d693-4d81-80a5-357f7f10b3a3.mp4",
    },
    visual: <BarsVisual color="#ffd9c4" />,
  },
  {
    id: "retain",
    href: "#retain",
    label: "Retain",
    title: "Loyalty & Rewards",
    sub: "Wallet-based retention",
    metric: "5",
    unit: "reward types included",
    caption: "Redemption rate, tracked live",
    gradient: "linear-gradient(165deg,#35c98f 0%,#149a6b 50%,#0a3d2b 100%)",
    media: {
      poster:
        "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/da8d0242-4dee-4f6d-813f-a5887e86ad77.png",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_130103_7550f407-f14b-40a6-9616-7a26d7a8bd9f.mp4",
    },
    visual: <NetworkVisual color="#bff2dc" />,
  },
];

export function GlassMetrics() {
  return (
    <section className="relative isolate overflow-hidden bg-[#ececeb] px-4 py-16 sm:px-6 md:py-24">
      <video
        className="absolute inset-0 hidden h-full w-full object-cover opacity-40 md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={STAGE_VIDEO.wide.poster}
        aria-hidden="true"
      >
        <source src={STAGE_VIDEO.wide.src} type="video/mp4" />
      </video>
      <video
        className="absolute inset-0 block h-full w-full object-cover opacity-40 md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={STAGE_VIDEO.narrow.poster}
        aria-hidden="true"
      >
        <source src={STAGE_VIDEO.narrow.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#ececeb]/70" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(260px,32vw)] md:items-start">
          <h2 className="text-[clamp(28px,4vw,47px)] font-normal leading-[1.22] tracking-[0.015em] text-[#202020]">
            <span className="block">Built to</span>
            <span className="block">
              <DotNumber
                value="convert"
                dotRadius={2.4}
                className="inline-block h-[0.9em] align-middle text-[#f0492f]"
              />{" "}
              and{" "}
              <DotNumber
                value="retain"
                dotRadius={2.4}
                className="inline-block h-[0.9em] align-middle text-[#149a6b]"
              />
              .
            </span>
          </h2>
          <p className="text-[clamp(14px,1.4vw,20px)] leading-[1.62] text-[#4a4a4a]">
            Every module is built to turn a single scan into a tracked, repeatable customer
            journey, from the first play to the next visit, with every step measured along the
            way.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 md:flex-row md:items-stretch md:justify-between">
          {CARDS.map((card, i) => (
            <motion.a
              key={card.id}
              id={card.id}
              href={card.href}
              initial={{ opacity: 0.4, y: 16, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="stage-card w-full max-w-[429px] text-white shadow-[0_2px_4px_rgba(50,28,39,.3),inset_0_1px_0_rgba(255,255,255,.24)]"
            >
              <video
                className="absolute inset-0 z-0 h-full w-full"
                style={{ objectFit: "fill" }}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={card.media.poster}
                aria-hidden="true"
              >
                <source src={card.media.src} type="video/mp4" />
              </video>
              <div
                className="absolute inset-0 z-[1] opacity-[0.86] mix-blend-normal"
                style={{ background: card.gradient }}
              />
              <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_92%_19%_at_51%_0%,rgba(255,255,255,.14),transparent_78%)]" />
              <div className="grain absolute inset-0 z-[2] opacity-50" />

              <p className="absolute left-[5%] top-[6.1%] z-[4] w-[90%] text-center text-[clamp(15px,2.4cqw,23px)] font-semibold leading-[1.3] text-white/[0.97] [text-shadow:0_1px_1px_rgba(72,28,48,.14)]">
                {card.title}
                <br />
                <span className="text-white/70">{card.sub}</span>
              </p>

              <div className="absolute left-1/2 top-[46%] z-[2] -translate-x-1/2 opacity-80">
                {card.visual}
              </div>

              <div className="absolute left-0 top-[62%] z-[5] flex w-full items-end justify-center gap-2">
                <DotNumber value={card.metric} dotRadius={2.2} className="h-9 text-white" />
                <span className="pb-0.5 text-sm text-white/85">{card.unit}</span>
              </div>

              <p className="absolute left-[10%] top-[74%] z-[5] w-[80%] text-center text-[13.5px] leading-[1.45] text-white/85 [text-shadow:0_1px_2px_rgba(60,21,35,.16)]">
                {card.caption}
              </p>

              <span className="absolute left-1/2 top-[87%] z-[6] -translate-x-1/2 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-[#2d2d2d] shadow-[0_1px_0_rgba(255,255,255,.5)_inset,0_1px_3px_rgba(58,25,39,.08)] transition-transform duration-200 hover:-translate-y-0.5">
                Learn More
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GaugeVisual({ color }: { color: string }) {
  return (
    <svg width="150" height="100" viewBox="0 0 150 100">
      <path d="M8 92A67 67 0 0 1 142 92" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M8 92A67 67 0 0 1 142 92"
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="180 300"
      />
    </svg>
  );
}

function BarsVisual({ color }: { color: string }) {
  return (
    <div className="flex h-16 items-end gap-2.5">
      {[0.4, 0.75, 0.55, 0.9, 0.65].map((h, i) => (
        <span key={i} style={{ height: `${h * 100}%`, background: color }} className="w-3 rounded-t-sm opacity-90" />
      ))}
    </div>
  );
}

function NetworkVisual({ color }: { color: string }) {
  return (
    <svg width="160" height="90" viewBox="0 0 160 90">
      <g stroke={color} strokeWidth="1" opacity="0.6" fill="none">
        <path d="M0 45h40c10 0 15 5 18 15s8 12 18 12h30c10 0 15-6 18-16s8-11 18-11h18" />
        <path d="M0 20h60c10 0 16 5 20 14s10 12 20 12h40" />
      </g>
      {[[40, 45], [96, 32], [130, 20]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={color} />
      ))}
    </svg>
  );
}
