import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import type { PageData, Section } from "@/content/types";
import { Badge } from "@/components/site/Badge";
import { BlockView } from "@/components/site/Blocks";
import { CtaLink } from "@/components/site/CtaLink";
import { Rich } from "@/components/site/Rich";
import { ArtPlaceholder } from "@/components/site/ArtPlaceholder";
import { accentFor } from "@/lib/category";
import { cn } from "@/lib/utils";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tragami.com";

/**
 * Enhanced SEO metadata generator for all detailed pages:
 * Generates canonicals, category-tailored keywords, OpenGraph tags,
 * Twitter cards, and Googlebot search indexing directives.
 */
export function pageMetadata(page: PageData): Metadata {
  const fullTitle = page.title.includes("Tragami") ? page.title : `${page.title} | Tragami`;
  const canonicalUrl = `${BASE_URL}${page.route === "/" ? "" : page.route}`;

  const baseKeywords = [
    "giveaway platform",
    "lead capture promotions",
    "channel attribution",
    "first-party data collection",
    "sweepstakes software",
    "Tragami",
  ];

  let routeKeywords: string[] = [];
  if (page.route.startsWith("/use-cases")) {
    routeKeywords = [
      "customer acquisition use case",
      "viral giveaway campaign",
      "influencer contest attribution",
      "retail QR promotions",
      "agency marketing tools",
      "multi-location attribution",
    ];
  } else if (page.route.startsWith("/platform")) {
    routeKeywords = [
      "lead verification",
      "multi-touch attribution",
      "data privacy GDPR",
      "CRM webhook sync",
      "fraud prevention",
      "contact qualification",
    ];
  } else if (page.route.includes("conversion")) {
    routeKeywords = [
      "on-site lead capture",
      "conversion rate optimization",
      "gamified lead forms",
      "sweepstakes entry conversion",
    ];
  } else if (page.route.includes("channel")) {
    routeKeywords = [
      "partner attribution",
      "QR code campaigns",
      "influencer tracking links",
      "dealer network promotions",
    ];
  } else if (page.route.includes("pricing")) {
    routeKeywords = [
      "giveaway software pricing",
      "transparent SaaS plans",
      "campaign attribution costs",
      "annual discount plans",
    ];
  }

  const allKeywords = [...baseKeywords, ...routeKeywords].join(", ");

  return {
    title: fullTitle,
    description: page.description,
    keywords: allKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: canonicalUrl,
      siteName: "Tragami",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/logo.svg`,
          width: 800,
          height: 600,
          alt: `${fullTitle} - Tragami`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      creator: "@tragami",
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
  };
}

/**
 * JSON-LD Structured Data for Google Rich Snippets & Breadcrumb Navigation
 */
export function JsonLdSchema({ page }: { page: PageData }) {
  const canonicalUrl = `${BASE_URL}${page.route === "/" ? "" : page.route}`;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: page.hero.crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.label,
      item: crumb.href ? `${BASE_URL}${crumb.href === "/" ? "" : crumb.href}` : canonicalUrl,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Tragami",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Tragami",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.svg`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}

/**
 * Modernized hero matching the Finsyc design system:
 * Light airy gradient, Onest typography, Sparkles pill badge,
 * and high-fidelity interactive dashboard mockup.
 */
export function HeroView({ page }: { page: PageData }) {
  const { hero } = page;
  const accent = accentFor(page.route);

  return (
    <header className="relative overflow-hidden border-b border-[#2563EB]/10 bg-white">
      {/* Background Video on the right behind the dashboard, starting from top: 0 */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-full md:w-[55%] lg:w-[50%] overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://raw.githubusercontent.com/devwithprem/bgvid/3ad3070e508368ab30f00fe7be5b19cd5fe7d078/internalbgvid.mp4"
            type="video/mp4"
          />
        </video>
        {/* Layer of blur on the top of the video */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20 lg:py-24">
        <div>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs">
            <ol className="flex flex-wrap items-center gap-1.5">
              {hero.crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden="true" className="text-gray-300">/</span>}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="rounded-full px-2.5 py-1 text-gray-500 font-medium transition-colors hover:bg-white hover:text-[#2563EB] shadow-xs"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={i === hero.crumbs.length - 1 ? "page" : undefined}
                      className="rounded-full bg-white/90 border border-[#2563EB]/15 px-2.5 py-1 font-semibold text-[#2563EB]"
                    >
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Eyebrow Badge */}
          <div className="mt-6">
            <Badge tone="light">{hero.eyebrow}</Badge>
          </div>

          {/* Main Title */}
          <h1 className="mt-5 font-onest text-4xl sm:text-5xl lg:text-[54px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#111827]">
            {hero.title}
          </h1>

          {/* Soon Notification */}
          {hero.soon && (
            <div className="mt-6 rounded-2xl border border-[#2563EB]/15 bg-white/80 p-4 backdrop-blur-sm shadow-sm">
              <span className="inline-flex rounded-full bg-[#3779eb]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                {hero.soon}
              </span>
              {hero.subtitle && (
                <p className="mt-2 text-sm leading-relaxed text-gray-600 font-inter">
                  <Rich value={hero.subtitle} />
                </p>
              )}
            </div>
          )}

          {/* Body Description */}
          {hero.body && (
            <p className="mt-5 max-w-xl font-inter text-base sm:text-lg leading-relaxed text-gray-600">
              <Rich value={hero.body} />
            </p>
          )}

          {/* CTAs */}
          {hero.ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {hero.ctas.map((c) => (
                <CtaLink key={c.label} cta={c} />
              ))}
            </div>
          )}
        </div>

        {/* Right Preview Card */}
        <div className="relative">
          <ArtPlaceholder accent={accent} className="relative z-10 hidden aspect-[4/3] w-full md:flex shadow-xl" />
        </div>
      </div>
    </header>
  );
}

export function SectionsView({ sections, accentRoute }: { sections: Section[]; accentRoute: string }) {
  const accent = accentFor(accentRoute);
  return (
    <>
      {sections.map((s, i) => (
        <section
          key={i}
          className={cn(
            "py-16 md:py-24",
            s.tone === "wash" ? "bg-[#F8FBFF] border-y border-[#2563EB]/10" : "bg-white"
          )}
        >
          <div className="mx-auto max-w-6xl space-y-12 px-6">
            {s.blocks.map((b, j) => (
              <BlockView key={j} block={b} accent={accent} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

/**
 * Interconnected internal navigation component:
 * Connects use cases, platform modules, and product engines so visitors
 * and search engines discover related features across the entire site.
 */
function getRelatedPages(currentRoute: string) {
  if (currentRoute.startsWith("/use-cases")) {
    return [
      {
        title: "Marketing Agencies",
        href: "/use-cases/agencies",
        category: "Use Case",
        description: "Run multi-client giveaways with separate brand attribution and transparent reporting.",
      },
      {
        title: "Retail & In-Store",
        href: "/use-cases/retail-in-store",
        category: "Use Case",
        description: "Connect physical store visits to digital CRM records with trackable QR campaigns.",
      },
      {
        title: "Attribution Engine",
        href: "/platform/attribution",
        category: "Platform",
        description: "Track where every entry originated across creators, store QR codes, and digital ads.",
      },
      {
        title: "Lead Capture System",
        href: "/platform/lead-capture",
        category: "Platform",
        description: "Capture verified first-party customer profiles with built-in fraud prevention.",
      },
    ].filter((p) => p.href !== currentRoute).slice(0, 3);
  }

  if (currentRoute.startsWith("/platform")) {
    return [
      {
        title: "Attribution Engine",
        href: "/platform/attribution",
        category: "Platform",
        description: "Multi-channel source tracking across all campaigns, creators, and store locations.",
      },
      {
        title: "Data Quality & Protection",
        href: "/platform/data-quality",
        category: "Platform",
        description: "Automatic bot filtering, phone/email validation, and GDPR compliant consent records.",
      },
      {
        title: "CRM & Tool Integrations",
        href: "/platform/integrations",
        category: "Platform",
        description: "Instant webhooks and direct sync to Klaviyo, HubSpot, Salesforce, and custom endpoints.",
      },
      {
        title: "Conversion Giveaways",
        href: "/conversion-giveaways",
        category: "Product",
        description: "High-converting sweepstakes pages designed for maximum contact acquisition.",
      },
    ].filter((p) => p.href !== currentRoute).slice(0, 3);
  }

  // Default / Product engines
  return [
    {
      title: "Conversion Giveaways",
      href: "/conversion-giveaways",
      category: "Product",
      description: "Interactive on-site campaigns designed to turn anonymous traffic into pipeline.",
    },
    {
      title: "Channel Giveaways",
      href: "/channel-giveaways",
      category: "Product",
      description: "Coordinate partner networks, creators, and retail locations with precise attribution.",
    },
    {
      title: "Transparent Pricing",
      href: "/pricing",
      category: "Plans",
      description: "Straightforward monthly and annual tiers tailored for your exact campaign volume.",
    },
  ].filter((p) => p.href !== currentRoute).slice(0, 3);
}

export function RelatedPagesNavigator({ route }: { route: string }) {
  const related = getRelatedPages(route);
  if (related.length === 0) return null;

  return (
    <section className="bg-[#F8FBFF] border-t border-[#2563EB]/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge tone="light">Interconnected Platform</Badge>
          <h2 className="mt-4 font-onest text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111827]">
            Explore Connected Solutions
          </h2>
          <p className="mt-3 max-w-xl font-inter text-base text-gray-600">
            Tragami modules and use cases interconnect seamlessly so your team can scale campaigns without data silos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col justify-between rounded-[24px] border border-[#2563EB]/15 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#2563EB]/40 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#3779eb]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                    {item.category}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-4 font-onest text-xl font-semibold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 font-inter text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#2563EB]">
                <span>Learn more</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ final, signupHref }: { final: PageData["final"]; signupHref?: string }) {
  return (
    <section className="bg-white px-6 pb-20 pt-6 md:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1e40af] via-[#2563EB] to-[#1d4ed8] px-8 py-16 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.25)] md:py-20 md:px-14">
        {/* Glow pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-onest text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {final.title}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {final.ctas.map((c) => (
              <CtaLink key={c.label} cta={c} dark signupHref={signupHref} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageView({ page }: { page: PageData }) {
  return (
    <>
      <JsonLdSchema page={page} />
      <HeroView page={page} />
      <SectionsView sections={page.sections} accentRoute={page.route} />
      <RelatedPagesNavigator route={page.route} />
      <FinalCta final={page.final} />
    </>
  );
}
