"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Starter",
    monthly: 49,
    annual: 39,
    desc: "For businesses getting started.",
    feats: ["Capture, games & rewards", "Basic loyalty", "Basic attribution & analytics", "Limited participants & campaigns"],
    featured: false,
  },
  {
    name: "Growth",
    monthly: 149,
    annual: 119,
    desc: "For growing businesses running active campaigns.",
    feats: [
      "Everything in Starter",
      "Higher participant limits, more campaigns",
      "Leaderboards & digital punch cards",
      "Advanced rewards & attribution",
      "More locations & integrations",
    ],
    featured: true,
  },
  {
    name: "Business",
    monthly: 399,
    annual: 319,
    desc: "For multi-location businesses and teams.",
    feats: [
      "Everything in Growth",
      "Multiple locations, team permissions",
      "Advanced loyalty & analytics",
      "API & webhooks, priority support",
    ],
    featured: false,
  },
];

export function Pricing() {
  const [term, setTerm] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="border-t border-ink/[0.06] bg-mist px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Simple Pricing"
          heading="One platform."
          accent="One subscription."
          subtext="Everything you need to capture, engage and retain customers is included in every plan."
        />

        <div className="mt-6 inline-flex rounded-full border border-ink/[0.1] bg-white p-1">
          {(["monthly", "annual"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTerm(t)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold capitalize transition-colors",
                term === t ? "bg-black text-white" : "text-gray-600"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "flex flex-col rounded-2xl border bg-white p-6",
                tier.featured ? "border-[#4b3cf0] shadow-[0_20px_50px_-20px_rgba(75,60,240,0.3)]" : "border-ink/[0.08]"
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {tier.name}
              </p>
              <p className="mt-3 text-4xl font-semibold text-black">
                ${term === "monthly" ? tier.monthly : tier.annual}
                <span className="text-sm font-normal text-gray-500">/mo</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">{tier.desc}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.feats.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4b3cf0]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={cn(
                  "mt-6 rounded-full px-5 py-2.5 text-center text-sm font-medium transition-colors",
                  tier.featured
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border border-ink/[0.15] text-black hover:border-black"
                )}
              >
                Start free
              </a>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Custom</p>
            <p className="mt-3 text-2xl font-semibold text-black">Talk to us</p>
            <p className="mt-2 text-sm text-gray-600">
              For larger organizations with more participants, locations or requirements.
            </p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {["Custom participant & campaign volume", "Custom integrations", "Dedicated support"].map((f) => (
                <li key={f} className="flex gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4b3cf0]" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-6 rounded-full border border-ink/[0.15] px-5 py-2.5 text-center text-sm font-medium text-black hover:border-black"
            >
              Talk to sales
            </a>
          </motion.div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-600">
          No feature hunting. No separate game plan, giveaway plan, loyalty plan or attribution
          plan.{" "}
          <span className="font-semibold text-black">
            Your plan determines how much you can use it, not what you can use.
          </span>
        </p>
      </div>
    </section>
  );
}
