import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteNav } from "@/components/site/SiteNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tragami.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Tragami | Giveaway Campaign & Lead Attribution Platform",
    template: "%s | Tragami",
  },
  description:
    "Run giveaways you can measure. Tragami empowers brands and agencies to capture verified first-party leads, launch interactive promotions, and attribute performance across influencers, retail QR codes, and partner channels.",
  keywords: [
    "giveaway platform",
    "lead capture software",
    "channel attribution",
    "first-party data collection",
    "sweepstakes platform",
    "conversion giveaways",
    "channel giveaways",
    "retail QR campaigns",
    "influencer contest tracking",
    "multi-location attribution",
    "marketing ROI tracking",
  ],
  alternates: {
    canonical: BASE,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Tragami | Giveaway Campaign & Lead Attribution Platform",
    description:
      "Run giveaways you can measure. Capture verified first-party leads and know exactly which influencer, partner, or store drove each entry.",
    url: BASE,
    siteName: "Tragami",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE}/logo.svg`,
        width: 800,
        height: 600,
        alt: "Tragami - Campaign & Attribution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tragami | Giveaway Campaign & Lead Attribution Platform",
    description:
      "Run giveaways you can measure. Capture verified first-party leads and know exactly which partner drove each entry.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US",
    "geo.placename": "Global",
    "ai-content-declaration": "SaaS Platform, Marketing Technology",
  },
};

const jsonLdGlobalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}#organization`,
      name: "Tragami",
      url: BASE,
      logo: `${BASE}/logo.svg`,
      description:
        "Tragami is a giveaway campaign and attribution platform helping brands and agencies capture first-party leads and track multi-channel campaign ROI.",
      sameAs: [
        "https://twitter.com/tragami",
        "https://linkedin.com/company/tragami",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}#website`,
      url: BASE,
      name: "Tragami",
      description: "Giveaway Campaign & Lead Attribution Platform",
      publisher: {
        "@id": `${BASE}#organization`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE}#software`,
      name: "Tragami Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "0",
        highPrice: "499",
        offerCount: "6",
      },
      featureList: [
        "Conversion Giveaways with custom entry forms and logic",
        "Channel Giveaways with trackable links and QR codes",
        "Source and partner multi-touch attribution",
        "Automated bot validation and submission fraud checks",
        "Centralized lead capture and webhook syncing",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How is Tragami different from a standard giveaway tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A giveaway tool stops at the email address. Tragami captures the entry, validates the participant, and accurately attributes which channel, store, or influencer drove the submission.",
          },
        },
        {
          "@type": "Question",
          name: "Do participants need to download an application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Everything runs directly in any modern mobile or desktop browser via trackable links or scannable QR codes with zero app installation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track partner and influencer performance in real time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tragami generates unique tracking links and QR codes for every partner, displaying live conversion scorecards and submission leaderboards.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-PK6MPMQF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGlobalSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
