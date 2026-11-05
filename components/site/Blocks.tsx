import { Fragment } from "react";
import { Check, ChevronRight, Quote } from "lucide-react";
import type { Block, ScenarioPart, TableVisual, TimelineVisual } from "@/content/types";
import type { Accent } from "@/lib/category";
import { Badge } from "@/components/site/Badge";
import { Rich } from "@/components/site/Rich";
import { Faq } from "@/components/site/Faq";
import { ArtPlaceholder } from "@/components/site/ArtPlaceholder";
import { cn } from "@/lib/utils";

const H2 = "font-onest text-3xl sm:text-4xl font-semibold tracking-tight text-[#111827]";
const BODY = "font-inter text-base sm:text-lg leading-relaxed text-gray-600";
const CARD = "rounded-[28px] border border-[#2563EB]/15 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#2563EB]/40 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] transition-all duration-300";

export function BlockView({ block, accent }: { block: Block; accent: Accent }) {
  switch (block.type) {
    case "head":
      return (
        <div className={cn("max-w-3xl", block.center && "mx-auto text-center")}>
          {block.eyebrow && <Badge tone="light">{block.eyebrow}</Badge>}
          <h2 className={cn(H2, block.eyebrow && "mt-4")}>{block.title}</h2>
          {block.body && (
            <p className={cn(BODY, "mt-4")}>
              <Rich value={block.body} />
            </p>
          )}
        </div>
      );

    case "cards": {
      const n = block.cards.length;
      const cols = n === 2 ? "md:grid-cols-2" : n === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
      return (
        <div className={cn("grid gap-6", cols)}>
          {block.cards.map((c) => (
            <div
              key={c.title}
              className={cn(CARD, "overflow-hidden p-0")}
            >
              <ArtPlaceholder accent={accent} className="h-28 w-full rounded-none" label={c.title} iconSize={22} />
              <div className="p-7">
                <h3 className="font-onest text-lg font-semibold text-[#111827]">{c.title}</h3>
                {c.body && (
                  <p className="mt-2.5 font-inter text-sm leading-relaxed text-gray-600">
                    <Rich value={c.body} />
                  </p>
                )}
                {c.list && (
                  <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-4">
                    {c.list.map((li) => (
                      <li key={li} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "deepdive":
      return (
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={cn(block.reverse && "lg:order-2")}>
            <Badge tone="light">{block.eyebrow}</Badge>
            <h2 className={cn(H2, "mt-4")}>{block.title}</h2>
            {block.body && (
              <p className={cn(BODY, "mt-4")}>
                <Rich value={block.body} />
              </p>
            )}
            {block.features.length > 0 && (
              <ul className="mt-6 space-y-4">
                {block.features.map((f) => (
                  <li key={f.title} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3779eb]/10 text-[#2563EB]">
                      <Check className="h-3.5 w-3.5 text-[#2563EB]" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-onest text-sm font-semibold text-[#111827]">{f.title}</h3>
                      <p className="mt-0.5 font-inter text-sm text-gray-600">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={cn(block.reverse && "lg:order-1")}>
            {block.visual.type === "timeline" ? (
              <TimelineCard v={block.visual} accent={accent} />
            ) : (
              <TableCard v={block.visual} accent={accent} />
            )}
          </div>
        </div>
      );

    case "table":
      return <TableCard v={block} accent={accent} />;

    case "funnel":
      return (
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {block.steps.map((s) => (
            <li
              key={s.stage}
              className={cn(
                "rounded-[24px] border p-6 transition-all duration-300",
                s.active
                  ? "border-[#2563EB] bg-[#eff6ff] shadow-sm"
                  : "border-dashed border-gray-200 bg-white"
              )}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                {s.stage}
              </p>
              <p className={cn("mt-2 font-onest text-base font-semibold", s.active ? "text-[#111827]" : "text-gray-500")}>
                {s.label}
              </p>
              {!s.active && <span className="sr-only">(not the focus of this use case)</span>}
            </li>
          ))}
        </ol>
      );

    case "scenario":
      return (
        <article className={cn(CARD, "max-w-3xl overflow-hidden p-0")}>
          <div className="h-1.5 w-full bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#60a5fa]" />
          <div className="p-7 md:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-xs font-semibold text-white shadow-sm">
                {block.badge.slice(0, 1)}
              </span>
              <span className="inline-flex rounded-full bg-[#3779eb]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                {block.badge}
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {block.body.map((part, i) => (
                <ScenarioPartView key={i} part={part} accent={accent} />
              ))}
            </div>
          </div>
        </article>
      );

    case "dataGrid":
      return (
        <ul className="flex flex-wrap gap-2.5">
          {block.chips.map((c) => (
            <li
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/15 bg-white px-4 py-2 text-sm text-[#111827] shadow-xs hover:border-[#2563EB]/40 transition-colors"
            >
              <span>{c.label}</span>
              {c.tag && <span className="rounded-full bg-[#3779eb]/10 px-2 py-0.5 text-xs font-medium text-[#2563EB]">{c.tag}</span>}
            </li>
          ))}
        </ul>
      );

    case "stackRows":
      return (
        <ol className={cn(CARD, "divide-y divide-[#2563EB]/10 p-0 overflow-hidden")}>
          {block.rows.map((r) => (
            <li key={r.n} className="flex gap-5 px-7 py-5 items-start">
              <span className="font-mono text-sm font-bold text-[#2563EB]">
                {r.n}
              </span>
              <p className="font-inter text-sm sm:text-base leading-relaxed text-gray-600">
                <Rich value={r.text} />
              </p>
            </li>
          ))}
        </ol>
      );

    case "chips":
      return (
        <ul className="flex flex-wrap gap-2.5">
          {block.chips.map((c) => (
            <li
              key={c}
              className={cn(
                "rounded-full border border-[#2563EB]/15 bg-white px-4 py-2 text-sm shadow-xs transition-colors hover:border-[#2563EB]/40",
                block.kind === "question" ? "font-medium text-[#111827]" : "text-gray-600"
              )}
            >
              {c}
            </li>
          ))}
        </ul>
      );

    case "resolve":
      return (
        <p className="max-w-3xl border-l-4 border-[#2563EB] pl-6 font-onest text-xl sm:text-2xl font-semibold leading-relaxed text-[#111827]">
          <Rich value={block.text} />
        </p>
      );

    case "chain":
      return (
        <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {block.nodes.map((n, i) => (
            <Fragment key={n.title}>
              <li
                className={cn(
                  "flex-1 rounded-[24px] border p-6 transition-all",
                  n.hi
                    ? "border-[#2563EB] bg-[#eff6ff] shadow-sm"
                    : "border-[#2563EB]/15 bg-white"
                )}
              >
                <h3 className="font-onest text-base font-semibold text-[#111827]">{n.title}</h3>
                <p className="mt-2 font-inter text-sm text-gray-600 leading-relaxed">{n.body}</p>
              </li>
              {i < block.nodes.length - 1 && (
                <li aria-hidden="true" className="flex items-center justify-center text-[#2563EB]/40">
                  <ChevronRight className="h-5 w-5 rotate-90 lg:rotate-0" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      );

    case "actions":
      return (
        <ul className="flex flex-wrap items-center gap-3">
          {block.items.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/15 bg-white py-2 pl-4 pr-2 text-sm text-[#111827] shadow-xs hover:border-[#2563EB]/40 transition-colors"
            >
              <span>{a}</span>
              <span className="rounded-full bg-[#3779eb]/10 px-2 py-0.5 text-xs font-bold text-[#2563EB]">
                +1
              </span>
            </li>
          ))}
        </ul>
      );

    case "numbered":
      return (
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {block.items.map((it) => (
            <li key={it.n} className={cn(CARD, "flex gap-4 p-6 items-start")}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3779eb]/10 font-onest text-sm font-bold text-[#2563EB]">
                {it.n}
              </span>
              <div>
                <h3 className="font-onest text-base font-semibold text-[#111827]">{it.title}</h3>
                <p className="mt-1.5 font-inter text-sm text-gray-600 leading-relaxed">{it.body}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "engines":
      return (
        <div className="grid gap-6 md:grid-cols-3">
          {block.cards.map((c) => (
            <div
              key={c.title}
              className={cn(CARD, "overflow-hidden p-0", c.hi && "border-[#2563EB] shadow-md")}
            >
              <ArtPlaceholder accent={accent} className="h-24 w-full rounded-none" label={c.title} iconSize={18} />
              <div className="p-7">
                <span className="inline-flex rounded-full bg-[#3779eb]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">{c.tag}</span>
                <h3 className="mt-4 font-onest text-lg font-semibold leading-snug text-[#111827]">{c.title}</h3>
                <p className="mt-2 font-inter text-sm leading-relaxed text-gray-600">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "quote":
      return (
        <figure className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-[#2563EB]/15 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0f6fc] px-8 py-14 text-center shadow-md md:px-16">
          <Quote className="mx-auto h-10 w-10 text-[#2563EB]/50" aria-hidden="true" />
          <blockquote className="mt-5 font-onest text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-[#111827]">
            "{block.quote}"
          </blockquote>
          <p className={cn(BODY, "mt-5 max-w-2xl mx-auto")}>
            <Rich value={block.body} />
          </p>
        </figure>
      );

    case "tiles":
      return (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {block.tiles.map((t) => (
            <li key={t} className={cn(CARD, "flex flex-col items-center gap-3 p-6 text-center")}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB] text-xs font-bold text-white shadow-sm">
                {t.slice(0, 1)}
              </span>
              <span className="font-onest text-sm font-semibold text-[#111827]">{t}</span>
            </li>
          ))}
        </ul>
      );

    case "faq":
      return <Faq items={block.items} />;

    case "p":
      return (
        <p className="max-w-3xl font-inter text-base leading-relaxed text-gray-600">
          <Rich value={block.text} />
        </p>
      );
  }
}

function ScenarioPartView({ part, accent }: { part: ScenarioPart; accent: Accent }) {
  if (part.k === "p")
    return (
      <p className="font-inter text-sm leading-relaxed text-gray-600 md:text-base">
        <Rich value={part.v} />
      </p>
    );
  if (part.k === "h") return <h3 className="pt-2 font-onest text-sm font-semibold text-[#111827]">{part.v}</h3>;
  const ordered = part.k === "ol";
  const List = ordered ? "ol" : "ul";
  return (
    <List className="space-y-3">
      {part.v.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-600 md:text-base">
          {ordered ? (
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3779eb]/10 font-mono text-xs font-bold text-[#2563EB]">
              {i + 1}
            </span>
          ) : (
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
          )}
          <span>
            <Rich value={item} />
          </span>
        </li>
      ))}
    </List>
  );
}

function TimelineCard({ v, accent }: { v: TimelineVisual; accent: Accent }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#2563EB]/15 bg-white shadow-md">
      <div className="flex items-center justify-between border-b border-gray-100 bg-[#F9FBFC] px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-onest text-xs font-semibold text-gray-700">{v.title}</span>
        </div>
        <span className="rounded-full bg-[#3779eb]/10 px-2 py-0.5 text-[10px] font-semibold text-[#2563EB]">
          Real-time
        </span>
      </div>
      <ol className="divide-y divide-gray-100">
        {v.items.map((it) => (
          <li key={it.name} className="flex items-start justify-between gap-4 px-5 py-4 hover:bg-gray-50/50 transition-colors">
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2563EB]" />
              <div>
                <p className="font-onest text-sm font-semibold text-[#111827]">{it.name}</p>
                {it.desc && <p className="mt-0.5 font-inter text-xs text-gray-500">{it.desc}</p>}
              </div>
            </div>
            <span className="shrink-0 font-mono text-xs text-gray-400">{it.time}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function TableCard({ v, accent }: { v: TableVisual; accent: Accent }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#2563EB]/15 bg-white shadow-md">
      <div className="h-1 bg-gradient-to-r from-[#2563EB] to-[#60a5fa]" />
      <div className="flex items-center justify-between border-b border-gray-100 bg-[#F9FBFC] px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          {v.url && <span className="ml-3 truncate font-mono text-xs text-gray-500">{v.url}</span>}
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
          Live Sync
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60">
              {v.head.map((h) => (
                <th key={h} scope="col" className="whitespace-nowrap px-5 py-3 font-onest text-xs font-semibold text-gray-700">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {v.rows.map((row, ri) => (
              <tr key={ri} className="hover:bg-blue-50/30 transition-colors">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      "whitespace-nowrap px-5 py-3.5",
                      ci === 0 ? "font-onest font-semibold text-[#111827]" : "tabular-nums text-gray-600"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
