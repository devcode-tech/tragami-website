import React from "react";
import { TrendingUp, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { Accent } from "@/lib/category";
import { cn } from "@/lib/utils";

interface ArtPlaceholderProps {
  accent: Accent;
  className?: string;
  label?: string;
  iconSize?: number;
}

export function ArtPlaceholder({
  accent,
  className,
  label = "Tragami Analytics",
  iconSize = 24,
}: ArtPlaceholderProps) {
  // Check if this is a compact card header (h-20 or h-28) or hero visual
  const isCompact = className?.includes("h-20") || className?.includes("h-28");

  if (isCompact) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#f0f6fc] via-[#f8fafc] to-[#eaf2f8] px-5 border-b border-[#2563EB]/10",
          className
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-sm border border-[#2563EB]/15 text-[#2563EB]">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[#111827]">{label}</span>
            <span className="text-[10px] text-gray-400">Verified pipeline</span>
          </div>
        </div>

        <div className="relative z-10 flex items-end gap-1 h-7">
          {[35, 55, 45, 75, 60, 90, 85].map((h, i) => (
            <span
              key={i}
              className={cn(
                "w-1.5 rounded-t-sm transition-all",
                i === 6 ? "bg-[#2563EB]" : "bg-[#2563EB]/25"
              )}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Hero-sized Dashboard Card
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[24px] border border-[#2563EB]/15 bg-white/85 p-5 shadow-[0_20px_50px_rgba(37,99,235,0.08)] backdrop-blur-xl",
        className
      )}
    >
      {/* Top OS Window Bar */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-onest text-xs font-semibold text-gray-700">
            Tragami Intelligence / Live
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Active Run
        </div>
      </div>

      {/* Hero Mock Metrics */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-gray-100 bg-[#F9FBFC] p-3">
          <p className="text-[11px] text-gray-500">Total Entries</p>
          <p className="mt-1 font-onest text-xl font-bold text-[#111827]">2,840</p>
          <span className="mt-0.5 inline-flex items-center text-[10px] text-emerald-600 font-medium">
            +32.4% vs last
          </span>
        </div>
        <div className="rounded-xl border border-gray-100 bg-[#F9FBFC] p-3">
          <p className="text-[11px] text-gray-500">Verified Contacts</p>
          <p className="mt-1 font-onest text-xl font-bold text-[#111827]">2,419</p>
          <span className="mt-0.5 inline-flex items-center text-[10px] text-[#2563EB] font-medium">
            94.8% clean
          </span>
        </div>
        <div className="rounded-xl border border-gray-100 bg-[#F9FBFC] p-3">
          <p className="text-[11px] text-gray-500">Top Channel</p>
          <p className="mt-1 font-onest text-lg font-bold text-[#111827] truncate">Retail QR</p>
          <span className="mt-0.5 inline-flex items-center text-[10px] text-gray-500">
            1,120 entries
          </span>
        </div>
      </div>

      {/* Bar Chart Area */}
      <div className="mt-4 rounded-xl border border-gray-100 bg-[#F9FBFC] p-3">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span className="font-medium">Campaign Velocity</span>
          <span className="text-[11px] text-gray-400">Live Attribution 24h</span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-2">
          {[28, 42, 35, 60, 52, 78, 65, 88, 72, 95, 84, 100].map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className={cn(
                  "w-full rounded-t-sm transition-all duration-500",
                  i === 11 ? "bg-[#2563EB]" : "bg-[#2563EB]/25 hover:bg-[#2563EB]/40"
                )}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Live Activity List */}
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <span>Real-time attribution log</span>
          <span className="text-[10px] text-[#2563EB]">Verified Source</span>
        </div>
        {[
          { user: "Sarah J.", channel: "Instagram Partner", time: "2s ago", ok: true },
          { user: "David M.", channel: "In-Store QR #4", time: "14s ago", ok: true },
          { user: "Elena R.", channel: "Direct Referral", time: "45s ago", ok: true },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-1.5 text-xs"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB]" />
              <span className="font-medium text-gray-800">{item.user}</span>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-[#2563EB]">
                {item.channel}
              </span>
            </div>
            <span className="text-[10px] text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

