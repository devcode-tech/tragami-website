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
  Route,
  Link2,
  GitMerge,
  BarChart3,
  Inbox,
  Lightbulb,
  QrCode,
  Share2,
  ChevronUp,
} from "lucide-react";
import { TragamiMark } from "@/components/ui/GamiflowMark";
import { cn } from "@/lib/utils";
import { ChannelMock, SampleNote } from "./Mockups";
import CTAWithFooter01Finsyc from "./CTA with Footer 01 Finsyc";



const channelFeatures = [
  {
    icon: Link2,
    title: "Trackable Links & Codes",
    description:
      "Generate unique campaign links, vanity URLs, and scannable QR codes for every partner, location, store, or creator in seconds.",
    badge: "Smart Tracking",
    bullets: [
      "Custom UTM parameters and referral tokens",
      "Dynamic high-res print-ready QR codes",
      "Instant link generation via API or dashboard",
    ],
  },
  {
    icon: GitMerge,
    title: "Source & Partner Attribution",
    description:
      "Automatically associate eligible submissions with the specific channel, referral code, or partner that drove the entry.",
    badge: "Multi-Touch Ready",
    bullets: [
      "First-touch and last-touch attribution models",
      "Submissions mapped directly to partner IDs",
      "Tamper-proof source verification",
    ],
  },
  {
    icon: BarChart3,
    title: "Partner Performance Leaderboard",
    description:
      "Compare participant volume, lead quality, and completion rates across all your active partners, stores, and marketing channels.",
    badge: "Live Scorecards",
    bullets: [
      "Real-time partner conversion leaderboards",
      "Channel ROI and cost-per-lead tracking",
      "Shareable partner performance reports",
    ],
  },
  {
    icon: Inbox,
    title: "Centralized Lead Capture",
    description:
      "Collect and organize all participant contact information alongside their verified source attribution data in one structured database.",
    badge: "Unified Records",
    bullets: [
      "Combined lead profile and attribution record",
      "No duplicate entries across fragmented links",
      "Instant export with source metadata included",
    ],
  },
  {
    icon: Lightbulb,
    title: "Actionable Channel Insights",
    description:
      "Identify which marketing partners produce the highest value leads so you can allocate promotional budget where it performs best.",
    badge: "ROI Optimization",
    bullets: [
      "Channel efficiency and participation velocity",
      "Geographic breakdown per retail location",
      "Historical campaign trend comparisons",
    ],
  },
  {
    icon: Route,
    title: "OEM & Dealer Distribution",
    description:
      "Empower distributed dealer networks, franchisees, or retail locations to co-brand campaigns while centralizing performance visibility.",
    badge: "Network Scale",
    bullets: [
      "Location-level and franchise tagging",
      "Centralized oversight with localized routing",
      "Zero IT or POS integration required",
    ],
  },
];

const channelSimulators = [
  {
    id: "influencer",
    label: "Influencer Campaign",
    channelName: "Creator Partnership · @mia.lifestyle",
    url: "tragami.example/summer?src=creator-mia&utm_source=instagram",
    leadName: "Jordan Hayes",
    leadEmail: "jordan.h@gmail.com",
    recordedAt: "Just now",
    attributionType: "Last-touch (Influencer Link)",
    status: "Verified Entry",
  },
  {
    id: "retail",
    label: "In-Store QR Display",
    channelName: "Retail Store #104 · Downtown Boston",
    url: "tragami.example/summer?src=store-104&display=register-counter",
    leadName: "Samantha Miller",
    leadEmail: "sam.m@outlook.com",
    recordedAt: "2 mins ago",
    attributionType: "First-touch (In-Store QR Scan)",
    status: "Verified Entry",
  },
  {
    id: "partner",
    label: "Co-Branded Partner",
    channelName: "Affiliate Network · RidgeLine Outdoor Gear",
    url: "tragami.example/summer?src=partner-ridgeline&sub=newsletter",
    leadName: "David Chen",
    leadEmail: "david.chen@enterprise.org",
    recordedAt: "5 mins ago",
    attributionType: "Direct Partner Referral",
    status: "Verified Entry",
  },
];

const faqs = [
  {
    q: "How does Tragami track which partner sent a lead?",
    a: "Tragami assigns unique trackable links, UTM query tokens, or custom QR codes to each partner or channel. When a participant opens the link and submits the entry form, Tragami permanently binds the recorded source token to that submission record.",
  },
  {
    q: "Do retail stores or partners need special equipment or software?",
    a: "None at all. Partners only need to share their unique link on social media or print their unique QR code on table tents, flyers, or register displays. Everything operates in the standard mobile browser with zero app installation.",
  },
  {
    q: "Can I run giveaways with hundreds of partners simultaneously?",
    a: "Yes. Channel Giveaways is built to scale across extensive dealer, franchise, and influencer networks. You can generate hundreds of unique tracking links in bulk and monitor all partner scorecards in real time.",
  },
  {
    q: "Does Channel Giveaways require POS integration?",
    a: "No. Tragami tracks marketing engagement, entry submission, and verified lead attribution. It operates entirely independently of your point-of-sale systems without requiring POS access or complex IT integration.",
  },
];

export default function ChannelGiveawaysFinsyc() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("influencer");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const activeSim = channelSimulators.find((s) => s.id === activeTab) || channelSimulators[0];

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
                  Product · Channel Giveaways
                </span>
              </motion.div>

              {/* Title with Playfair accent */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-[880px] w-full text-center font-onest text-[38px] sm:text-[50px] lg:text-[64px] font-semibold leading-tight lg:leading-[72px] tracking-tight lg:tracking-[-2.5px] text-[#111827]"
              >
                Every Channel Has a Story. Know Which One{" "}
                <span className="font-playfair italic font-semibold text-[#010101] opacity-50 tracking-normal">
                  Performs.
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="max-w-[700px] w-full text-center mt-5 font-inter text-base sm:text-lg lg:text-[20px] font-normal leading-relaxed text-[#111827] opacity-80"
              >
                Distribute giveaway campaigns through partners, stores, influencers, and referral links. Tragami connects captured entries with their recorded source, helping you compare channel participation with precision.
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
                  <span>Start Tracking Channels</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#deep-dive"
                  className="flex items-center gap-2 py-3 px-7 rounded-full bg-white/40 backdrop-blur-md border border-[#2563EB]/20 text-[#2563EB] font-inter text-base lg:text-[18px] font-medium transition-all duration-300 hover:bg-white/70"
                >
                  <span>Explore Features</span>
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
                {["Unique trackable link generation", "Real-time source attribution", "Zero POS or app install required"].map(
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

              {/* Hero Mockup Visual */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.9 }}
                className="mt-14 lg:mt-16 w-full max-w-[960px] flex flex-col items-center gap-3"
              >
                <ChannelMock />
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
                  Attribution Infrastructure
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#111827] text-center font-onest text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px] max-w-[800px]"
              >
                Connect Every Submission to Its{" "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  Original Source
                </span>
              </motion.h2>

              <p className="mt-4 text-center text-[#111827] font-inter text-base sm:text-lg font-normal leading-relaxed opacity-80 max-w-[620px]">
                Stop guessing which partner, campaign, or retail location drove your customer entries. Tragami provides clear visibility across your entire distribution ecosystem.
              </p>

              {/* 6 Capability Cards */}
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                {channelFeatures.map((item, idx) => (
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

        {/* SECTION 3: LIVE ATTRIBUTION SIMULATOR */}
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
                  Attribution Simulator
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#111827] text-center font-onest text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px] max-w-[760px]"
              >
                How Source Attribution Works in{" "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  Real Time
                </span>
              </motion.h2>

              <p className="mt-4 text-center text-[#111827] font-inter text-base sm:text-lg font-normal leading-relaxed opacity-80 max-w-[620px]">
                Click between the channels below to see how Tragami records each unique source parameter alongside participant entries.
              </p>

              {/* Channel Tabs */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {channelSimulators.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveTab(s.id)}
                    className={cn(
                      "px-6 py-3 rounded-full font-inter text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer",
                      activeTab === s.id
                        ? "bg-[#2563EB] text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)]"
                        : "bg-white text-[#111827]/70 border border-[#2563EB]/15 hover:bg-white/80 hover:text-[#111827]"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Attribution Record Card */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-10 w-full max-w-[680px] rounded-[32px] border border-[#2563EB]/20 bg-white p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.12)]"
              >
                <div className="flex items-center justify-between border-b border-[#111827]/[0.08] pb-5">
                  <div>
                    <span className="rounded-full bg-[#3779eb]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                      Tracked Source Channel
                    </span>
                    <h4 className="mt-2 font-onest text-xl font-bold text-[#111827]">
                      {activeSim.channelName}
                    </h4>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3779eb]/10 text-[#2563EB]">
                    <QrCode className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-6 space-y-4 font-inter text-sm">
                  <div className="rounded-xl bg-[#F7FDFF] border border-[#2563EB]/10 p-3.5">
                    <p className="text-xs text-[#111827]/50 font-medium uppercase tracking-wider">
                      Tracking Link / URL
                    </p>
                    <p className="mt-1 font-mono text-xs sm:text-sm text-[#2563EB] break-all">
                      {activeSim.url}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-[#111827]/10 p-4">
                      <p className="text-xs text-[#111827]/50 font-medium">Participant Name</p>
                      <p className="mt-1 font-semibold text-[#111827]">{activeSim.leadName}</p>
                    </div>
                    <div className="rounded-xl border border-[#111827]/10 p-4">
                      <p className="text-xs text-[#111827]/50 font-medium">Participant Email</p>
                      <p className="mt-1 font-semibold text-[#111827]">{activeSim.leadEmail}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-[#111827]/10 p-4">
                      <p className="text-xs text-[#111827]/50 font-medium">Attribution Model</p>
                      <p className="mt-1 font-semibold text-[#111827]">{activeSim.attributionType}</p>
                    </div>
                    <div className="rounded-xl border border-[#111827]/10 p-4">
                      <p className="text-xs text-[#111827]/50 font-medium">Validation Status</p>
                      <p className="mt-1 font-semibold text-[#2563EB] flex items-center gap-1.5">
                        <Check className="h-4 w-4" />
                        {activeSim.status}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/#pricing"
                    className="block w-full rounded-full bg-[#2563EB] py-3.5 text-center font-inter text-sm sm:text-base font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
                  >
                    View Channel Giveaways Pricing
                  </a>
                  <p className="mt-3 text-center text-xs font-inter text-[#111827]/50">
                    Live channel attribution engine · Powered by Tragami
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PRODUCT FAQ */}
        <section className="w-full bg-[#FFFEFF] py-20 lg:py-28">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3779eb]/20 bg-[#3779eb]/10 whitespace-nowrap mb-6">
              <Sparkles className="w-4 h-4 text-[#3779eb]" />
              <span className="text-[#3779eb] font-inter text-base leading-6 tracking-[-0.3px]">
                Product Questions
              </span>
            </div>

            <h2 className="text-[#111827] text-center font-onest text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-tight tracking-[-1.2px]">
              Channel Giveaways{" "}
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
