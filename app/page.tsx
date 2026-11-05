"use client";

import { Lightbulb, Link2, Users, ShieldCheck, BarChart3, Webhook, FormInput, GitMerge, Inbox } from "lucide-react";
import Header01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/Header 01 Finsyc";
import ProductOverview from "@/components/templates/finance-management-landing-page-finsyc/Feature 01 Finsyc";
import FeatureSection from "@/components/templates/finance-management-landing-page-finsyc/Why Choose us 01 Finsyc";
import HowItWorks01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/How it Works 01 Finsyc";
import UseCases from "@/components/templates/finance-management-landing-page-finsyc/Metrics with logo 01 Finsyc";
import FeatureGrid from "@/components/templates/finance-management-landing-page-finsyc/Feature Grid Gamiflow";
import PricingFinsyc from "@/components/templates/finance-management-landing-page-finsyc/Pricing Finsyc";
import Faq from "@/components/templates/finance-management-landing-page-finsyc/FAQ Gamiflow";
import CTA01VelaraTragami from "@/components/CTA01VelaraTragami";
import CTAWithFooter01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/CTA with Footer 01 Finsyc";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header01Finsyc />
      <ProductOverview />

      <FeatureSection
        id="conversion"
        badge="Conversion Giveaways"
        heading={
          <>
            Launch Giveaways That Do <i className="text-[rgba(0,0,0,0.40)]">More</i> Than Collect Entries
          </>
        }
        description="Build a focused campaign experience that makes it easy for people to participate while giving your business a structured way to capture and manage leads."
        ctaLabel="View Plans"
        ctaHref="#pricing"
        items={[
          {
            title: "Custom Campaign Forms",
            description:
              "Build entry forms using configurable fields and conditional logic. Collect the information relevant to each promotion without forcing every participant through the same experience.",
            icon: FormInput,
          },
          {
            title: "Lead Capture",
            description:
              "Collect contact information and custom responses in one place. Keep campaign submissions organized and ready for export or integration.",
            icon: Users,
          },
          {
            title: "Entry Validation",
            description:
              "Use available validation and bot-protection mechanisms to help reduce invalid and automated submissions.",
            icon: ShieldCheck,
          },
          {
            title: "Campaign Reporting",
            description:
              "Monitor participation and submission activity to understand how your giveaway is performing.",
            icon: BarChart3,
          },
          {
            title: "Connected Workflows",
            description:
              "Send submission data to supported external systems using webhooks, allowing your existing business workflows to process new entries.",
            icon: Webhook,
          },
        ]}
      />

      <FeatureSection
        id="channel"
        reverse
        className="bg-[#F7FDFF]"
        badge="Channel Giveaways"
        heading={
          <>
            Every Channel Has a Story. Know Which One <i className="text-[rgba(0,0,0,0.40)]">Performs.</i>
          </>
        }
        description="Distribute giveaway campaigns through partners, stores, influencers, and referral links. Tragami connects captured entries with their recorded source, helping you compare channel participation and make more informed campaign decisions."
        ctaLabel="View Plans"
        ctaHref="#pricing"
        items={[
          {
            title: "Trackable Links",
            description: "Create unique tracking links for different partners, locations, and campaigns.",
            icon: Link2,
          },
          {
            title: "Source Attribution",
            description:
              "Associate eligible submissions with the campaign, referral link, or source that generated them.",
            icon: GitMerge,
          },
          {
            title: "Partner Performance",
            description: "Compare entry volume and participation across tracked channels.",
            icon: BarChart3,
          },
          {
            title: "Centralized Lead Capture",
            description: "Keep campaign responses and their available attribution information together.",
            icon: Inbox,
          },
          {
            title: "Campaign Insights",
            description:
              "Understand which sources generate the most entries and identify where additional campaign effort may be worthwhile.",
            icon: Lightbulb,
          },
        ]}
      />

      <HowItWorks01Finsyc />
      <UseCases />
      <FeatureGrid />
      <PricingFinsyc />
      <Faq />
      <CTA01VelaraTragami />
      <CTAWithFooter01Finsyc hideCta />
    </main>
  );
}
