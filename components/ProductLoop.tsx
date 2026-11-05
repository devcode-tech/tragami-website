"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STEPS = [
  {
    n: "01",
    label: "Capture",
    detail: "A customer discovers your campaign through a QR code, a link or a giveaway.",
  },
  {
    n: "02",
    label: "Engage",
    detail: "They play a game or complete a challenge instead of filling out a form.",
  },
  {
    n: "03",
    label: "Reward",
    detail: "They receive a coupon, prize or loyalty benefit, saved straight to their wallet.",
  },
  {
    n: "04",
    label: "Return",
    detail: "They come back to redeem it, generating a second, tracked interaction.",
  },
  {
    n: "05",
    label: "Measure",
    detail: "You see exactly what generated the interaction, and what it led to.",
  },
];

export function ProductLoop() {
  return (
    <section className="border-t border-ink/[0.06] bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="The Loop"
          heading="From first interaction"
          accent="to repeat purchase."
          subtext="Five steps most tools only get you halfway through. Tragami runs all five."
          tone="dark"
        />

        <div className="mt-12 grid gap-2 sm:grid-cols-1">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex cursor-default items-center justify-between rounded-lg bg-white/[0.04] px-4 py-4 transition-all duration-200 hover:bg-white/[0.08] sm:px-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-white/30">{step.n}</span>
                <span className="mx-1 text-white/20">/</span>
                <span className="font-medium">{step.label}</span>
                <span className="hidden text-sm text-white/50 md:inline">{step.detail}</span>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-center text-2xl font-medium text-white md:text-3xl"
        >
          Five steps. One tap to start.{" "}
          <span className="text-[#f0492f]">No dead end at step three.</span>
        </motion.p>
      </div>
    </section>
  );
}
