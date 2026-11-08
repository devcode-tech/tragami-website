import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Tragami",
  description:
    "Learn how Tragami collects, uses, and protects your personal data. Our Privacy Policy covers data security, third-party providers, your rights, and how to contact us.",
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <>
        <p className="mb-4 text-[#374151] leading-relaxed">
          We collect information that identifies, relates to, describes,
          references, or can be linked to a particular consumer or device
          ("Personal Data"). We collect the following categories of information:
        </p>
        <ul className="space-y-3">
          {[
            {
              label: "Account & Profile Data",
              text: "Names, email addresses, and phone numbers provided during registration.",
            },
            {
              label: "Transaction & Payment Data",
              text: "Payment details and billing addresses processed securely via third-party processors (AppSumo and Dodo Payments). Note: We do not store your complete credit card or banking numbers on our servers.",
            },
            {
              label: "Technical & Device Data",
              text: "IP addresses, browser information, operating system, device data, and timestamps collected automatically through our infrastructure and custom analytics.",
            },
            {
              label: "Usage & Location Data",
              text: "General location data (such as country/region inferred from IP) and interactions with our application.",
            },
          ].map((item) => (
            <li key={item.label} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4b3cf0]" />
              <span className="text-[#374151] leading-relaxed">
                <strong className="font-semibold text-[#111827]">
                  {item.label}:
                </strong>{" "}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="mb-4 text-[#374151] leading-relaxed">
          We use the information we collect to:
        </p>
        <ul className="space-y-3">
          {[
            "Create and manage your password-based user account.",
            "Process transactions, manage subscriptions, and handle lifetime deal licenses.",
            "Provide, maintain, improve, and secure our software and services.",
            "Send administrative emails, password resets, product updates, and transactional notices via Resend/AWS SES.",
            "Monitor and analyze trends, usage, and activities to prevent bots, abuse, and system over-usage.",
            "Comply with legal obligations and enforce our governing laws.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4b3cf0]" />
              <span className="text-[#374151] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    title: "3. Third-Party Service Providers",
    content: (
      <>
        <p className="mb-4 text-[#374151] leading-relaxed">
          We share data with trusted third-party service providers who assist us
          in operating our platform:
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Hosting & Infrastructure",
              text: "Vercel, Supabase, and Cloudflare (for application hosting, databases, edge security, and CDN services).",
            },
            {
              label: "Payment Processors",
              text: "AppSumo and Dodo Payments (to process purchases and subscriptions securely).",
            },
            {
              label: "Email Communication",
              text: "Resend and AWS SES (to deliver transactional and service emails).",
            },
            {
              label: "Analytics",
              text: "Our own internal analytics tools (to monitor service performance without relying on external ad-trackers).",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#e5e7eb] bg-white/60 px-5 py-4"
            >
              <p className="font-semibold text-[#111827] mb-1">{item.label}</p>
              <p className="text-[#374151] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: (
      <p className="text-[#374151] leading-relaxed">
        We implement appropriate technical and organizational security measures
        designed to protect your personal data against accidental loss,
        unauthorized access, destruction, or alteration. However, please note
        that no electronic transmission over the internet or information storage
        technology can be guaranteed 100% secure.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: (
      <p className="text-[#374151] leading-relaxed">
        We retain your personal data only for as long as is necessary for the
        purposes set out in this Privacy Policy, or as required to comply with
        our legal obligations, resolve disputes, and enforce our agreements.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "6. Your Data Protection Rights",
    content: (
      <>
        <p className="mb-4 text-[#374151] leading-relaxed">
          Depending on your global jurisdiction, you may have rights regarding
          your personal data, including:
        </p>
        <ul className="space-y-3">
          {[
            {
              label: "Access & Correction",
              text: "The right to access or correct your account information.",
            },
            {
              label: "Deletion",
              text: "The right to request the deletion of your account and personal data.",
            },
            {
              label: "Opt-Out",
              text: "The right to opt-out of marketing communications.",
            },
          ].map((item) => (
            <li key={item.label} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4b3cf0]" />
              <span className="text-[#374151] leading-relaxed">
                <strong className="font-semibold text-[#111827]">
                  {item.label}:
                </strong>{" "}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "7. Children's Privacy",
    content: (
      <p className="text-[#374151] leading-relaxed">
        Our services do not address anyone under the age of 18 ("Children"). We
        do not knowingly collect personally identifiable information from
        children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "8. Changes to This Privacy Policy",
    content: (
      <p className="text-[#374151] leading-relaxed">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the "Last Updated" date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: (
      <>
        <p className="mb-4 text-[#374151] leading-relaxed">
          If you have questions or comments about this Privacy Policy, please
          contact us at:
        </p>
        <div className="rounded-xl border border-[#e5e7eb] bg-white/60 px-6 py-5 space-y-2">
          <p className="text-[#374151]">
            <strong className="font-semibold text-[#111827]">Email:</strong>{" "}
            <a
              href="mailto:support@tragami.com"
              className="text-[#4b3cf0] hover:underline"
            >
              support@tragami.com
            </a>
          </p>
          <p className="text-[#374151]">
            <strong className="font-semibold text-[#111827]">Address:</strong>{" "}
            19 Pannai Sankariyer Nagar, Ambasamudram, 627401, India
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f9f9f8]">
        {/* Hero */}
        <div className="relative overflow-hidden bg-white border-b border-[#e5e7eb]">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(75,60,240,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-3xl px-6 pt-28 pb-16 text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-medium text-[#6b7280]">
              Last Updated: November 8, 2026
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#6b7280] max-w-xl mx-auto">
              We respect your privacy and are committed to protecting your
              personal data. This policy explains how Tragami collects, uses,
              and safeguards your information.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-6 py-16">
          {/* Intro paragraph */}
          <div className="mb-12 rounded-2xl border border-[#e5e7eb] bg-white px-8 py-6 text-[#374151] leading-relaxed text-sm">
            Welcome to Tragami ("we," "our," or "us"). Please read this privacy
            policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the site or use our services.
          </div>

          {/* Table of contents */}
          <nav className="mb-14 rounded-2xl border border-[#e5e7eb] bg-white px-8 py-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#9ca3af]">
              Contents
            </p>
            <ol className="space-y-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-[#4b3cf0] hover:underline"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-14">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="mb-5 text-xl font-semibold text-[#111827]">
                  {s.title}
                </h2>
                {s.content}
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

