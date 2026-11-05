"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CloudDecor } from "@/components/ui/CloudDecor";
import { DotNumber } from "@/components/ui/DotNumber";

/**
 * Rebuilt from the Gamma-style product mosaic screenshot: a soft sky-blue
 * section, a 2-column grid of white rounded cards (thumbnail + title +
 * description), and decorative clouds with a centered tagline at the
 * bottom. Six games map exactly onto the screenshot's six-card 3x2 grid.
 */
const GAMES = [
  { name: "Tap Challenge", blurb: "A fast, skill-based interaction built for quick participation.", gradient: "linear-gradient(135deg,#4b3cf0,#6a5cf5)" },
  { name: "Spin & Win", blurb: "An instant chance to unlock a reward, right on the spot.", gradient: "linear-gradient(135deg,#f0492f,#ff8a5c)" },
  { name: "Scratch & Reveal", blurb: "Customers reveal their reward with a simple interactive card.", gradient: "linear-gradient(135deg,#149a6b,#35c98f)" },
  { name: "Quiz", blurb: "Combine engagement with useful preference and profile data.", gradient: "linear-gradient(135deg,#6a5cf5,#c4b5fd)" },
  { name: "Leaderboard", blurb: "Turn campaigns into competitions and encourage repeat play.", gradient: "linear-gradient(135deg,#ff8a5c,#ffd166)" },
  { name: "Custom games", blurb: "Build campaign-specific experiences around your offer.", gradient: "linear-gradient(135deg,#35c98f,#a7f3d0)" },
];

export function GameShowcase() {
  return (
    <section
      id="engage"
      className="relative overflow-hidden px-4 pb-8 pt-24 sm:px-6"
      style={{ background: "linear-gradient(180deg,#bfe0fb 0%,#e4f0fb 55%,#ffffff 100%)" }}
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeader
          badge="Built-In Games"
          heading="Six great games,"
          accent="zero code."
          subtext="Every mechanic below ships ready to launch. Swap the art and the copy, keep the mechanic."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {GAMES.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.06 }}
              className="flex items-center gap-5 rounded-2xl bg-white p-5 text-left shadow-[0_10px_30px_rgba(20,30,80,.06)]"
            >
              <div
                className="flex h-[90px] w-[110px] shrink-0 items-center justify-center overflow-hidden rounded-xl"
                style={{ background: game.gradient }}
              >
                <GamePreview name={game.name} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a0b54]">{game.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{game.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-16 flex items-end justify-between">
        <CloudDecor className="h-24 w-40 sm:h-32 sm:w-52" />
        <p className="pb-6 text-center text-sm font-medium text-[#8a86a8]">
          Every campaign deserves a game worth playing
        </p>
        <CloudDecor className="h-24 w-40 sm:h-32 sm:w-52" flip />
      </div>
    </section>
  );
}

function GamePreview({ name }: { name: string }) {
  switch (name) {
    case "Tap Challenge":
      return <div className="h-9 w-9 animate-pulse rounded-full bg-white/90" />;
    case "Spin & Win":
      return (
        <div
          className="h-11 w-11 rounded-full border-2 border-white/70"
          style={{
            background: "conic-gradient(#fff 0 25%, transparent 25% 50%, #fff 50% 75%, transparent 75% 100%)",
            animation: "spin 7s linear infinite",
          }}
        />
      );
    case "Scratch & Reveal":
      return <span className="rounded-md bg-black/25 px-3 py-1 text-xs font-bold text-white">WIN</span>;
    case "Quiz":
      return (
        <div className="flex w-16 flex-col gap-1.5">
          <div className="h-1.5 w-full rounded bg-white/50" />
          <div className="h-1.5 w-2/3 rounded bg-white/90" />
          <div className="h-1.5 w-full rounded bg-white/50" />
        </div>
      );
    case "Leaderboard":
      return (
        <div className="flex h-10 items-end gap-1.5">
          <span className="h-1/3 w-2.5 rounded-t bg-white/60" />
          <span className="h-full w-2.5 rounded-t bg-white/95" />
          <span className="h-2/3 w-2.5 rounded-t bg-white/60" />
          <span className="h-1/2 w-2.5 rounded-t bg-white/80" />
        </div>
      );
    default:
      return (
        <DotNumber value="great" dotRadius={1.4} className="h-4 text-white/90" />
      );
  }
}
