import React from "react";
import { GripVertical, Link2, Download, Webhook, Check, ShieldCheck, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Product UI mockups for the homepage. Everything shown here is sample data
 * (fictional names, example.com emails, round placeholder numbers) so the
 * page demonstrates the product without making any usage claims. Swap any
 * of these for real product screenshots whenever you have them.
 */

export function SampleNote({ className }: { className?: string }) {
  return <p className={cn("text-[11px] text-[#111827]/45", className)}></p>;
}

function Window({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-[#111827]/10 bg-white text-left shadow-[0_8px_32px_rgba(4,39,24,0.08)]",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-[#111827]/[0.07] bg-[#F9FBFB] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#111827]/15" />
        <span className="h-2 w-2 rounded-full bg-[#111827]/15" />
        <span className="h-2 w-2 rounded-full bg-[#111827]/15" />
        <span className="ml-3 text-[11px] font-medium text-[#111827]/55">{title}</span>
      </div>
      {children}
    </div>
  );
}

function Live() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3779eb]/10 px-2 py-0.5 text-[10px] font-medium text-[#3779eb]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#3779eb]" />
      Live
    </span>
  );
}

const SOURCES = [
  { name: "Partner link A", count: 412, pct: 100 },
  { name: "Store QR, location 12", count: 298, pct: 72 },
  { name: "Creator link", count: 241, pct: 58 },
  { name: "Distributor link B", count: 187, pct: 45 },
];

const CONTACTS = [
  { name: "Sam Rivera", email: "s.rivera@example.com", source: "Partner link A" },
  { name: "Jo Patel", email: "j.patel@example.com", source: "Creator link" },
  { name: "Alex Kim", email: "a.kim@example.com", source: "Store QR, location 12" },
];

const BARS = [30, 42, 38, 55, 48, 62, 70, 64, 80, 74, 88, 82, 96, 90];

/** Hero: campaign overview with entry volume, contacts and traffic sources. */
export function DashboardMock({ className }: { className?: string }) {
  return (
    <Window title="Campaigns / Spring Giveaway" className={className}>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h4 className="font-onest text-base font-semibold text-[#111827]">Spring Giveaway</h4>
            <Live />
          </div>
          <span className="hidden text-[11px] text-[#111827]/45 sm:block">Last 14 days</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            ["Entries", "1,284"],
            ["Contacts captured", "1,126"],
            ["Sources tracked", "6"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#111827]/[0.07] bg-[#F9FBFB] p-3">
              <p className="text-[10px] text-[#111827]/55 sm:text-[11px]">{label}</p>
              <p className="mt-1 font-onest text-lg font-semibold text-[#111827] sm:text-xl">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-5">
          <div className="rounded-xl border border-[#111827]/[0.07] p-3 md:col-span-3">
            <p className="text-[11px] font-medium text-[#111827]/70">Entry volume</p>
            <div className="mt-3 flex h-24 items-end gap-1.5">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className={cn("flex-1 rounded-t-[3px]", i === BARS.length - 1 ? "bg-[#3779eb]" : "bg-[#3779eb]/25")}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#111827]/[0.07] p-3 md:col-span-2">
            <p className="text-[11px] font-medium text-[#111827]/70">Traffic sources</p>
            <ul className="mt-3 space-y-2.5">
              {SOURCES.map((s) => (
                <li key={s.name}>
                  <div className="flex items-center justify-between text-[11px] text-[#111827]">
                    <span className="truncate pr-2">{s.name}</span>
                    <span className="tabular-nums text-[#111827]/60">{s.count}</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-[#111827]/[0.06]">
                    <div className="h-full rounded-full bg-[#3779eb]" style={{ width: `${s.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-3 hidden rounded-xl border border-[#111827]/[0.07] sm:block">
          <p className="border-b border-[#111827]/[0.07] px-3 py-2 text-[11px] font-medium text-[#111827]/70">
            Recent contacts
          </p>
          <ul className="divide-y divide-[#111827]/[0.06]">
            {CONTACTS.map((c) => (
              <li key={c.email} className="flex items-center justify-between px-3 py-2 text-[11px]">
                <span className="font-medium text-[#111827]">{c.name}</span>
                <span className="text-[#111827]/55">{c.email}</span>
                <span className="rounded-full bg-[#3779eb]/10 px-2 py-0.5 text-[10px] text-[#3779eb]">{c.source}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Window>
  );
}

/** Conversion card: a campaign form beside a submissions summary. */
export function ConversionMock() {
  return (
    <div className="grid w-full items-center gap-3 sm:grid-cols-5">
      <Window title="Entry form" className="sm:col-span-3">
        <div className="space-y-3 p-4">
          <p className="font-onest text-sm font-semibold text-[#111827]">Enter the giveaway</p>
          {["Full name", "Email address"].map((f) => (
            <div key={f}>
              <p className="text-[10px] text-[#111827]/55">{f}</p>
              <div className="mt-1 h-7 rounded-md border border-[#111827]/10 bg-[#F9FBFB]" />
            </div>
          ))}
          <div>
            <p className="text-[10px] text-[#111827]/55">How did you hear about us?</p>
            <div className="mt-1 flex h-7 items-center justify-between rounded-md border border-[#111827]/10 bg-[#F9FBFB] px-2 text-[10px] text-[#111827]/45">
              Select an option <ChevronDown className="h-3 w-3" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#111827]/60">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-[#3779eb]">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </span>
            I agree to the entry terms
          </div>
          <div className="rounded-full bg-[#2563EB] py-2 text-center text-[11px] font-medium text-white">Submit entry</div>
        </div>
      </Window>

      <Window title="Submissions" className="sm:col-span-2">
        <div className="p-4">
          <p className="text-[10px] text-[#111827]/55">Submissions</p>
          <p className="font-onest text-xl font-semibold text-[#111827]">1,284</p>
          <ul className="mt-3 space-y-2">
            {CONTACTS.map((c) => (
              <li key={c.email} className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3779eb]/10 text-[9px] font-semibold text-[#3779eb]">
                  {c.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[10px] font-medium text-[#111827]">{c.name}</span>
                  <span className="block truncate text-[9px] text-[#111827]/50">{c.email}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Window>
    </div>
  );
}

/** Channel card: campaign summary and entries by source. */
export function ChannelMock() {
  return (
    <Window title="Channel attribution / Spring Giveaway">
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Campaign entries", "1,138"],
            ["Tracked sources", "4"],
            ["Top source", "Partner A"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#111827]/[0.07] bg-[#F9FBFB] p-3">
              <p className="text-[10px] text-[#111827]/55">{label}</p>
              <p className="mt-1 font-onest text-sm font-semibold text-[#111827] sm:text-base">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-[#111827]/[0.07]">
          <div className="grid grid-cols-[1fr_auto_5rem] gap-3 border-b border-[#111827]/[0.07] px-3 py-2 text-[10px] font-medium text-[#111827]/55">
            <span>Source</span>
            <span>Entries</span>
            <span>Share</span>
          </div>
          <ul className="divide-y divide-[#111827]/[0.06]">
            {SOURCES.map((s) => (
              <li key={s.name} className="grid grid-cols-[1fr_auto_5rem] items-center gap-3 px-3 py-2.5 text-[11px]">
                <span className="truncate text-[#111827]">{s.name}</span>
                <span className="tabular-nums text-[#111827]/70">{s.count}</span>
                <span className="h-1.5 rounded-full bg-[#111827]/[0.06]">
                  <span className="block h-full rounded-full bg-[#3779eb]" style={{ width: `${s.pct}%` }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Window>
  );
}

/** How-it-works step 1: building the entry form. */
export function FormBuilderMock() {
  const fields = ["Full name", "Email address", "Favourite product (optional)"];
  return (
    <Window title="Form builder">
      <div className="space-y-2 p-4">
        {fields.map((f) => (
          <div key={f} className="flex items-center gap-2 rounded-lg border border-[#111827]/10 bg-white px-2.5 py-2">
            <GripVertical className="h-3.5 w-3.5 text-[#111827]/30" />
            <span className="text-[11px] text-[#111827]">{f}</span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-lg border border-dashed border-[#3779eb]/40 bg-[#3779eb]/5 px-3 py-2 text-[11px] text-[#3779eb]">
          <span>Conditional logic: show only if "Yes"</span>
          <span className="h-4 w-7 rounded-full bg-[#3779eb] p-0.5">
            <span className="block h-3 w-3 translate-x-3 rounded-full bg-white" />
          </span>
        </div>
      </div>
    </Window>
  );
}

/** Step 2: trackable links ready to share. */
export function LinksMock() {
  const links = [
    ["Partner link A", "tragami.example/spring?src=partner-a"],
    ["Creator link", "tragami.example/spring?src=creator"],
    ["Store QR, location 12", "tragami.example/spring?src=store-12"],
  ];
  return (
    <Window title="Trackable links">
      <ul className="divide-y divide-[#111827]/[0.06]">
        {links.map(([name, url]) => (
          <li key={name} className="flex items-center gap-3 px-4 py-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#3779eb]/10">
              <Link2 className="h-3.5 w-3.5 text-[#3779eb]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-medium text-[#111827]">{name}</span>
              <span className="block truncate text-[10px] text-[#111827]/50">{url}</span>
            </span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

/** Step 3: validated submissions with their recorded source. */
export function SubmissionsMock() {
  return (
    <Window title="Submissions">
      <ul className="divide-y divide-[#111827]/[0.06]">
        {CONTACTS.map((c) => (
          <li key={c.email} className="flex items-center justify-between gap-2 px-4 py-3">
            <span className="min-w-0">
              <span className="block truncate text-[11px] font-medium text-[#111827]">{c.name}</span>
              <span className="block truncate text-[10px] text-[#111827]/50">{c.email}</span>
            </span>
            <span className="flex shrink-0 flex-col items-end gap-1">
              <span className="rounded-full bg-[#3779eb]/10 px-2 py-0.5 text-[9px] text-[#3779eb]">{c.source}</span>
              <span className="flex items-center gap-1 text-[9px] text-[#111827]/50">
                <ShieldCheck className="h-3 w-3 text-[#3779eb]" /> Validated
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

/** Step 4: performance by source with export options. */
export function ReportMock() {
  return (
    <Window title="Campaign performance">
      <div className="p-4">
        <div className="flex h-20 items-end gap-1.5">
          {BARS.slice(4).map((h, i) => (
            <span key={i} className="flex-1 rounded-t-[3px] bg-[#3779eb]/30" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {SOURCES.slice(0, 3).map((s) => (
            <div key={s.name} className="flex items-center justify-between text-[10px] text-[#111827]">
              <span>{s.name}</span>
              <span className="tabular-nums text-[#111827]/60">{s.count}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-[#111827]/10 px-3 py-1.5 text-[10px] font-medium text-[#111827]">
            <Download className="h-3 w-3" /> Export
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-[#111827]/10 px-3 py-1.5 text-[10px] font-medium text-[#111827]">
            <Webhook className="h-3 w-3" /> Webhook
          </span>
        </div>
      </div>
    </Window>
  );
}
