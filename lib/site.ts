/**
 * Single source of truth for site-wide links. Every page, the nav and the
 * footer read from here, so a route or CTA target only changes in one place.
 */

/** Where "Start free" style CTAs go. Point this at your app's sign-up URL when it exists. */
export const SIGNUP_HREF = "/pricing";

/** The two product pages the homepage and nav point at. */
export const CONVERSION_HREF = "/conversion-giveaways";
export const CHANNEL_HREF = "/channel-giveaways";
export const LOGIN_HREF = "#";

export type NavLink = { label: string; href: string; soon?: boolean };
export type NavGroup = { label?: string; links: NavLink[] };

export const PRODUCT_GROUPS: NavGroup[] = [
  {
    links: [
      { label: "Conversion Giveaways", href: CONVERSION_HREF },
      { label: "Channel Giveaways", href: CHANNEL_HREF },
    ],
  },
];

export const USE_CASE_LINKS: NavLink[] = [
  { label: "Influencer Campaigns", href: "/use-cases/influencer-campaigns" },
  { label: "OEM & Channel Marketing", href: "/use-cases/oem-channel-marketing" },
  { label: "Retail & In-Store", href: "/use-cases/retail-in-store" },
  { label: "Multi-Location Marketing", href: "/use-cases/multi-location" },
  { label: "Agencies", href: "/use-cases/agencies" },
  { label: "Product Launches", href: "/use-cases/product-launches", soon: true },
  { label: "Events & Experiential", href: "/use-cases/events", soon: true },
  { label: "B2B Events", href: "/use-cases/b2b-events" },
  { label: "Community & Audience Growth", href: "/use-cases/audience-growth", soon: true },
];

export const PLATFORM_LINKS: NavLink[] = [
  { label: "Lead Capture", href: "/platform/lead-capture" },
  { label: "Attribution Engine", href: "/platform/attribution" },
];

export const FOOTER_COLUMNS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Products",
    links: [
      { label: "Conversion Giveaways", href: CONVERSION_HREF },
      { label: "Channel Giveaways", href: CHANNEL_HREF },
    ],
  },
  {
    heading: "Platform",
    links: PLATFORM_LINKS,
  },
  {
    heading: "Use Cases",
    links: USE_CASE_LINKS.slice(0, 7),
  },
  {
    heading: "Resources",
    links: [
      { label: "Resource Center", href: "/resources" },
      { label: "Campaign Guides", href: "/resources" },
      { label: "Pricing & Plans", href: "/pricing" },
      { label: "Frequently Asked Questions", href: "/#faq" },
    ],
  },
];

export const BRAND_BLURB =
  "A campaign and attribution platform for brands. Create campaigns, capture first-party data, and know where every lead came from.";
