"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  Users,
  Route,
  FormInput,
  Clock,
  Layers,
  HelpCircle,
  QrCode,
  Link2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import CTAWithFooter01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/CTA with Footer 01 Finsyc";

interface LTDPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  ltdPrice: number;
  originalPrice: string;
  entries: string;
  channels: string;
  team: string;
  uploads: string;
  retention: string;
  analytics: string;
  branding: boolean;
  widgets: boolean;
  highlights: string[];
}

const LTD_PLANS: LTDPlan[] = [
  {
    id: "tier-1",
    name: "Tier 1",
    ltdPrice: 79,
    originalPrice: "$999/mo",
    entries: "5,000",
    channels: "10 Channels / Partners",
    team: "1 team member",
    uploads: "10 MB",
    retention: "6 months entry data",
    analytics: "24h analytics update",
    branding: false,
    widgets: false,
    highlights: [
      "5,000 monthly included entries",
      "Unlimited active campaigns & forms",
      "10 tracked channels / partners",
      "Direct link & QR code access",
      "First-touch & multi-touch attribution",
      "Lead CSV export & webhooks",
      "30 winners per giveaway",
    ],
  },
  {
    id: "tier-2",
    name: "Tier 2",
    badge: "Most Popular",
    isPopular: true,
    ltdPrice: 189,
    originalPrice: "$1,999/mo",
    entries: "15,000",
    channels: "25 Channels / Partners",
    team: "3 team members",
    uploads: "50 MB",
    retention: "12 months entry data",
    analytics: "Realtime analytics",
    branding: true,
    widgets: true,
    highlights: [
      "15,000 monthly included entries",
      "Unlimited active campaigns & forms",
      "25 tracked channels / partners",
      "Remove Tragami branding",
      "Promotion widgets (Bar, Floating, Timer)",
      "Secure partner access & workspace activities",
      "Realtime analytics & live leaderboards",
      "50 winners per giveaway",
    ],
  },
  {
    id: "tier-3",
    name: "Tier 3",
    ltdPrice: 279,
    originalPrice: "$2,999/mo",
    entries: "30,000",
    channels: "50 Channels / Partners",
    team: "5 team members",
    uploads: "100 MB",
    retention: "24 months entry data",
    analytics: "Realtime analytics",
    branding: true,
    widgets: true,
    highlights: [
      "30,000 monthly included entries",
      "Unlimited active campaigns & forms",
      "50 tracked channels / partners",
      "Remove Tragami branding",
      "Promotion widgets (Bar, Floating, Timer)",
      "100 winners per giveaway",
      "24-month entry data retention",
      "12-month uploaded files retention",
    ],
  },
];

interface FeatureRow {
  name: string;
  t1: string;
  t2: string;
  t3: string;
  category?: string;
}

const TABLE_FEATURES: FeatureRow[] = [
  { name: "LTD price", t1: "$79", t2: "$189", t3: "$279" },
  { name: "Original Price", t1: "$999/mo", t2: "$1999/mo", t3: "$2999/mo" },
  { name: "Monthly included Entries", t1: "5,000", t2: "15,000", t3: "30,000" },
  { name: "Active campaigns", t1: "Unlimited", t2: "Unlimited", t3: "Unlimited" },
  { name: "Tracked Channels / Partners", t1: "10", t2: "25", t3: "50" },
  { name: "Unlimited forms", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Upload Limits", t1: "10 MB", t2: "50 MB", t3: "100 MB" },
  { name: "Mobile responsive", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Standard Rules for Fields", t1: "✓", t2: "✓", t3: "✓" },
  { name: "On-exit targeting for Popups", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Page-level targeting", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Geo-targeting", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Remove branding", t1: "—", t2: "✓", t3: "✓" },
  { name: "Lead CSV Export", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Coupon templates", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Webhooks", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Team members", t1: "1", t2: "3", t3: "5" },
  { name: "30+ templates", t1: "Upcoming", t2: "Upcoming", t3: "Upcoming" },
  { name: "Pro Integrations", t1: "—", t2: "—", t3: "—" },
  { name: "First-touch attribution", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Multi-touch attribution", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Partner leaderboards", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Entry Data retention", t1: "6 months", t2: "12 months", t3: "24 months" },
  { name: "Uploaded Files Retention", t1: "3 months", t2: "6 months", t3: "12 months" },
  { name: "Winner per Giveaway", t1: "30", t2: "50", t3: "100" },
  { name: "Random draw", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Tiered Winner Selection", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Frictionless Partner Access", t1: "✓", t2: "✓", t3: "✓" },
  { name: "Secure Partner Access", t1: "—", t2: "✓", t3: "✓" },
  { name: "Workspace Activites", t1: "—", t2: "✓", t3: "✓" },
  { name: "Realtime Analytics", t1: "Every 24 Hours Update", t2: "✓", t3: "✓" },
  { name: "Promotion Widgets (Bar, Floating, Notification, Timer)", t1: "—", t2: "✓", t3: "✓" },
  { name: "Direct Link Access", t1: "✓", t2: "✓", t3: "✓" },
  { name: "QR Code", t1: "✓", t2: "✓", t3: "✓" },
];

const FAQS = [
  {
    q: "What is the Tragami Lifetime Deal?",
    a: "The Lifetime Deal is a limited one-time payment offer that grants permanent lifetime access to Tragami. You get both Conversion Giveaways (interactive form builder, lead capture, rules) and Channel Giveaways (trackable links, QR codes, multi-touch partner attribution) without recurring subscriptions.",
  },
  {
    q: "Can I stack or upgrade tiers later?",
    a: "Yes. You can upgrade between Tier 1, Tier 2, and Tier 3 anytime by simply paying the difference while the lifetime deal is active.",
  },
  {
    q: "How do monthly entry limits work?",
    a: "Your entry limit (5,000 for Tier 1, 15,000 for Tier 2, 30,000 for Tier 3) refreshes on the first day of every month automatically for life.",
  },
  {
    q: "Do I get future updates and features?",
    a: "Yes. All lifetime accounts receive future core product improvements, performance updates, and upcoming features (including the 30+ campaign templates) aligned with their respective tier level.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes. Every lifetime license comes with an unconditional 60-day money-back guarantee. If Tragami does not completely transform your giveaway campaigns and lead attribution, request a full refund.",
  },
];

export default function LifetimeDealClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showTable, setShowTable] = useState(true);

  // Machine-readable AI JSON-LD schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tragami Lifetime Deal (One App Bundle)",
    description:
      "One-time payment lifetime access to Tragami. Combines Conversion Giveaways and Channel Giveaways with lead capture, QR codes, trackable links, and multi-touch partner attribution.",
    brand: {
      "@type": "Brand",
      name: "Tragami",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "79",
      highPrice: "279",
      offerCount: "3",
      offers: LTD_PLANS.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.ltdPrice.toString(),
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: `Lifetime license for ${plan.entries} monthly entries and ${plan.channels}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* TOP ANNOUNCEMENT BANNER */}
        <aside aria-label="Announcement" className="w-full bg-[#2563EB] text-white py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide">
          <span className="font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full mr-2">
            Limited Lifetime Offer
          </span>
          Pay once, use forever. No monthly subscriptions. Unconditional 60-day money-back guarantee.
        </aside>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2f8] via-[#f1f6fa] to-white pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563EB]/25 bg-[#2563EB]/10 whitespace-nowrap mb-6">
              <Zap className="w-4 h-4 text-[#2563EB]" />
              <span className="font-inter text-xs sm:text-sm font-semibold tracking-wide text-[#2563EB] uppercase">
                One-Time Payment · Lifetime Access
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-onest text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-tight">
              Get Lifetime Access to the{" "}
              <span className="font-playfair italic font-semibold text-[#2563EB]">
                Complete Tragami Suite
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto font-inter text-base sm:text-lg text-[#111827]/75 leading-relaxed">
              Stop paying recurring monthly fees for separate giveaway tools and attribution trackers.
              Get the complete <strong>One App</strong> solution combining high-converting custom giveaway forms
              with granular partner and QR code attribution for life.
            </p>

            {/* Quick Guarantees Row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-[#111827]/70">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>One-time payment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Both apps included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>60-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Future core updates included</span>
              </div>
            </div>
          </div>
        </section>

        {/* BRIEF BREAKDOWN OF BOTH APPS */}
        <section className="py-12 lg:py-16 bg-[#F7FDFF] border-y border-[#2563EB]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                Two Powerful Apps · One Lifetime License
              </span>
              <h2 className="mt-2 font-onest text-2xl sm:text-3xl font-bold text-[#111827]">
                Everything You Need to Run & Measure Giveaways
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* App 1: Conversion Giveaways */}
              <div className="rounded-3xl border border-[#2563EB]/15 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                    <FormInput className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-onest text-xl font-bold text-[#111827]">
                      1. Conversion Giveaways
                    </h3>
                    <p className="text-xs text-[#2563EB] font-medium">Interactive Form & Lead Capture Engine</p>
                  </div>
                </div>
                <p className="font-inter text-sm text-[#111827]/75 leading-relaxed mb-5">
                  Design beautiful, mobile-first giveaway pages with flexible drag-and-drop fields, conditional branch logic, and automated fraud prevention.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm font-inter text-[#111827]/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Unlimited customizable forms with standard field rules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>On-exit popups, page-level & geo-targeting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated coupon delivery & instant lead CSV exports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Random draw & tiered winner selection built-in</span>
                  </li>
                </ul>
              </div>

              {/* App 2: Channel Giveaways */}
              <div className="rounded-3xl border border-[#2563EB]/15 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                    <Route className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-onest text-xl font-bold text-[#111827]">
                      2. Channel Giveaways
                    </h3>
                    <p className="text-xs text-[#2563EB] font-medium">Partner & Multi-Touch Attribution Engine</p>
                  </div>
                </div>
                <p className="font-inter text-sm text-[#111827]/75 leading-relaxed mb-5">
                  Know exactly which store, influencer, distributor, or link drove every participant. Track ROI with first-touch and multi-touch precision.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm font-inter text-[#111827]/80">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant unique tracking links & scannable QR codes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>First-touch and multi-touch conversion attribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Live partner leaderboards & performance scorecards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Frictionless & secure partner portal access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3-TIER PRICING CARDS */}
        <section id="pricing" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
              Choose Your One-Time License
            </span>
            <h2 className="mt-2 font-onest text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
              Simple, Transparent Lifetime Tiers
            </h2>
            <p className="mt-3 font-inter text-base text-[#111827]/70">
              Select the volume that matches your business. Every tier grants lifetime access with zero monthly recurring charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {LTD_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col justify-between rounded-[32px] p-8 sm:p-9 transition-all duration-300",
                  plan.isPopular
                    ? "border-2 border-[#2563EB] bg-white shadow-[0_20px_50px_-10px_rgba(37,99,235,0.22)] scale-102 lg:-translate-y-2"
                    : "border border-[#2563EB]/15 bg-white shadow-sm hover:shadow-md"
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-[#2563EB] px-4 py-1 text-xs font-bold text-white tracking-wide uppercase shadow-sm">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-onest text-2xl font-bold text-[#111827]">{plan.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700">
                      Lifetime Deal
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-onest text-5xl font-bold tracking-tight text-[#111827]">
                      ${plan.ltdPrice}
                    </span>
                    <span className="font-inter text-sm font-semibold text-[#111827]/60">one-time</span>
                    <span className="ml-auto text-xs font-medium line-through text-[#111827]/40">
                      {plan.originalPrice}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-inter text-emerald-600 font-semibold">
                    Pay once, yours forever · No recurring bills
                  </p>

                  <div className="my-6 border-t border-[#111827]/10" />

                  {/* Key Metrics Pill Badges */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-xs font-inter py-1 px-3 rounded-lg bg-[#F7FDFF] border border-[#2563EB]/10">
                      <span className="text-[#111827]/70">Monthly Entries</span>
                      <strong className="font-bold text-[#2563EB]">{plan.entries} / mo</strong>
                    </div>
                    <div className="flex items-center justify-between text-xs font-inter py-1 px-3 rounded-lg bg-[#F7FDFF] border border-[#2563EB]/10">
                      <span className="text-[#111827]/70">Tracked Channels</span>
                      <strong className="font-semibold text-[#111827]">{plan.channels}</strong>
                    </div>
                    <div className="flex items-center justify-between text-xs font-inter py-1 px-3 rounded-lg bg-[#F7FDFF] border border-[#2563EB]/10">
                      <span className="text-[#111827]/70">Team Access</span>
                      <strong className="font-semibold text-[#111827]">{plan.team}</strong>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    {plan.highlights.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm font-inter text-[#111827]/85">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#111827]/10">
                  <a
                    href="#checkout"
                    className={cn(
                      "flex w-full items-center justify-center gap-2 rounded-full py-3.5 px-6 font-inter text-sm font-bold tracking-wide transition-all shadow-sm",
                      plan.isPopular
                        ? "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-[0_6px_20px_rgba(37,99,235,0.3)]"
                        : "bg-[#111827] text-white hover:bg-black"
                    )}
                  >
                    <span>Get Lifetime Access</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="mt-2 text-center text-[11px] text-[#111827]/50 font-inter">
                    Instant dashboard activation · 60-day refund window
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FULL 34-FEATURE DETAILED COMPARISON TABLE */}
        <section className="py-16 bg-[#F7FDFF] border-t border-[#2563EB]/15">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="font-onest text-2xl sm:text-3xl font-bold text-[#111827]">
                  Detailed Feature Comparison
                </h2>
                <p className="mt-1 text-sm font-inter text-[#111827]/65">
                  Review every capability and specification across Tier 1, Tier 2, and Tier 3.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowTable(!showTable)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/25 bg-white text-xs font-semibold text-[#2563EB] hover:bg-[#2563EB]/5 transition-colors cursor-pointer"
              >
                <span>{showTable ? "Collapse Table" : "Expand Table"}</span>
                {showTable ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <AnimatePresence>
              {showTable && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-x-auto rounded-3xl border border-[#2563EB]/15 bg-white shadow-sm"
                >
                  <table className="w-full text-left border-collapse text-sm font-inter">
                    <thead>
                      <tr className="border-b border-[#2563EB]/15 bg-[#f8fbfe]">
                        <th className="py-4 px-6 font-onest text-base font-bold text-[#111827] min-w-[280px]">
                          Feature
                        </th>
                        <th className="py-4 px-5 font-onest text-base font-bold text-[#111827] text-center min-w-[140px]">
                          Tier 1 ($79)
                        </th>
                        <th className="py-4 px-5 font-onest text-base font-bold text-[#2563EB] text-center min-w-[140px] bg-[#2563EB]/5">
                          Tier 2 ($189)
                        </th>
                        <th className="py-4 px-5 font-onest text-base font-bold text-[#111827] text-center min-w-[140px]">
                          Tier 3 ($279)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#111827]/[0.06]">
                      {TABLE_FEATURES.map((row, idx) => (
                        <tr
                          key={row.name}
                          className={cn(
                            "hover:bg-[#f8fafc] transition-colors",
                            idx < 3 ? "bg-[#2563EB]/[0.02] font-semibold" : ""
                          )}
                        >
                          <td className="py-3.5 px-6 text-[#111827] font-medium">
                            {row.name}
                          </td>
                          <td className="py-3.5 px-5 text-center text-[#111827]/80">
                            {renderCell(row.t1)}
                          </td>
                          <td className="py-3.5 px-5 text-center font-semibold text-[#111827] bg-[#2563EB]/5">
                            {renderCell(row.t2)}
                          </td>
                          <td className="py-3.5 px-5 text-center text-[#111827]/80">
                            {renderCell(row.t3)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* LIFETIME DEAL FAQS */}
        <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
              Got Questions?
            </span>
            <h2 className="mt-2 font-onest text-3xl sm:text-4xl font-bold text-[#111827]">
              Lifetime Deal FAQ
            </h2>
            <p className="mt-2 text-sm font-inter text-[#111827]/60">
              Clear answers about licensing, stacking, limits, and future updates.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={cn(
                    "rounded-2xl border bg-white transition-all duration-200",
                    isOpen
                      ? "border-[#2563EB]/30 shadow-sm"
                      : "border-[#111827]/10"
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left cursor-pointer"
                  >
                    <span className="font-onest text-base sm:text-lg font-semibold text-[#111827]">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-[#2563EB]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#111827]/50" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 font-inter text-sm sm:text-base leading-relaxed text-[#111827]/75">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL GUARANTEE & CHECKOUT BAND */}
        <section className="py-16 bg-[#111827] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h2 className="font-onest text-3xl sm:text-4xl font-bold tracking-tight">
              Risk-Free 60-Day Money-Back Guarantee
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Try Tragami for a full 60 days. Run unlimited campaigns, track custom QR codes, attribute partner leads, and export verified entries. If you are not completely thrilled, get a 100% refund with no hassle.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#pricing"
                className="px-8 py-4 rounded-full bg-[#2563EB] text-white font-bold text-sm tracking-wide hover:bg-[#1d4ed8] shadow-[0_6px_25px_rgba(37,99,235,0.4)] transition-all"
              >
                Claim Your Lifetime License Now
              </a>
            </div>

            <p className="mt-4 text-xs text-white/50">
              One-time payment · Instant access · No subscription required
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <CTAWithFooter01Finsyc hideCta />
      </div>
    </>
  );
}

function renderCell(val: string) {
  if (val === "✓") {
    return (
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
        ✓
      </span>
    );
  }
  if (val === "—") {
    return <span className="text-[#111827]/30 font-medium">—</span>;
  }
  if (val === "Upcoming") {
    return (
      <span className="inline-block text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
        Upcoming
      </span>
    );
  }
  return <span>{val}</span>;
}

