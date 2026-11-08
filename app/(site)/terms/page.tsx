import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tragami",
  description:
    "Read Tragami's Terms & Conditions covering account registration, pricing, subscriptions, refund policy, acceptable use, intellectual property, and governing law.",
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    id: "accounts",
    title: "1. Accounts & Registration",
    content: (
      <div className="space-y-4">
        {[
          {
            label: "Account Security",
            text: "To use Tragami, you must register using an email and password. You are solely responsible for maintaining the confidentiality of your password and account credentials.",
          },
          {
            label: "User Restrictions",
            text: "There are no specific age restrictions to use our service, provided you can form a legally binding contract.",
          },
          {
            label: "Bot & Abuse Prevention",
            text: "The use of automated scripts, crawlers, or bots to interact with or scrape Tragami is strictly prohibited.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-[#e5e7eb] bg-white/60 px-5 py-4"
          >
            <p className="font-semibold text-[#111827] mb-1">{item.label}</p>
            <p className="text-[#374151] text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "pricing",
    title: "2. Pricing, Subscriptions & Purchases",
    content: (
      <div className="space-y-4">
        {[
          {
            label: "Payment Models",
            text: "Tragami offers both one-time purchase options (such as lifetime deals) and recurring subscription plans (Monthly/Yearly).",
          },
          {
            label: "Billing Authorization",
            text: "By providing a payment method, you authorize AppSumo, Dodo Payments, or our billing gateways to charge you for the applicable fees.",
          },
          {
            label: "Taxes",
            text: "You are responsible for any applicable local, state, federal, or international taxes associated with your purchase.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-[#e5e7eb] bg-white/60 px-5 py-4"
          >
            <p className="font-semibold text-[#111827] mb-1">{item.label}</p>
            <p className="text-[#374151] text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "refund",
    title: "3. Refund & Cancellation Policy",
    content: (
      <div className="space-y-4">
        {[
          {
            label: "AppSumo / Lifetime Deals",
            text: "For purchases made through AppSumo or special lifetime promotions, refund requests must be handled directly through the respective platform (AppSumo's refund policy applies).",
          },
          {
            label: "Direct Purchases & Subscriptions",
            text: "For normal plans purchased directly through our platform, we offer a 7-day refund policy starting from the initial date of purchase or upgrade.",
          },
          {
            label: "Subscription Cancellations",
            text: "You may cancel your monthly or yearly subscription at any time through your account dashboard. Cancellations will take effect at the end of your current billing cycle.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-[#e5e7eb] bg-white/60 px-5 py-4"
          >
            <p className="font-semibold text-[#111827] mb-1">{item.label}</p>
            <p className="text-[#374151] text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use & Prohibited Conduct",
    content: (
      <>
        <p className="mb-4 text-[#374151] leading-relaxed">
          You agree not to use Tragami to:
        </p>
        <ul className="space-y-3">
          {[
            "Violate any local, national, or international laws or regulations.",
            "Transmit any malicious code, viruses, worms, or trojan horses.",
            "Overload, flood, or engage in activities that cause overusage or degradation of our servers, infrastructure (Vercel, Supabase, Cloudflare), or network performance.",
            "Attempt to gain unauthorized access to other user accounts, databases, or systems.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0492f]" />
              <span className="text-[#374151] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    title: "5. Account Termination & Suspension",
    content: (
      <>
        <p className="mb-4 text-[#374151] leading-relaxed">
          We reserve the right to suspend or terminate your account and access
          to Tragami immediately, without prior notice or liability, under our
          sole discretion, for any reason whatsoever, including but not limited
          to:
        </p>
        <ul className="space-y-3">
          {[
            "Breach or violation of these Terms and Conditions.",
            "Excessive resource consumption, overusage, or detection of malicious bots.",
            "Fraudulent payment activities or chargeback disputes.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0492f]" />
              <span className="text-[#374151] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    title: "6. Intellectual Property",
    content: (
      <p className="text-[#374151] leading-relaxed">
        All content, features, software code, branding, and functionality on
        Tragami are the exclusive property of Tragami and its licensors. Our
        software is licensed, not sold, to you strictly for your internal
        business or personal use under the terms of your active subscription or
        license.
      </p>
    ),
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: (
      <p className="text-[#374151] leading-relaxed">
        To the maximum extent permitted by applicable law, Tragami (operated as
        a Sole Proprietorship) shall not be liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of profits or
        revenues, whether incurred directly or indirectly, resulting from your
        use or inability to use our services.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "8. Governing Law and Jurisdiction",
    content: (
      <p className="text-[#374151] leading-relaxed">
        These Terms shall be governed by and construed in accordance with the
        laws of India, without regard to its conflict of law provisions. Any
        legal action or proceeding arising out of these Terms shall be brought
        exclusively in the courts located in India.
      </p>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to Terms",
    content: (
      <p className="text-[#374151] leading-relaxed">
        We reserve the right to modify or replace these Terms at any time at our
        sole discretion. We will indicate the date of the latest revisions at
        the top of this page. Your continued use of the platform after any
        changes constitutes acceptance of those changes.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Information",
    content: (
      <>
        <p className="mb-4 text-[#374151] leading-relaxed">
          If you have any questions about these Terms & Conditions, please
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

export default function TermsPage() {
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
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(240,73,47,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-3xl px-6 pt-28 pb-16 text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-medium text-[#6b7280]">
              Last Updated: November 8, 2026
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#6b7280] max-w-xl mx-auto">
              These Terms govern your access to and use of Tragami's website,
              software applications, and services. By registering or making a
              purchase, you agree to be bound by these Terms.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-6 py-16">
          {/* Intro */}
          <div className="mb-12 rounded-2xl border border-[#e5e7eb] bg-white px-8 py-6 text-[#374151] leading-relaxed text-sm">
            Welcome to Tragami ("we," "our," or "us"). These Terms & Conditions
            ("Terms") govern your access to and use of{" "}
            <a
              href="https://www.tragami.com/"
              className="text-[#4b3cf0] hover:underline"
            >
              https://www.tragami.com/
            </a>{" "}
            and our software applications and services. If you disagree with any
            part of these Terms, you may not access our services.
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

