"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
  Check,
  ChevronDown,
  FormInput,
  Users,
  ShieldCheck,
  BarChart3,
  Webhook,
  Layers,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { TragamiMark } from "@/components/ui/GamiflowMark";
import { cn } from "@/lib/utils";
import { ConversionMock, SampleNote } from "./Mockups";
import CTAWithFooter01Finsyc from "./CTA with Footer 01 Finsyc";



const conversionFeatures = [
  {
    icon: FormInput,
    title: "Custom Campaign Forms",
    description:
      "Build entry forms using configurable fields and conditional logic. Collect the information relevant to each promotion without forcing every participant through the same experience.",
    badge: "Flexible Builder",
    bullets: [
      "Custom text, select, phone, and email fields",
      "Conditional skip logic based on user answers",
      "Mobile-optimized instant loading layout",
    ],
  },
  {
    icon: Users,
    title: "Lead Capture & Organization",
    description:
      "Collect contact information and custom responses in one place. Keep campaign submissions organized and ready for export or immediate follow-up.",
    badge: "1st Party Data",
    bullets: [
      "Consolidated participant contact profiles",
      "Tag entries by campaign and landing source",
      "Instant CSV and JSON submission export",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Entry Validation & Bot Protection",
    description:
      "Use available validation and bot-protection mechanisms to help reduce invalid, disposable, and automated submissions before they reach your list.",
    badge: "Verified Quality",
    bullets: [
      "Disposable email & syntax filtering",
      "Rate limiting and CAPTCHA challenge layers",
      "Duplicate entry detection and prevention",
    ],
  },
  {
    icon: BarChart3,
    title: "Real-Time Campaign Reporting",
    description:
      "Monitor participation velocity and submission activity to understand how your giveaway is performing minute by minute.",
    badge: "Live Metrics",
    bullets: [
      "Live conversion rate and completion tracking",
      "Daily and hourly participation velocity charts",
      "Drop-off analysis per form step",
    ],
  },
  {
    icon: Webhook,
    title: "Connected Workflows & Webhooks",
    description:
      "Send submission data to supported external systems using webhooks, allowing your existing CRM and email workflows to process new entries automatically.",
    badge: "Zero Friction",
    bullets: [
      "Real-time JSON webhook payloads",
      "Compatible with Zapier, Make, and custom APIs",
      "Automatic retry logic for failed deliveries",
    ],
  },
  {
    icon: Layers,
    title: "Embeds & Standalone Pages",
    description:
      "Host campaigns on high-converting standalone landing pages or embed entry forms directly into your existing website, blog, or store.",
    badge: "Omnichannel",
    bullets: [
      "One-click responsive iframe and script embeds",
      "Custom branded standalone subdomains",
      "Matches your website branding automatically",
    ],
  },
];

const interactiveFormTabs = [
  {
    id: "lead",
    label: "Lead Capture Form",
    title: "Summer VIP Giveaway Entry",
    description: "Configured with first name, business email, and company size.",
    fields: [
      { label: "Full Name", placeholder: "Alex Morgan", type: "text" },
      { label: "Work Email", placeholder: "alex@company.com", type: "email" },
      { label: "Company Size", placeholder: "10-50 employees", type: "select" },
    ],
    buttonText: "Submit & Enter Giveaway",
  },
  {
    id: "qualification",
    label: "Qualified Survey Form",
    title: "Product Feedback & Entry",
    description: "Includes conditional questions to qualify potential buyers.",
    fields: [
      { label: "Primary Role", placeholder: "Marketing Director", type: "select" },
      { label: "What is your primary marketing goal?", placeholder: "Increase lead conversion", type: "select" },
      { label: "Phone Number (for SMS win alert)", placeholder: "+1 (555) 019-2834", type: "tel" },
    ],
    buttonText: "Complete Entry & Claim Points",
  },
  {
    id: "instant",
    label: "Instant Win Entry",
    title: "Spin & Unlock Entry",
    description: "Minimal fields for maximum conversion rate and fast participation.",
    fields: [
      { label: "Email Address", placeholder: "yourname@gmail.com", type: "email" },
      { label: "Preferred Reward Category", placeholder: "Store Credit ($50)", type: "select" },
    ],
    buttonText: "Reveal My Entry Ticket",
  },
];

const faqs = [
  {
    q: "How fast can I launch a Conversion Giveaway?",
    a: "Most teams launch their first campaign within 15 minutes. Pick a pre-configured template, customize your form fields and branding, set your entry limits, and publish your live link.",
  },
  {
    q: "Can I connect the captured leads directly to my CRM?",
    a: "Yes. Tragami provides instant webhooks that send captured submission payloads in standard JSON format to any endpoint, including Zapier, Make, HubSpot, Klaviyo, or your custom server.",
  },
  {
    q: "How does Tragami prevent fake and automated entries?",
    a: "Our validation layer checks for disposable email domains, enforces reCAPTCHA/bot-mitigation challenges, and monitors IP frequency to prevent automated script submissions.",
  },
  {
    q: "Can I embed conversion forms on my own Shopify or WordPress site?",
    a: "Yes. You can choose between using our hosted campaign landing pages or grabbing an embed snippet to place directly onto any page of your existing site.",
  },
];

export default function ConversionGiveawaysFinsyc() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeFormTab, setActiveFormTab] = useState("lead");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const activeTabContent =
    interactiveFormTabs.find((t) => t.id === activeFormTab) || interactiveFormTabs[0];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <div className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden min-h-[750px] lg:min-h-[860px] bg-white">
          {/* Background Ambient Video */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://raw.githubusercontent.com/devwithprem/bgvid/98908c9a269dcccee977c72fb469d5f21224ae99/convchannbg.mp4"
                type="video/mp4"
              />
            </video>
            {/* Layer of blur on top of the video */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-16">
            {/* Hero Main Content */}
            <div className="flex flex-col items-center mt-4 lg:mt-8">
              {/* Product Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#3779eb]/10 border border-[#3779eb]/20 mb-6 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#3779eb]" />
                <span className="font-inter text-xs sm:text-sm font-semibold tracking-wide text-[#3779eb] uppercase">
                  Product · Conversion Giveaways
                </span>
              </motion.div>

              {/* Title with Playfair italic accent */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-[880px] w-full text-center font-onest text-[38px] sm:text-[50px] lg:text-[64px] font-semibold leading-tight lg:leading-[72px] tracking-tight lg:tracking-[-2.5px] text-[#111827]"
              >
                Turn Giveaway Entries Into{" "}
                <span className="font-playfair italic font-semibold text-[#010101] opacity-50 tracking-normal">
                  Valuable Leads.
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="max-w-[680px] w-full text-center mt-5 font-inter text-base sm:text-lg lg:text-[20px] font-normal leading-relaxed text-[#111827] opacity-80"
              >
                Build beautiful, branded promotion forms that capture contact information, validate submissions with bot protection, and automatically sync leads into your workflows.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center gap-4"
              >
                <a
                  href="/#pricing"
                  className="flex items-center gap-3 py-3 px-8 rounded-full bg-[#2563EB] text-white font-inter text-base lg:text-[18px] font-medium transition-all duration-300 hover:bg-blue-700 shadow-[0_8px_25px_rgba(37,99,235,0.25)]"
                >
                  <span>Launch a Campaign</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#deep-dive"
                  className="flex items-center gap-2 py-3 px-7 rounded-full bg-white/40 backdrop-blur-md border border-[#2563EB]/20 text-[#2563EB] font-inter text-base lg:text-[18px] font-medium transition-all duration-300 hover:bg-white/70"
                >
                  <span>Explore Capabilities</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Trust Checkmarks */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3"
              >
                {["Custom fields & conditional logic", "Automatic bot & spam protection", "Real-time webhook sync"].map(
                  (pt) => (
                    <div key={pt} className="flex items-center gap-2 font-inter text-sm text-[#111827]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3779eb]/15">
                        <Check className="h-3 w-3 text-[#2563EB]" strokeWidth={3} />
                      </span>
                      <span>{pt}</span>
                    </div>
                  )
                )}
              </motion.div>

              {/* Hero Visual Mockup */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.9 }}
                className="mt-14 lg:mt-16 w-full max-w-[960px] flex flex-col items-center gap-3"
              >
                <ConversionMock />
                <SampleNote className="text-[#111827]/60" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CAPABILITY DEEP DIVE */}
        <section id="deep-dive" className="w-full bg-[#FFFEFF] py-20 lg:py-32 scroll-mt-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#3779eb]" />
                <span className="text-[#3779eb] font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                  Engineered For Conversion
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#111827] text-center font-onest text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px] max-w-[800px]"
              >
                Everything You Need to Collect{" "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  Qualified Leads
                </span>
              </motion.h2>

              <p className="mt-4 text-center text-[#111827] font-inter text-base sm:text-lg font-normal leading-relaxed opacity-80 max-w-[620px]">
                Forget generic forms with low completion rates. Tragami provides high-converting giveaway experiences designed to maximize verified customer entries.
              </p>

              {/* 6 Feature Cards Grid */}
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                {conversionFeatures.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                    className="flex flex-col justify-between rounded-[28px] border border-[#2563EB]/15 bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/40 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#3779eb]/10 border border-[#3779eb]/20 flex items-center justify-center text-[#2563EB]">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className="rounded-full bg-[#3779eb]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mt-6 font-onest text-xl font-bold text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-inter text-[#111827]/70 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="mt-6 space-y-2.5 border-t border-[#111827]/[0.06] pt-5">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2.5 text-xs sm:text-sm font-inter text-[#111827]/80">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#3779eb]/15">
                              <Check className="h-2.5 w-2.5 text-[#2563EB]" strokeWidth={3} />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: INTERACTIVE FORM BUILDER PREVIEW */}
        <section className="w-full bg-[#F7FDFF] py-20 lg:py-32 overflow-hidden">
          <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#3779eb]" />
                <span className="text-[#3779eb] font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                  Interactive Showcase
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#111827] text-center font-onest text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px] max-w-[760px]"
              >
                Tailored Forms for Every{" "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  Audience Type
                </span>
              </motion.h2>

              <p className="mt-4 text-center text-[#111827] font-inter text-base sm:text-lg font-normal leading-relaxed opacity-80 max-w-[620px]">
                Click between different campaign templates below to see how Tragami adapts form fields and incentives for your specific conversion goal.
              </p>

              {/* Interactive Tabs Switcher */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {interactiveFormTabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveFormTab(t.id)}
                    className={cn(
                      "px-6 py-3 rounded-full font-inter text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer",
                      activeFormTab === t.id
                        ? "bg-[#2563EB] text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)]"
                        : "bg-white text-[#111827]/70 border border-[#2563EB]/15 hover:bg-white/80 hover:text-[#111827]"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Form Live Preview Card */}
              <motion.div
                key={activeFormTab}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-10 w-full max-w-[640px] rounded-[32px] border border-[#2563EB]/20 bg-white p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.12)]"
              >
                <div className="flex items-center justify-between border-b border-[#111827]/[0.08] pb-5">
                  <div>
                    <h4 className="font-onest text-xl font-bold text-[#111827]">
                      {activeTabContent.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm font-inter text-[#111827]/60">
                      {activeTabContent.description}
                    </p>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3779eb]/10 text-[#2563EB]">
                    <Sparkles className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {activeTabContent.fields.map((field) => (
                    <div key={field.label} className="space-y-1.5">
                      <label className="block font-inter text-xs font-semibold text-[#111827]/80">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        disabled
                        className="w-full rounded-xl border border-[#111827]/15 bg-[#F9FBFB] px-4 py-3 font-inter text-sm text-[#111827] outline-none placeholder:text-[#111827]/40"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="/#pricing"
                    className="block w-full rounded-full bg-[#2563EB] py-3.5 text-center font-inter text-sm sm:text-base font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
                  >
                    {activeTabContent.buttonText}
                  </a>
                  <p className="mt-3 text-center text-xs font-inter text-[#111827]/50">
                    Live interactive form preview · Powered by Tragami
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FAQ */}
        <section className="w-full bg-[#FFFEFF] py-20 lg:py-28">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap mb-6">
              <Sparkles className="w-4 h-4 text-[#3779eb]" />
              <span className="text-[#3779eb] font-inter text-base leading-6 tracking-[-0.3px]">
                Product Questions
              </span>
            </div>

            <h2 className="text-[#111827] text-center font-onest text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-tight tracking-[-1.2px]">
              Conversion Giveaways{" "}
              <span className="text-black/40 font-playfair italic font-semibold">FAQ</span>
            </h2>

            <div className="mt-10 w-full flex flex-col gap-3">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={item.q}
                    className={cn(
                      "rounded-[20px] border bg-white transition-shadow duration-300",
                      isOpen
                        ? "border-[#3779eb]/25 shadow-[0_8px_30px_rgba(37,99,235,0.06)]"
                        : "border-[#111827]/10"
                    )}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    >
                      <span className="font-onest text-[18px] sm:text-[20px] font-semibold text-[#111827]">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 shrink-0 text-[#111827]/60" />
                      ) : (
                        <ChevronDown className="h-5 w-5 shrink-0 text-[#111827]/60" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="px-6 pb-6 font-inter text-base leading-relaxed text-[#111827] opacity-80">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: FOOTER WITH VIDEO & TRAGAMI WATERMARK */}
        <CTAWithFooter01Finsyc />
      </div>
    </>
  );
}
