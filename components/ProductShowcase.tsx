"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const SHOWCASE_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4";

/**
 * The rounded, full-bleed video hero container + floating bottom navbar from
 * the "Procure"-style spec. It wasn't used for the site's actual hero (that
 * would have duplicated the Stellar.ai hero at the top of the page), so it
 * gets its own mid-page moment instead: a "see it in one screen" showcase.
 */
export function ProductShowcase() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex h-[600px] w-full max-w-[1400px] flex-col overflow-hidden rounded-[48px] border border-slate-200/50 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full scale-105 object-cover transition-transform duration-1000"
            aria-hidden="true"
          >
            <source src={SHOWCASE_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-20 flex flex-1 flex-col items-start px-8 pt-12 md:px-16 md:pt-16"
        >
          <h2 className="max-w-md text-[42px] font-medium leading-tight tracking-tight text-white md:text-[56px]">
            The campaign layer,
            <br />
            in one screen.
          </h2>
          <p className="mt-4 max-w-sm text-[14px] text-white/70 md:text-[15px]">
            Every capture form, every promo, every reward and every attributed outcome, running on
            one dashboard your team already knows how to read.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105">
            Book a demo
          </button>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2">
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-1 rounded-full border border-slate-200/40 bg-white/90 px-1.5 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-sm shadow-sm">
              ✦
            </span>
            <a href="#capture" className="px-4 py-2 text-[12px] font-semibold text-slate-500 hover:text-black">
              Product
            </a>
            <a href="#pricing" className="px-4 py-2 text-[12px] font-semibold text-slate-500 hover:text-black">
              Pricing
            </a>
            <a
              href="#pricing"
              className="flex items-center gap-1 rounded-full border border-slate-200/60 bg-white px-5 py-2 text-[12px] font-semibold text-black shadow-sm transition-all hover:border-slate-300"
            >
              Get in touch <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </motion.nav>
        </div>
      </motion.div>
    </section>
  );
}
