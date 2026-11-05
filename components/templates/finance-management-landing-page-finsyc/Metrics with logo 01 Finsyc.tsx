"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Layers, Store, Handshake } from "lucide-react";
import { CHANNEL_HREF, CONVERSION_HREF, SIGNUP_HREF } from "@/lib/site";

/**
 * The template's three coloured "metric" cards, reused as four use-case
 * cards. The big percentage counters are gone on purpose: there are no
 * usage statistics to show yet, so each card carries a product link instead.
 */
interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  bgColor: string;
  delay?: number;
}

function UseCaseCard({ icon: Icon, title, description, linkLabel, linkHref, bgColor, delay = 0 }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      style={{ backgroundColor: bgColor }}
      className="flex w-full p-6 md:p-8 flex-col items-start rounded-[24px]"
    >
      <div className="flex items-center gap-3 mb-[20px] text-[#3779eb]">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/60">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </span>
      </div>

      <h3 className="font-onest text-[22px] md:text-[24px] font-semibold leading-[28px] md:leading-[30px] tracking-[-0.6px] text-[#111827]">
        {title}
      </h3>

      <p className="mt-3 font-sans text-[16px] md:text-[17px] font-normal leading-[24px] md:leading-[26px] text-[#111827] opacity-80">
        {description}
      </p>

      <a
        href={linkHref}
        className="mt-10 md:mt-auto pt-0 md:pt-10 inline-flex items-center gap-2 font-sans text-[16px] font-medium text-[#2563EB] underline-offset-4 hover:underline"
      >
        {linkLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </motion.div>
  );
}

export default function MetricsWithLogo01Finsyc({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section
        id="use-cases"
        className={"w-full bg-[#F7FDFF] py-20 lg:py-32 flex justify-center " + (className || "")}
      >
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-[64px] gap-8">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className="max-w-[640px] text-[36px] md:text-[52px] font-heading font-semibold leading-[42px] md:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#111827]"
              >
                Built for the Way You Run <i className="text-[rgba(0,0,0,0.40)]">Promotions</i>
              </motion.h2>

              <motion.a
                href="#pricing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{
                  paddingLeft: isHovered ? 8 : 20,
                  paddingRight: isHovered ? 20 : 8,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                  opacity: { duration: 0.8 },
                  x: { duration: 0.8 },
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center h-[56px] min-w-fit w-max bg-[#2563EB] rounded-full group cursor-pointer transition-colors duration-300 hover:bg-blue-700 overflow-hidden gap-[12px]"
              >
                <motion.div
                  layout="position"
                  style={{ order: isHovered ? 2 : 1 } as React.CSSProperties}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
                  className="font-sans text-[18px] font-medium leading-[28px] text-white whitespace-nowrap"
                >
                  Get Started
                </motion.div>
                <motion.div
                  layout="position"
                  style={{ order: isHovered ? 1 : 2 } as React.CSSProperties}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
                  className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shrink-0"
                >
                  <ArrowUpRight className="w-[16px] h-[16px] text-[#2563EB]" />
                </motion.div>
              </motion.a>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              <UseCaseCard
                delay={0.1}
                bgColor="#D3DCEB"
                icon={ShoppingBag}
                title="Ecommerce Brands"
                description="Generate interest in products, collect prospective customer details, and measure giveaway participation."
                linkLabel="Conversion Giveaways"
                linkHref={CONVERSION_HREF}
              />
              <UseCaseCard
                delay={0.2}
                bgColor="#EBE2D2"
                icon={Layers}
                title="Marketing Agencies"
                description="Launch campaigns for multiple clients and use channel attribution to report on tracked participation."
                linkLabel="Channel Giveaways"
                linkHref={CHANNEL_HREF}
              />
              <UseCaseCard
                delay={0.3}
                bgColor="#D4E5CD"
                icon={Store}
                title="Retailers and Distributors"
                description="Use identifiable campaign links to compare participation across participating locations or distribution partners."
                linkLabel="Channel Giveaways"
                linkHref={CHANNEL_HREF}
              />
              <UseCaseCard
                delay={0.4}
                bgColor="#E3DAEB"
                icon={Handshake}
                title="Influencers and Brand Partnerships"
                description="Measure entries attributed to individual creators, partners, and promotional campaigns."
                linkLabel="Channel Giveaways"
                linkHref={CHANNEL_HREF}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
