"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeader } from "@/components/ui/SectionHeader";

const INDUSTRIES = [
  "Restaurants & cafés",
  "Automotive",
  "Retail",
  "Beauty & wellness",
  "Repair & service",
  "Events",
  "Ecommerce",
  "Agencies",
];

// The three the original brief calls out as "particularly important" get
// the full checklist-card treatment; the rest still get their moment in
// the marquee above.
const FEATURED = [
  {
    n: "01",
    name: "Automotive",
    blurb: "The oil change takes forty minutes either way. Make it the forty minutes that brings them back.",
    items: ["QR in the waiting area", "30-second game while they wait", "Service or detailing reward"],
  },
  {
    n: "02",
    name: "Restaurants & cafés",
    blurb: "The wait for a table is dead time for you and dead time for them. Turn it into the next visit.",
    items: ["Table QR, play before ordering", "Reward drops after the check", "Loyalty stacks automatically"],
  },
  {
    n: "03",
    name: "Agencies",
    blurb: "Stop stitching a giveaway tool to a game tool to a loyalty tool for every single client.",
    items: ["Every client, one dashboard", "Campaigns cloned across accounts", "Reporting your clients can read"],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-ink/[0.06] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Where It Fits"
          heading="Built for businesses that"
          accent="live and die on repeat customers."
          subtext="A single location or forty of them. If the same customer keeps walking past your door, Tragami gives you a reason to notice."
        />
      </div>

      <Marquee className="my-12">
        {INDUSTRIES.map((name) => (
          <span
            key={name}
            className="mx-2 flex h-14 shrink-0 items-center rounded-full border border-ink/[0.1] bg-white px-6 text-sm font-medium text-gray-700 shadow-sm"
          >
            {name}
          </span>
        ))}
      </Marquee>

      <div className="mx-auto grid max-w-7xl gap-4 px-6 lg:grid-cols-3">
        {FEATURED.map((uc, i) => (
          <motion.div
            key={uc.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl bg-[#171717] p-7 text-white"
          >
            <p className="text-xs text-white/40">{uc.n}</p>
            <h3 className="mt-2 text-lg font-semibold">{uc.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{uc.blurb}</p>
            <ul className="mt-4 flex-1 space-y-2.5">
              {uc.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4b3cf0]" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#pricing" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
              Learn more <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
