"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/site";

export function SiteFooter() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
    <footer className="relative w-full overflow-hidden flex flex-col items-center">
      {/* Background Video */}
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
        {/* Soft blur overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-white/5 backdrop-blur-[4px] [mask-image:linear-gradient(to_top,black_40%,transparent)]" />
      </div>

      {/* FOOTER LINKS & WATERMARK */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-[96px] pt-16 pb-8 flex flex-col items-center">
        {/* Content Row */}
        <motion.div
          className="w-full lg:w-[1248px] pt-8 lg:pt-16 pb-12 lg:pb-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-[100px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left Column */}
          <div className="w-full lg:w-[440px] flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <Link href="/" className="inline-block hover:opacity-85 transition-opacity" aria-label="Tragami Home">
                <img src="/logo.svg" alt="Tragami" className="h-8 w-auto" />
              </Link>
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-[#111827] text-2xl font-semibold leading-[30px] tracking-[-0.8px] font-onest"
            >
              Run giveaways you can measure
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-[#111827] font-inter text-base font-normal leading-relaxed opacity-80"
            >
              Tragami is a giveaway campaign platform for collecting entries, capturing leads, and tracking participation across campaigns and channels.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/60 px-6 py-3 font-sans text-base font-medium text-[#2563EB] hover:bg-white/90 transition-all shadow-sm"
              >
                <span>Get Started</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Link Lists */}
          <div className="lg:ml-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 lg:gap-12 w-full lg:w-auto">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <motion.h4
                  variants={itemVariants}
                  className="text-[#111827] text-lg font-semibold leading-tight font-onest"
                >
                  {col.heading}
                </motion.h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <motion.li key={link.label} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className="text-[#111827] font-inter text-sm opacity-80 hover:opacity-100 hover:text-[#2563EB] hover:font-medium transition-all"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Big Text TRAGAMI Watermark */}
        <div className="w-full max-w-[1248px] overflow-hidden flex flex-col justify-center items-center select-none mx-auto text-center py-6 md:py-10">
          <motion.h1
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.21, 0.45, 0.32, 0.9] as const }}
            className="w-full text-center text-white text-[clamp(48px,14vw,200px)] font-bold leading-none tracking-[-0.035em] uppercase whitespace-nowrap font-onest"
          >
            TRAGAMI
          </motion.h1>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="w-full lg:w-[1248px] pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-white font-inter text-sm opacity-85"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
          <div>
            &copy; 2026 Tragami. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
