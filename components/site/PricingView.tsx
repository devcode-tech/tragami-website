"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { PRICING, type Plan, type Product, type ProductKey } from "@/content/pricing";
import { SIGNUP_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export function PricingView() {
  const [yearly, setYearly] = useState(false);
  const [productKey, setProductKey] = useState<ProductKey>("conversion");
  const [modal, setModal] = useState<ProductKey | null>(null);
  const product = PRICING[productKey];

  return (
    <section id="plans" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* billing toggle */}
        <div className="flex items-center justify-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={cn("font-medium", !yearly ? "text-black" : "text-gray-500")}
          >
            Monthly
          </button>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((v) => !v)}
            className={cn("relative h-6 w-11 rounded-full transition-colors", yearly ? "bg-[#4b3cf0]" : "bg-gray-300")}
          >
            <span
              className={cn(
                "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
                yearly && "translate-x-5"
              )}
            />
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={cn("flex items-center gap-2 font-medium", yearly ? "text-black" : "text-gray-500")}
          >
            Yearly
            <span className="rounded-full bg-[#3779eb]/10 border border-[#3779eb]/20 px-2 py-0.5 text-xs font-medium text-[#3779eb]">
              Save up to 40%
            </span>
          </button>
        </div>

        {/* product tabs */}
        <div className="mt-8 flex justify-center">
          <div role="tablist" aria-label="Product" className="inline-flex rounded-full bg-mist p-1">
            {(Object.keys(PRICING) as ProductKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={productKey === key}
                onClick={() => setProductKey(key)}
                className={cn(
                  "rounded-full px-6 py-2 text-sm font-medium transition-colors",
                  productKey === key ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
                )}
              >
                {PRICING[key].label}
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel">
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {product.plans.map((plan) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                yearly={yearly}
                onCustomize={() => setModal(productKey)}
              />
            ))}
          </div>
          <CompareTable product={product} />
        </div>
      </div>

      {modal && <ScaleModal productKey={modal} onClose={() => setModal(null)} />}
    </section>
  );
}

function PlanCard({ plan, yearly, onCustomize }: { plan: Plan; yearly: boolean; onCustomize: () => void }) {
  const inc = plan.includes;
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-white p-7",
        plan.best ? "border-[#4b3cf0] shadow-[0_20px_50px_-20px_rgba(75,60,240,0.3)]" : "border-black/[0.08]"
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-[#4b3cf0] px-3 py-1 text-xs font-medium text-white">
          {plan.badge}
        </span>
      )}
      <h3 className="text-sm font-medium text-gray-500">{plan.name}</h3>
      <p className="mt-3 text-4xl font-medium tracking-tight text-[#1a0b54]">
        ${yearly ? plan.yearly : plan.monthly}
        <span className="text-sm font-normal text-gray-500"> / mo</span>
      </p>
      <p className="mt-1 text-xs text-gray-500">{yearly ? plan.noteYearly : plan.noteMonthly}</p>
      <p className="mt-5 text-sm text-gray-700">
        Includes <strong className="font-semibold text-black">{yearly ? inc.yearly : inc.monthly}</strong> {inc.unit}{" "}
        {yearly ? inc.perYearly : inc.perMonthly}
      </p>
      <p className="mt-1 text-sm text-gray-500">{plan.desc}</p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-gray-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4b3cf0]" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      {plan.customize ? (
        <div className="mt-7">
          <button
            type="button"
            onClick={onCustomize}
            className="w-full rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition-colors hover:border-black"
          >
            Choose Plan
          </button>
          <p className="mt-3 text-center text-xs text-gray-500">
            {plan.customize}{" "}
            <button type="button" onClick={onCustomize} className="font-medium text-[#4b3cf0] hover:underline">
              Customize
            </button>
          </p>
        </div>
      ) : (
        <Link
          href={SIGNUP_HREF}
          className={cn(
            "mt-7 rounded-full px-6 py-3 text-center text-sm font-medium transition-colors",
            plan.best
              ? "bg-black text-white hover:bg-gray-800"
              : "border border-black/15 text-black hover:border-black"
          )}
        >
          Choose Plan
        </Link>
      )}
    </div>
  );
}

function CompareTable({ product }: { product: Product }) {
  return (
    <div className="mt-14 overflow-x-auto rounded-2xl border border-black/[0.08]">
      <table className="w-full min-w-[560px] text-left text-sm">
        <caption className="sr-only">{product.label} plan comparison</caption>
        <thead>
          <tr className="border-b border-black/[0.08] bg-mist">
            {product.compare.head.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={cn("px-5 py-3.5 text-xs font-medium text-gray-500", i > 0 && "text-center")}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-black/[0.06]">
          {product.compare.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={cn("px-5 py-3.5", i === 0 ? "font-medium text-black" : "text-center text-gray-700")}
                >
                  {i === 0 ? (
                    cell
                  ) : cell === "✓" ? (
                    <>
                      <Check className="mx-auto h-4 w-4 text-[#4b3cf0]" aria-hidden="true" />
                      <span className="sr-only">Included</span>
                    </>
                  ) : cell === "–" ? (
                    <>
                      <span aria-hidden="true" className="text-gray-300">
                        –
                      </span>
                      <span className="sr-only">Not included</span>
                    </>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScaleModal({ productKey, onClose }: { productKey: ProductKey; onClose: () => void }) {
  const cfg = PRICING[productKey].modal;
  const [value, setValue] = useState(cfg.min);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    boxRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Same linear scale as the original page: min volume = min price, max volume = max price.
  const price = cfg.minPrice + ((value - cfg.min) * (cfg.maxPrice - cfg.minPrice)) / (cfg.max - cfg.min);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={boxRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="scale-modal-title"
        className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-xl outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-gray-500 hover:bg-mist hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 id="scale-modal-title" className="text-xl font-medium text-[#1a0b54]">
          {cfg.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600">{cfg.sub}</p>

        <div className="mt-6 flex items-baseline justify-between text-sm">
          <span className="text-gray-600">{cfg.label}</span>
          <b className="font-semibold text-black tabular-nums">{fmt(value)}</b>
        </div>
        <input
          type="range"
          min={cfg.min}
          max={cfg.max}
          step={cfg.step}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value, 10))}
          aria-label={cfg.label}
          className="mt-3 w-full accent-[#4b3cf0]"
        />

        <div className="mt-6 rounded-xl bg-mist p-5 text-center">
          <p className="text-2xl font-medium tabular-nums text-[#1a0b54]">${fmt(price)} / year</p>
          <p className="mt-1 text-xs text-gray-500">{cfg.caption}</p>
        </div>
        <Link
          href={SIGNUP_HREF}
          className="mt-5 block rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-800"
        >
          Choose Plan
        </Link>
      </div>
    </div>
  );
}
