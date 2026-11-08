"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TragamiMark } from "@/components/ui/TragamiMark";
import {
  PRODUCT_GROUPS,
  USE_CASE_LINKS,
  PLATFORM_LINKS,
  SIGNUP_HREF,
  LOGIN_HREF,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const productLinks = PRODUCT_GROUPS[0].links;
const platformLinks = PLATFORM_LINKS;
const useCaseLinks = USE_CASE_LINKS;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const desktopLink =
    "font-inter text-[15px] leading-6 tracking-[-0.3px] text-[#111827] transition-all font-normal opacity-80 hover:opacity-100 hover:font-semibold";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#2563EB]/10 bg-white/95 backdrop-blur-xl shadow-[0_2px_15px_rgba(37,99,235,0.03)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          {/* Brand */}
          <Link href="/" className="flex items-center hover:opacity-85 transition-opacity" aria-label="Tragami Home">
            <img src="/logo.svg" alt="Tragami" className="h-7 sm:h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
            {/* Products Dropdown */}
            <div className="group relative">
              <button
                className={cn(
                  desktopLink,
                  "flex items-center gap-1 cursor-pointer py-2",
                  (pathname.includes("conversion") || pathname.includes("channel")) &&
                    "font-semibold opacity-100 text-[#2563EB]"
                )}
                aria-haspopup="true"
              >
                Products <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" aria-hidden="true" />
              </button>
              <div className="invisible absolute left-0 top-full hidden pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:block group-hover:opacity-100 group-focus-within:visible group-focus-within:block group-focus-within:opacity-100 z-50">
                <div className="w-72 rounded-2xl border border-[#2563EB]/15 bg-white/95 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
                  {productLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={cn(
                        "block rounded-xl px-3.5 py-2.5 font-inter text-[14px] transition-colors",
                        pathname === l.href
                          ? "bg-[#2563EB]/10 font-semibold text-[#2563EB]"
                          : "text-[#111827]/85 hover:bg-[#2563EB]/5 hover:text-[#2563EB]"
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Dropdown */}
            <div className="group relative">
              <button
                className={cn(
                  desktopLink,
                  "flex items-center gap-1 cursor-pointer py-2",
                  pathname.startsWith("/platform") && "font-semibold opacity-100 text-[#2563EB]"
                )}
                aria-haspopup="true"
              >
                Platform <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" aria-hidden="true" />
              </button>
              <div className="invisible absolute left-0 top-full hidden pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:block group-hover:opacity-100 group-focus-within:visible group-focus-within:block group-focus-within:opacity-100 z-50">
                <div className="w-72 rounded-2xl border border-[#2563EB]/15 bg-white/95 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
                  {platformLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={cn(
                        "block rounded-xl px-3.5 py-2.5 font-inter text-[14px] transition-colors",
                        pathname === l.href
                          ? "bg-[#2563EB]/10 font-semibold text-[#2563EB]"
                          : "text-[#111827]/85 hover:bg-[#2563EB]/5 hover:text-[#2563EB]"
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Use Cases Dropdown */}
            <div className="group relative">
              <button
                className={cn(
                  desktopLink,
                  "flex items-center gap-1 cursor-pointer py-2",
                  pathname.startsWith("/use-cases") && "font-semibold opacity-100 text-[#2563EB]"
                )}
                aria-haspopup="true"
              >
                Use Cases <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" aria-hidden="true" />
              </button>
              <div className="invisible absolute left-0 top-full hidden pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:block group-hover:opacity-100 group-focus-within:visible group-focus-within:block group-focus-within:opacity-100 z-50">
                <div className="w-80 rounded-2xl border border-[#2563EB]/15 bg-white/95 p-3 shadow-[0_16px_40px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
                  {useCaseLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3.5 py-2 font-inter text-[14px] transition-colors",
                        pathname === l.href
                          ? "bg-[#2563EB]/10 font-semibold text-[#2563EB]"
                          : "text-[#111827]/85 hover:bg-[#2563EB]/5 hover:text-[#2563EB]"
                      )}
                    >
                      <span>{l.label}</span>
                      {l.soon && (
                        <span className="rounded-full bg-[#3779eb]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[#2563EB]">
                          Soon
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Link */}
            <Link
              href="/resources"
              className={cn(
                desktopLink,
                pathname === "/resources" && "font-semibold opacity-100 text-[#2563EB]"
              )}
            >
              Resources
            </Link>

            {/* Pricing Link */}
            <Link
              href="/pricing"
              className={cn(
                desktopLink,
                pathname === "/pricing" && "font-semibold opacity-100 text-[#2563EB]"
              )}
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={LOGIN_HREF}
              className="font-inter text-sm font-medium text-[#111827]/75 hover:text-[#2563EB] transition-colors"
            >
              Log in
            </Link>

            <motion.a
              href="/pricing"
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              layout
              className={cn(
                "flex items-center gap-3 py-1.5 rounded-full bg-[#2563EB] text-white group cursor-pointer relative h-11 transition-all duration-300 shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:bg-[#1d4ed8]",
                isBtnHovered ? "flex-row-reverse pl-2 pr-[18px]" : "flex-row pl-[18px] pr-2"
              )}
            >
              <motion.span
                layout
                className="font-inter text-sm font-medium leading-6 tracking-[-0.3px]"
              >
                Get Started
              </motion.span>
              <motion.div
                layout
                className="w-7 h-7 rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
              </motion.div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#111827] bg-[#111827]/5 hover:bg-[#111827]/10 rounded-full cursor-pointer transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] overflow-y-auto border-t border-[#2563EB]/10 bg-white px-6 py-6 lg:hidden shadow-xl"
            >
              <div className="flex flex-col gap-6">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="font-inter text-lg font-semibold text-[#111827] hover:text-[#2563EB]"
                >
                  Home
                </Link>

                {/* Products */}
                <div>
                  <p className="mb-2 font-inter text-xs font-semibold uppercase tracking-wider text-[#111827]/40">
                    Products
                  </p>
                  <div className="flex flex-col gap-2 pl-3">
                    {productLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="font-inter text-base text-[#111827]/80 hover:text-[#2563EB]"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Platform */}
                <div>
                  <p className="mb-2 font-inter text-xs font-semibold uppercase tracking-wider text-[#111827]/40">
                    Platform
                  </p>
                  <div className="flex flex-col gap-2 pl-3">
                    {platformLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="font-inter text-base text-[#111827]/80 hover:text-[#2563EB]"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <p className="mb-2 font-inter text-xs font-semibold uppercase tracking-wider text-[#111827]/40">
                    Use Cases
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-3">
                    {useCaseLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="font-inter text-sm text-[#111827]/80 hover:text-[#2563EB]"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Direct Pages */}
                <div className="flex flex-col gap-3 pt-2 border-t border-[#111827]/[0.06]">
                  <Link
                    href="/resources"
                    onClick={() => setOpen(false)}
                    className="font-inter text-lg font-semibold text-[#111827] hover:text-[#2563EB]"
                  >
                    Resources
                  </Link>

                  <Link
                    href="/pricing"
                    onClick={() => setOpen(false)}
                    className="font-inter text-lg font-semibold text-[#111827] hover:text-[#2563EB]"
                  >
                    Pricing
                  </Link>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-[#111827]/[0.08]">
                  <Link
                    href="/pricing"
                    onClick={() => setOpen(false)}
                    className="block w-full py-3.5 rounded-full bg-[#2563EB] text-white text-center font-inter font-semibold text-base shadow-md hover:bg-[#1d4ed8]"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
