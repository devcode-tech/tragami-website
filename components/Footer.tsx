"use client";

import { motion } from "motion/react";
import { Music2, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import { TragamiMark } from "@/components/ui/TragamiMark";
import { FOOTER_COLUMNS } from "@/lib/site";

const LUMINA_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4";


const SOCIALS = [Music2, Facebook, Twitter, Youtube, Instagram];

export function Footer() {
  return (
    <footer id="resources" className="relative flex min-h-[80vh] flex-col items-center overflow-hidden px-4 pb-8 pt-32 sm:px-6">
      {/* video backdrop, from the Lumina liquid-glass spec. Scoped to this
          footer with `absolute` rather than the reference's page-wide
          `fixed`, so it doesn't bleed behind every earlier section. */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={LUMINA_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-black/55" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className="liquid-glass relative z-10 mt-auto w-full max-w-7xl rounded-3xl p-6 text-white/70 md:p-10"
      >
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-xl font-medium text-white">
              <TragamiMark className="h-6 w-6" />
              TRAGAMI
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Tragami gives every location the same capture, campaign and reward stack, and shows
              you which one actually earned the repeat visit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 md:col-span-7">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h5 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">
                  {col.heading}
                </h5>
                <ul className="space-y-2 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:gap-4">
          <p className="text-[10px] uppercase tracking-widest opacity-50">
            © 2026 Tragami. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest opacity-50">Follow along:</span>
            {SOCIALS.map((Icon, i) => (
              <a key={i} href="#" className="opacity-70 transition-colors hover:text-white hover:opacity-100">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
