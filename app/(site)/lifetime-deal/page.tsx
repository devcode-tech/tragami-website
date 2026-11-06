import type { Metadata } from "next";
import LifetimeDealClient from "./LifetimeDealClient";

export const metadata: Metadata = {
  title: "Lifetime Deal | Tragami - All-In-One Giveaway & Attribution Suite",
  description:
    "Exclusive one-time payment lifetime access to Tragami. Get both Conversion Giveaways and Channel Giveaways with unlimited forms, trackable channels, and multi-touch attribution.",
  robots: {
    index: false, // kept separated and unindexed until officially connected
    follow: false,
  },
  other: {
    "ai-content-declaration": "SaaS Platform, Lifetime Deal Pricing, Marketing Technology",
    "ai-ready": "true",
  },
};

export default function LifetimeDealPage() {
  return <LifetimeDealClient />;
}

