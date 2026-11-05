"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Rebuilt from the "CTA + FAQ" spec: an animated-gradient CTA card on the
 * left, an FAQ accordion on the right. Colors retinted to Tragami's
 * palette; the CSS mechanism (five drifting/pulsing radial-gradient blobs
 * via @property) is kept exactly as given, in globals.css as
 * .c5-animated-gradient. The reference's own footer isn't duplicated here
 * since the site already has one built from a different reference.
 */
const FAQS = [
  {
    q: "How is Tragami different from a giveaway tool?",
    a: "A giveaway tool stops at the email address. Tragami captures the entry, runs the campaign, issues the reward and tracks whether the customer came back, all as one connected record.",
  },
  {
    q: "Do customers need to download an app?",
    a: "No. Everything runs through a QR code or a link in the browser. There's nothing for a customer to install.",
  },
  {
    q: "Can I run this across multiple locations?",
    a: "Yes. Campaigns can be managed centrally with location-level reporting, or run independently per location depending on your plan.",
  },
  {
    q: "What happens to unclaimed rewards?",
    a: "You set the expiry rules. Unclaimed rewards can lapse automatically or stay open indefinitely, it's configurable per campaign.",
  },
  {
    q: "Does Tragami need access to my POS?",
    a: "No. Tragami tracks marketing engagement and attributed outcomes, not POS sales data, and never requires POS access from partners.",
  },
];

export function CTAFinal() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="border-t border-ink/[0.06] px-6 py-20 max-[900px]:py-[60px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-[1.6fr_1fr] items-stretch gap-[30px] max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="c5-animated-gradient flex flex-col items-center justify-center rounded-3xl px-10 py-20 text-center text-white"
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
        >
          <h2 className="mb-[15px] text-[2.6rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-[3.2rem]">
            Ready to turn
            <br />
            participation into
            <br />
            repeat business?
          </h2>
          <p className="mb-[30px] text-[0.95rem] font-normal opacity-85">
            Build your first campaign and see how customers respond.
          </p>
          <a
            href="#pricing"
            className="rounded-xl bg-black px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
          >
            Start free
          </a>
        </motion.div>

        <div className="flex flex-col justify-center gap-3">
          {FAQS.map((item, i) => {
            const isActive = active === i;
            return (
              <div
                key={item.q}
                onClick={() => setActive(isActive ? null : i)}
                className="cursor-pointer rounded-[10px] border bg-white px-5 py-[18px] transition-all duration-200"
                style={{
                  borderColor: isActive ? "#eaeaea" : "#f0f0f0",
                  boxShadow: isActive ? "0 4px 12px rgba(0,0,0,.04)" : "0 2px 8px rgba(0,0,0,.02)",
                }}
              >
                <div className="flex items-center justify-between gap-3 text-[0.9rem] font-normal text-neutral-900">
                  {item.q}
                  {isActive ? <ChevronUp size={20} className="shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
                </div>
                {isActive && <p className="mt-3 text-[0.9rem] leading-[1.6] text-[#666]">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
