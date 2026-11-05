"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { CHANNEL_HREF, CONVERSION_HREF, SIGNUP_HREF, FOOTER_COLUMNS } from "@/lib/site";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

function CTAButton({ text, href, variant = 'primary' }: CTAButtonProps) {
  const isPrimary = variant === 'primary';
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center h-[56px] rounded-full transition-all duration-500 overflow-hidden gap-3",
        isPrimary
          ? "bg-[#2563EB] text-white shadow-[0_8px_32px_rgba(4,39,24,0.15)]"
          : "bg-white/20 backdrop-blur-xl border border-white/60 text-[#2563EB] w-full sm:w-auto justify-between shadow-[0_8px_32px_rgba(255,255,255,0.1)]",
        isHovered ? "pl-[8px] pr-[20px] flex-row-reverse" : "pl-[20px] pr-[8px] flex-row"
      )}
    >
      <motion.span
        layout
        transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
        className="font-sans font-medium text-[18px] leading-[28px] whitespace-nowrap z-10"
      >
        {text}
      </motion.span>

      <motion.div
        layout
        transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full shrink-0 z-20",
          isPrimary ? "bg-white" : "bg-[#2563EB]"
        )}
      >
        <ArrowUpRight className={cn("w-4 h-4", isPrimary ? "text-[#2563EB]" : "text-white")} />
      </motion.div>
    </motion.a>
  );
}

const footerColumns = FOOTER_COLUMNS;

export default function CtaWithFooter01Finsyc({
  className,
  hideCta = false,
}: {
  className?: string;
  hideCta?: boolean;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.45, 0.32, 0.9] as const,
      },
    },
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <footer className={"relative w-full overflow-hidden flex flex-col items-center " + (className || "")}>
        {/* Background Video for the entire footer */}
        <div className="absolute inset-0 z-0">
          {isMounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://raw.githubusercontent.com/devwithprem/bgvid/b0e855513b80550eab54cbf284a07ca97a299cbf/bgvid4.mp4"
                type="video/mp4"
              />
            </video>
          )}
          {/* Blur layer and soft overlay above video */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
          {/* Glass effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-white/5 backdrop-blur-[4px] [mask-image:linear-gradient(to_top,black_40%,transparent)]" />
        </div>

        {/* CTA SECTION */}
        {!hideCta && (
        <section className="w-full relative pt-[120px] pb-0 overflow-hidden flex flex-col items-center">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/40 to-transparent" />

          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-[96px] relative z-10 flex flex-col items-center">
            <div className="max-w-[1248px] w-full flex flex-col items-center">

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3779eb]/10 border border-[#3779eb]/20 mb-[30px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#3779eb]" />
                <span className="text-[#3779eb] text-[13px] font-sans font-medium uppercase tracking-wider">Launch your next campaign</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-[742px] text-center text-[#111827] font-semibold text-[42px] md:text-[68px] leading-[1.1] md:leading-[80px] tracking-tight md:tracking-[-2.2px] mb-[12px]"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                Make Your Next Giveaway More <span className="italic text-[rgba(0,0,0,0.40)]">Measurable</span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-[660px] text-center text-[#111827] font-sans text-lg md:text-[20px] leading-[1.5] md:leading-[30px] tracking-tight md:tracking-[-0.4px] opacity-80 mb-[64px]"
              >
                Capture valuable entries, understand where participation comes from, and run your next campaign with a clearer view of performance.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <CTAButton text="Explore Conversion" href="/conversion-giveaways" variant="primary" />
                <CTAButton text="Explore Channel" href="/channel-giveaways" variant="secondary" />
              </motion.div>

            </div>
          </div>
        </section>
        )}

        {/* FOOTER LINKS SECTION */}
        <div className="relative w-full flex flex-col items-center">
          <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-[96px] pt-[64px] pb-[32px] flex flex-col items-start bg-transparent">

            {/* Content Row */}
            <motion.div
              className="w-full lg:w-[1248px] pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[96px] flex flex-col lg:flex-row items-start gap-[60px] lg:gap-[130px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Left Column */}
              <div className="w-full lg:w-[440px] flex flex-col gap-6">
                <motion.div variants={itemVariants}>
                  <a href="/" className="inline-block hover:opacity-85 transition-opacity" aria-label="Tragami Home">
                    <img src="/logo.svg" alt="Tragami" className="h-8 w-auto" />
                  </a>
                </motion.div>
                <motion.h3
                  variants={itemVariants}
                  className="text-[#111827] text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                  style={{ fontFamily: "'Onest', sans-serif" }}
                >
                  Run giveaways you can measure
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="text-[#111827] font-sans text-[18px] font-normal leading-[28px] opacity-80"
                >
                  Tragami is a giveaway campaign platform for collecting entries, capturing leads, and tracking participation across campaigns and channels.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 px-6 py-3 font-sans text-[18px] font-medium text-[#2563EB] hover:bg-white/80 transition-colors"
                  >
                    Get Started <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>

              {/* Right Column (Link Lists) */}
              <div className="lg:ml-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap gap-y-12 gap-x-8 lg:gap-[64px] w-full lg:w-auto">
                {footerColumns.map((col, ci) => (
                  <div key={col.heading} className="lg:min-w-[152px] flex flex-col gap-[20px] relative">
                    <motion.h4
                      variants={itemVariants}
                      className="text-[#111827] text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                      style={{ fontFamily: "'Onest', sans-serif" }}
                    >{col.heading}</motion.h4>
                    <ul className="flex flex-col gap-[16px]">
                      {col.links.map((link) => (
                        <motion.li key={link.label} variants={itemVariants}>
                          <a href={link.href} className="text-[#111827] font-sans text-[18px] font-normal leading-[28px] opacity-80 hover:opacity-100 hover:font-medium transition-all">{link.label}</a>
                        </motion.li>
                      ))}
                    </ul>
                    {ci < footerColumns.length - 1 && (
                      <div className="absolute top-0 -right-[32px] h-full w-[1px] bg-[#111827]/10 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Big Text Tragami */}
            <div className="w-full max-w-[1248px] overflow-hidden flex flex-col justify-center items-center select-none mx-auto self-center text-center py-4 md:py-8 lg:py-12">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] as const }}
                className="w-full text-center text-[#FFFFFF] text-[clamp(48px,15vw,220px)] font-bold leading-none tracking-[-0.035em] uppercase whitespace-nowrap"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                TRAGAMI
              </motion.h1>
            </div>

            {/* Bottom Text Row */}
            <motion.div
              className="w-full lg:w-[1248px] mt-[24px] pt-8 flex flex-col lg:flex-row items-center justify-between gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-8 text-white font-sans text-[18px] font-normal leading-[28px] opacity-80">
                <a href="#" className="hover:opacity-100 hover:font-medium transition-all">Terms & Conditions</a>
                <a href="#" className="hover:opacity-100 hover:font-medium transition-all">Privacy Policy</a>
              </div>

              <div className="text-white font-sans text-[18px] font-normal leading-[28px] opacity-80 text-center lg:text-left">
                &copy; 2026 Tragami. All rights reserved.
              </div>
            </motion.div>

          </div>
        </div>
      </footer>
    </>
  );
}
