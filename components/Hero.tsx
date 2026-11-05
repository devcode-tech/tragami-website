"use client";

import { useEffect, useState } from "react";
import {
  Sparkles,
  UserPlus,
  Gamepad2,
  Gift,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabKey = "capture" | "engage" | "retain" | "attribution";

const TABS: { key: TabKey; label: string; icon: typeof UserPlus }[] = [
  { key: "capture", label: "Capture", icon: UserPlus },
  { key: "engage", label: "Engage", icon: Gamepad2 },
  { key: "retain", label: "Retain", icon: Gift },
  { key: "attribution", label: "Attribution", icon: BarChart3 },
];

export function Hero() {
  const [active, setActive] = useState<TabKey>("capture");

  useEffect(() => {
    const order: TabKey[] = ["capture", "engage", "retain", "attribution"];
    const id = setInterval(() => {
      setActive((current) => order[(order.indexOf(current) + 1) % order.length]);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="mx-auto max-w-7xl px-6 pb-32 pt-24 text-center">
      {/* badge — a real feature note, not a fabricated rating */}
      <div
        className="mb-8 inline-flex items-center gap-2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        <span className="flex h-6 items-center gap-1.5 rounded-full border border-gray-300 px-2.5 text-xs font-medium text-black">
          <Sparkles className="h-3 w-3" />
          New: attribution across every campaign
        </span>
      </div>

      <h1
        className="mb-5 text-6xl font-normal leading-[1.1] tracking-tight opacity-0 animate-fade-in-up md:text-7xl lg:text-[80px]"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="block">More than a giveaway.</span>
        <span className="block bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent">
          Capture. Engage. Retain.
        </span>
      </h1>

      <p
        className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 opacity-0 animate-fade-in-up md:text-xl"
        style={{ animationDelay: "0.4s" }}
      >
        Tragami combines customer capture, interactive promotions, rewards and loyalty into one
        platform, with attribution running through every step.
      </p>

      <a
        href="#pricing"
        className="mb-12 inline-block rounded-full bg-black px-8 py-3 text-base font-medium text-white opacity-0 animate-fade-in-up transition-colors hover:bg-gray-800"
        style={{ animationDelay: "0.5s" }}
      >
        Start free
      </a>

      {/* module tab bar */}
      <div
        className="mb-8 flex justify-center opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="grid grid-cols-2 gap-1 rounded-lg bg-gray-100 p-1 md:flex">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* product preview stage */}
      <div
        className="relative h-[400px] overflow-hidden rounded-3xl opacity-0 animate-fade-in-up md:h-[500px]"
        style={{ animationDelay: "0.7s" }}
      >
        <StageBackdrop active={active} />
        <TabOverlay active={active} />
      </div>

      <TrustRow />
    </section>
  );
}

/**
/**
 * The Stellar.ai reference's own CloudFront demo video, restored as
 * requested. Swap `HERO_VIDEO_SRC` for your own footage whenever you have
 * it — everything else (sizing, overlay cards, rounded corners) stays put.
 */
const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4";

function StageBackdrop({ active }: { active: TabKey }) {
  const tint: Record<TabKey, string> = {
    capture: "from-[#4b3cf0]/55 via-transparent to-[#1c1450]/70",
    engage: "from-[#f0492f]/55 via-transparent to-[#5c1c10]/70",
    retain: "from-[#149a6b]/55 via-transparent to-[#0d3d2c]/70",
    attribution: "from-[#1c1a2e]/55 via-transparent to-[#0a0a1a]/70",
  };

  return (
    <div className="absolute inset-0">
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-1000"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className={cn("absolute inset-0 bg-gradient-to-br transition-colors duration-700", tint[active])} />
    </div>
  );
}

function TabOverlay({ active }: { active: TabKey }) {
  return (
    <div
      key={active}
      className="absolute inset-0 flex items-center justify-center bg-black/10 animate-fade-in-overlay"
    >
      <div className="w-[88%] max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-slide-up-overlay">
        {active === "capture" && <CaptureCard />}
        {active === "engage" && <EngageCard />}
        {active === "retain" && <RetainCard />}
        {active === "attribution" && <AttributionCard />}
      </div>
    </div>
  );
}

function CaptureCard() {
  const steps = ["Choose a template", "Add your reward", "Set entry rules", "Publish & share"];
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-black">Set up your campaign</p>
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-1/4 rounded-full bg-[#4b3cf0]" />
      </div>
      <ul className="space-y-2 text-left text-sm">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2 text-gray-700">
            <span
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded-full border text-[10px]",
                i === 0 ? "border-[#4b3cf0] bg-[#4b3cf0] text-white" : "border-gray-300"
              )}
            >
              {i === 0 && <Check className="h-2.5 w-2.5" />}
            </span>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EngageCard() {
  const metrics = [
    ["Participation rate", "82%"],
    ["Avg. play time", "24s"],
    ["Completion rate", "91%"],
    ["Replays this week", "340"],
  ];
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-black">Game performance</p>
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-2/3 rounded-full bg-[#f0492f]" />
      </div>
      <div className="grid grid-cols-2 gap-3 text-left">
        {metrics.map(([label, value]) => (
          <div key={label}>
            <p className="text-lg font-semibold text-black">{value}</p>
            <p className="text-xs text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RetainCard() {
  return (
    <div className="text-left">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#149a6b] text-white">
          <Check className="h-3.5 w-3.5" />
        </span>
        <p className="text-sm font-semibold text-black">127 rewards redeemed this week</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Punch cards", "58"],
          ["Coupons", "41"],
          ["Points", "28"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg bg-gray-50 p-2 text-center">
            <p className="text-base font-semibold text-black">{value}</p>
            <p className="text-[11px] text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AttributionCard() {
  const items = ["Source tracked", "Campaign attributed", "Reward linked", "Outcome measured"];
  return (
    <div className="text-left">
      <p className="mb-3 text-sm font-semibold text-black">Deploy attribution</p>
      <ul className="mb-4 space-y-2 text-sm text-gray-700">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-[#149a6b]" /> {i}
          </li>
        ))}
      </ul>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-black py-2.5 text-sm font-medium text-white">
        View attribution <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function TrustRow() {
  const items = ["Restaurants", "Retail", "Automotive", "Beauty & wellness", "Agencies", "Ecommerce"];
  return (
    <div
      className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 opacity-0 animate-fade-in-up"
      style={{ animationDelay: "0.8s" }}
    >
      {items.map((item) => (
        <span key={item} className="text-sm font-medium tracking-wide text-gray-400">
          {item}
        </span>
      ))}
    </div>
  );
}
