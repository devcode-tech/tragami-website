"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

function BenefitItem({ title, description, icon: Icon, delay = 0 }: BenefitItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      className="flex gap-6"
    >
      <div className="flex-shrink-0 w-10 h-10 bg-[#f9fbfb] border border-[#F9F9FD] rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#3779eb]" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[#111827] font-onest text-[20px] md:text-[24px] font-semibold leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px]">
          {title}
        </h3>
        <p className="text-[#111827] font-sans text-base md:text-[18px] font-normal leading-[24px] md:leading-[28px] opacity-80">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export interface FeatureSectionItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureSectionProps {
  id?: string;
  badge: string;
  heading: React.ReactNode;
  description: string;
  items: FeatureSectionItem[];
  ctaLabel: string;
  ctaHref: string;
  /** Put the list on the left and the heading on the right. */
  reverse?: boolean;
  /** How far the list scrolls inside its sticky window (it has fewer items than the original ten). */
  scrollShift?: string;
  className?: string;
}

/**
 * The template's "Why Choose Us" layout (sticky heading on one side, a list
 * that scrolls with a progress line on the other), made reusable so the same
 * design carries both the Conversion and the Channel feature sections.
 */
export default function WhyChooseUs01Finsyc({
  id,
  badge,
  heading,
  description,
  items,
  ctaLabel,
  ctaHref,
  reverse = false,
  scrollShift = "-26%",
  className,
}: FeatureSectionProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", scrollShift]);
  const y = isLargeScreen ? yTranslate : 0;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section id={id} className={cn("w-full bg-white py-16 md:py-24 lg:py-[120px] flex justify-center", className)}>
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            <div
              className={cn(
                "flex flex-col items-start gap-16 lg:gap-[48px] justify-between",
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >

              {/* Sticky heading column */}
              <div className="w-full lg:max-w-[622px] flex flex-col items-start lg:sticky lg:top-[120px] self-start">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#3779eb]/10 border border-[#3779eb]/20 rounded-full flex items-center gap-2 mb-8"
                >
                  <span className="text-[#3779eb] font-sans text-sm font-medium">{badge}</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
                  className="text-[#111827] font-onest text-[32px] sm:text-[42px] md:text-[52px] font-semibold leading-[38px] sm:leading-[48px] md:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] mb-3"
                >
                  {heading}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                  className="text-[#111827] font-sans text-lg md:text-[20px] font-normal leading-[26px] md:leading-[30px] opacity-80 mb-10 max-w-[560px]"
                >
                  {description}
                </motion.p>

                <motion.a
                  href={ctaHref}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" as const }}
                  className="inline-flex items-center gap-3 rounded-full bg-[#2563EB] py-2 pl-6 pr-2 text-white transition-colors hover:bg-blue-700"
                >
                  <span className="font-sans text-base md:text-[18px] font-medium">{ctaLabel}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <ArrowUpRight className="h-4 w-4 text-[#2563EB]" />
                  </span>
                </motion.a>
              </div>

              {/* Scrollable list column */}
              <div
                ref={containerRef}
                className="flex-1 lg:max-w-[578px] flex items-start pr-0 h-auto relative w-full"
                style={isLargeScreen ? { height: items.length * 30 + "vh" } : undefined}
              >
                <div className="lg:sticky lg:top-[120px] lg:h-[800px] h-auto flex items-start w-full lg:overflow-hidden overflow-visible">
                  <div className="hidden lg:block absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white via-white/95 to-transparent z-10 pointer-events-none" />

                  <div className="hidden lg:flex flex-col items-center mr-10 xl:mr-12 relative w-[2px] bg-[#3779eb]/10 self-stretch">
                    <motion.div
                      style={{ scaleY, originY: 0 }}
                      className="w-full bg-[#3779eb] absolute top-0 left-0 h-full"
                    />
                  </div>

                  <motion.div
                    ref={listRef}
                    style={{ y }}
                    className="w-full lg:w-[514px] flex flex-col gap-10 md:gap-12 lg:gap-16 lg:pt-28 lg:pb-40 pt-0 pb-0"
                  >
                    {items.map((item: FeatureSectionItem, idx: number) => (
                      <BenefitItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        delay={0.2 + idx * 0.1}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
