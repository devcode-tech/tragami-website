"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowUpRight, ChevronDown, ChevronUp, Sliders } from "lucide-react";
import { PRICING, type Plan, type Product, type ProductKey } from "@/content/pricing";
import { cn } from "@/lib/utils";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export default function PricingFinsyc({ className }: { className?: string }) {
  const [yearly, setYearly] = useState(false);
  const [productKey, setProductKey] = useState<ProductKey>("conversion");
  const [modal, setModal] = useState<ProductKey | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const product = PRICING[productKey];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <section
        id="pricing"
        className={cn(
          "relative w-full bg-[#FFFEFF] py-20 lg:py-32 overflow-hidden scroll-mt-20",
          className
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {/* Tag Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap mb-6"
            >
              <span className="text-[#3779eb] font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                Transparent Pricing
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[#111827] text-center font-onest text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px] max-w-[820px]"
            >
              Predictable Plans for Every{" "}
              <span className="text-black/40 font-playfair italic font-semibold">
                Campaign Goal
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-center text-[#111827] font-inter text-base sm:text-lg font-normal leading-relaxed opacity-80 max-w-[640px]"
            >
              Whether you&apos;re running your first lead-capture promotion or coordinating multi-channel partner campaigns, Tragami offers straightforward plans with no hidden limits.
            </motion.p>

            {/* Controls: Product Selector & Billing Toggle Deck */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-5 w-full"
            >
              {/* Top Row: Luxury Product Segmented Control */}
              <div
                role="tablist"
                aria-label="Choose Campaign Product"
                className="relative inline-flex p-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-[#2563EB]/20 shadow-[0_6px_28px_rgba(37,99,235,0.08)]"
              >
                {(Object.keys(PRICING) as ProductKey[]).map((key) => {
                  const isActive = productKey === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setProductKey(key)}
                      className={cn(
                        "relative flex items-center justify-center rounded-full px-5 sm:px-7 py-3 text-sm sm:text-base font-inter font-semibold transition-colors duration-200 cursor-pointer z-10",
                        isActive ? "text-white" : "text-[#111827]/70 hover:text-[#111827]"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeProductPill"
                          className="absolute inset-0 rounded-full bg-[#2563EB] shadow-[0_4px_18px_rgba(37,99,235,0.35)] -z-10"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span>{key === "one-app" ? "One app" : `${PRICING[key].label} Giveaways`}</span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Row: Premium Segmented Billing Switcher */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="relative inline-flex items-center p-1.5 rounded-full bg-[#f1f6fa] border border-[#2563EB]/15 shadow-inner">
                  {/* Monthly Button */}
                  <button
                    type="button"
                    onClick={() => setYearly(false)}
                    className={cn(
                      "relative rounded-full px-5 py-2 text-sm font-inter font-medium transition-colors cursor-pointer z-10",
                      !yearly ? "text-[#111827] font-semibold" : "text-[#111827]/60 hover:text-[#111827]"
                    )}
                  >
                    {!yearly && (
                      <motion.div
                        layoutId="activeBillingPill"
                        className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] -z-10"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                    Monthly billing
                  </button>

                  {/* Yearly Button */}
                  <button
                    type="button"
                    onClick={() => setYearly(true)}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-inter font-medium transition-colors cursor-pointer z-10",
                      yearly ? "text-[#111827] font-semibold" : "text-[#111827]/60 hover:text-[#111827]"
                    )}
                  >
                    {yearly && (
                      <motion.div
                        layoutId="activeBillingPill"
                        className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] -z-10"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span>Annual billing</span>
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                      Save 40%
                    </span>
                  </button>
                </div>
              </div>

              {/* Dynamic Helper Note */}
              <p className="text-xs font-inter text-[#111827]/55 text-center">
                Displaying plans for <strong className="text-[#111827] font-semibold">{product.label === "One app" ? "One app" : `${product.label} Giveaways`}</strong> · Billed {yearly ? "annually with up to 40% savings applied" : "monthly with no long-term commitment"}
              </p>
            </motion.div>

            {/* Plan Cards Grid */}
            <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
              {product.plans.map((plan, i) => (
                <PlanCard
                  key={plan.name}
                  plan={plan}
                  yearly={yearly}
                  onCustomize={() => setModal(productKey)}
                  delay={0.1 * (i + 1)}
                />
              ))}
            </div>

            {/* Comparison Table Toggle Button */}
            <div className="mt-12 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setShowComparison((v) => !v)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2563EB]/20 bg-white text-[#2563EB] font-inter text-sm sm:text-base font-medium shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:bg-[#2563EB]/5 transition-all duration-300 cursor-pointer"
              >
                <span>{showComparison ? "Hide Plan Comparison" : "Compare All Plan Features"}</span>
                {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Comparison Table Drawer */}
            <AnimatePresence>
              {showComparison && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full overflow-hidden"
                >
                  <CompareTable product={product} />
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-12 text-center text-sm font-inter text-[#111827]/60 max-w-[700px]">
              Need custom integrations, dedicated enterprise SLAs, or higher participant volume?{" "}
              <a href="#faq" className="font-semibold text-[#2563EB] hover:underline">
                Read our FAQ
              </a>{" "}
              or customize any plan above.
            </p>
          </div>
        </div>

        {/* Interactive Scale Customization Modal */}
        <AnimatePresence>
          {modal && <ScaleModal productKey={modal} onClose={() => setModal(null)} />}
        </AnimatePresence>
      </section>
    </>
  );
}

function PlanCard({
  plan,
  yearly,
  onCustomize,
  delay,
}: {
  plan: Plan;
  yearly: boolean;
  onCustomize: () => void;
  delay: number;
}) {
  const inc = plan.includes;
  const isFeatured = plan.best;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "relative flex flex-col justify-between rounded-[28px] bg-white p-7 sm:p-8 transition-all duration-300",
        isFeatured
          ? "border-2 border-[#2563EB] shadow-[0_20px_50px_-15px_rgba(37,99,235,0.28)] ring-4 ring-[#2563EB]/10 z-10"
          : "border border-[#2563EB]/15 hover:border-[#2563EB]/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(37,99,235,0.08)]"
      )}
    >
      {/* Featured Badge */}
      {plan.badge && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-[#2563EB] px-3.5 py-1 text-xs font-semibold text-white tracking-wide shadow-md">
          {plan.badge}
        </span>
      )}

      <div>
        {/* Tier Name */}
        <div className="flex items-center justify-between">
          <h3 className="font-onest text-xl font-bold text-[#111827]">{plan.name}</h3>
        </div>

        {/* Pricing */}
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-onest text-4xl sm:text-5xl font-bold tracking-tight text-[#111827]">
            ${yearly ? plan.yearly : plan.monthly}
          </span>
          <span className="font-inter text-base font-normal text-[#111827]/60">/ month</span>
        </div>

        {/* Billing Note */}
        <p className="mt-1 text-xs font-inter font-medium text-[#111827]/50">
          {yearly ? plan.noteYearly : plan.noteMonthly}
        </p>

        {/* Volume Included Pill */}
        <div className="mt-5 rounded-xl bg-[#F7FDFF] border border-[#2563EB]/10 p-3">
          <p className="text-xs sm:text-sm font-inter text-[#111827]/80">
            Includes{" "}
            <strong className="font-semibold text-[#111827]">
              {yearly ? inc.yearly : inc.monthly}
            </strong>{" "}
            {inc.unit} {yearly ? inc.perYearly : inc.perMonthly}
          </p>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm font-inter text-[#111827]/70 leading-relaxed">{plan.desc}</p>

        {/* Feature List */}
        <div className="mt-6 border-t border-[#111827]/[0.08] pt-6">
          <p className="text-xs font-inter font-semibold uppercase tracking-wider text-[#111827]/50 mb-3">
            What&apos;s included:
          </p>
          <ul className="space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm font-inter text-[#111827]/85">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#3779eb]/15">
                  <Check className="h-2.5 w-2.5 text-[#2563EB]" strokeWidth={3} />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button / Customize Action */}
      <div className="mt-8 pt-4">
        {plan.customize ? (
          <div className="space-y-3">
            <button
              type="button"
              onClick={onCustomize}
              className="w-full flex items-center justify-center gap-2 rounded-full border border-[#2563EB]/30 bg-white px-6 py-3.5 text-center font-inter text-sm sm:text-base font-semibold text-[#111827] shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300 cursor-pointer"
            >
              <Sliders className="h-4 w-4 text-[#2563EB]" />
              <span>Customize Volume</span>
            </button>
            <p className="text-center text-xs font-inter text-[#111827]/60">
              {plan.customize}{" "}
              <button
                type="button"
                onClick={onCustomize}
                className="font-semibold text-[#2563EB] hover:underline cursor-pointer"
              >
                Open volume slider
              </button>
            </p>
          </div>
        ) : (
          <a
            href="#pricing"
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center font-inter text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm",
              isFeatured
                ? "bg-[#2563EB] text-white hover:bg-blue-700 shadow-[0_6px_20px_rgba(37,99,235,0.25)]"
                : "border border-[#2563EB]/30 text-[#111827] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#2563EB]/5 bg-white"
            )}
          >
            <span>Get Started</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CompareTable({ product }: { product: Product }) {
  return (
    <div className="mt-10 overflow-x-auto rounded-[24px] border border-[#2563EB]/15 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
      <table className="w-full min-w-[620px] text-left text-sm font-inter">
        <caption className="sr-only">{product.label} plan feature comparison</caption>
        <thead>
          <tr className="border-b border-[#2563EB]/10 bg-[#F7FDFF]">
            {product.compare.head.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={cn(
                  "px-6 py-4 font-onest font-semibold text-sm sm:text-base text-[#111827]",
                  i > 0 && "text-center"
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#111827]/[0.06]">
          {product.compare.rows.map((row, idx) => (
            <tr
              key={row[0]}
              className={cn("transition-colors hover:bg-[#F7FDFF]/60", idx % 2 === 1 && "bg-[#FAFCFD]/40")}
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={cn(
                    "px-6 py-3.5 text-sm",
                    i === 0
                      ? "font-medium text-[#111827]"
                      : "text-center text-[#111827]/80"
                  )}
                >
                  {i === 0 ? (
                    cell
                  ) : cell === "✓" ? (
                    <div className="flex justify-center">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3779eb]/15">
                        <Check className="h-3 w-3 text-[#2563EB]" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="sr-only">Included</span>
                    </div>
                  ) : cell === "–" ? (
                    <span aria-hidden="true" className="text-[#111827]/30 text-lg">
                      –
                    </span>
                  ) : (
                    <span className="font-semibold text-[#111827]">{cell}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScaleModal({ productKey, onClose }: { productKey: ProductKey; onClose: () => void }) {
  const cfg = PRICING[productKey].modal;
  const [value, setValue] = useState(cfg.min);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    boxRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Linear scaling for volume calculator
  const price = cfg.minPrice + ((value - cfg.min) * (cfg.maxPrice - cfg.minPrice)) / (cfg.max - cfg.min);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={boxRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="scale-modal-title"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-lg rounded-[28px] bg-white p-7 sm:p-8 shadow-2xl border border-[#2563EB]/15 outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-5 top-5 rounded-full p-2 text-[#111827]/50 hover:bg-[#111827]/5 hover:text-[#111827] transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap w-fit mb-3">
          <span className="text-[#3779eb] font-inter text-xs font-semibold">Scale Volume Calculator</span>
        </div>

        <h2 id="scale-modal-title" className="font-onest text-2xl font-bold text-[#111827]">
          {cfg.title}
        </h2>
        <p className="mt-2 text-sm font-inter text-[#111827]/70 leading-relaxed">{cfg.sub}</p>

        {/* Slider Controls */}
        <div className="mt-6 rounded-2xl bg-[#F7FDFF] border border-[#2563EB]/10 p-5">
          <div className="flex items-baseline justify-between text-sm font-inter">
            <span className="text-[#111827]/70 font-medium">{cfg.label}</span>
            <span className="font-onest text-lg font-bold text-[#2563EB] tabular-nums">
              {fmt(value)}
            </span>
          </div>
          <input
            type="range"
            min={cfg.min}
            max={cfg.max}
            step={cfg.step}
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value, 10))}
            aria-label={cfg.label}
            className="mt-4 w-full accent-[#2563EB] cursor-pointer"
          />
          <div className="mt-2 flex justify-between text-[11px] font-inter text-[#111827]/40">
            <span>{fmt(cfg.min)}</span>
            <span>{fmt(cfg.max)}</span>
          </div>
        </div>

        {/* Calculated Price Display */}
        <div className="mt-6 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/15 p-6 text-center">
          <p className="font-onest text-3xl sm:text-4xl font-bold tabular-nums text-[#111827]">
            ${fmt(price)}{" "}
            <span className="font-inter text-base font-normal text-[#111827]/60">/ year</span>
          </p>
          <p className="mt-1 text-xs font-inter text-[#111827]/60">{cfg.caption}</p>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full bg-[#2563EB] px-6 py-3.5 text-center font-inter text-base font-semibold text-white hover:bg-blue-700 shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-all cursor-pointer"
          >
            Choose Custom Plan
          </button>
        </div>
      </motion.div>
    </div>
  );
}
