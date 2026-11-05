"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export interface CTA01VelaraTragamiProps {
  className?: string;
}

export default function CTA01VelaraTragami({ className = "" }: CTA01VelaraTragamiProps) {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = "/pricing";
      }, 600);
    } else {
      window.location.href = "/pricing";
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <style>{`
        @keyframes cta01-icon-pulse {
          0%, 100% {
            box-shadow: 0 0 40px rgba(37, 99, 235, 0.45), 0 0 80px rgba(59, 130, 246, 0.25);
          }
          50% {
            box-shadow: 0 0 60px rgba(37, 99, 235, 0.65), 0 0 120px rgba(59, 130, 246, 0.35);
          }
        }

        .cta01-hero-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(37, 99, 235, 0.18);
          max-width: 1140px;
          width: 100%;
          min-height: 580px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.08), 0 20px 60px -15px rgba(37, 99, 235, 0.12), 0 40px 100px rgba(15, 23, 42, 0.06);
        }

        .cta01-corner-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(37, 99, 235, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.06) 1px, transparent 1px);
          background-size: 80px 80px;
          opacity: 0.6;
          pointer-events: none;
        }

        .cta01-grid-floor {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55%;
          background-image:
            linear-gradient(to right, rgba(37, 99, 235, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.14) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(400px) rotateX(55deg);
          transform-origin: bottom center;
          pointer-events: none;
        }

        .cta01-grid-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 55%;
          background: radial-gradient(ellipse 70% 40% at 50% 100%, rgba(37, 99, 235, 0.28) 0%, rgba(59, 130, 246, 0.12) 40%, transparent 70%);
          pointer-events: none;
        }

        .cta01-app-icon {
          width: 110px;
          height: 110px;
          border-radius: 26px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 40%, #3b82f6 70%, #60a5fa 100%);
          border: 1px solid rgba(59, 130, 246, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 36px;
          z-index: 2;
          animation: cta01-icon-pulse 4s ease-in-out infinite;
        }

        .cta01-domain-form {
          background: rgba(248, 250, 252, 0.95);
          border: 1px solid rgba(37, 99, 235, 0.22);
          border-radius: 999px;
          padding: 6px 6px 6px 22px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(10px);
          max-width: 480px;
          width: 100%;
          margin-bottom: 16px;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.08);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .cta01-domain-form:focus-within {
          border-color: #2563eb;
          box-shadow: 0 4px 24px rgba(37, 99, 235, 0.18);
        }

        @media (max-width: 640px) {
          .cta01-domain-form {
            flex-direction: column;
            border-radius: 24px;
            padding: 16px;
            gap: 12px;
          }
          .cta01-domain-form input {
            text-align: center;
            width: 100%;
          }
          .cta01-domain-form button {
            width: 100%;
          }
          .cta01-hero-card h1 {
            font-size: 36px !important;
          }
          .cta01-app-icon {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            margin-bottom: 24px;
          }
          .cta01-app-icon svg {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>

      <section
        style={{ fontFamily: "'Inter', sans-serif" }}
        className={`w-full bg-[#f8fafc] py-16 md:py-24 px-6 md:px-10 flex items-center justify-center ${className}`}
      >
        <div className="cta01-hero-card">
          {/* Layer 1: Corner faint lines */}
          <div className="cta01-corner-lines" />

          {/* Layer 2: 3D perspective floor */}
          <div className="cta01-grid-floor" />

          {/* Layer 3: Grid glow */}
          <div className="cta01-grid-glow" />

          {/* Layer 4: Starfield dots */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1140 580"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <circle cx="100" cy="80" r="1.5" fill="rgba(37,99,235,0.4)" />
            <circle cx="250" cy="140" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="180" cy="320" r="1.5" fill="rgba(37,99,235,0.45)" />
            <circle cx="400" cy="60" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="80" cy="450" r="1.5" fill="rgba(37,99,235,0.4)" />
            <circle cx="550" cy="100" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="740" cy="50" r="1.5" fill="rgba(37,99,235,0.4)" />
            <circle cx="920" cy="130" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="1050" cy="80" r="1.5" fill="rgba(37,99,235,0.45)" />
            <circle cx="1000" cy="350" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="850" cy="440" r="1.5" fill="rgba(37,99,235,0.4)" />
            <circle cx="320" cy="400" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="460" cy="480" r="1.5" fill="rgba(37,99,235,0.45)" />
            <circle cx="680" cy="390" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="150" cy="200" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="990" cy="240" r="1.5" fill="rgba(37,99,235,0.45)" />
            <circle cx="600" cy="300" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="50" cy="180" r="1" fill="rgba(37,99,235,0.3)" />
            <circle cx="1100" cy="400" r="1.5" fill="rgba(37,99,235,0.4)" />
            <circle cx="750" cy="200" r="1" fill="rgba(37,99,235,0.3)" />
          </svg>

          {/* Content Stack */}
          <div className="relative z-10 px-6 py-12 md:px-10 lg:p-20 flex flex-col items-center">
            {/* 1. App Icon Tile */}
            <div className="cta01-app-icon">
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                style={{ filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.7))" }}
                aria-hidden="true"
              >
                {/* Wand Path */}
                <path
                  d="M19.5 2C18.5 2 17 3 15 5C13 7 11 9.5 10 11L4 17L3 21L7 20L13 14C14.5 13 17 11 19 9C21 7 22 5.5 22 4.5C22 3.5 21 2 19.5 2Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Animated Sparkle 1 */}
                <path
                  d="M19 13L20 15L22 16L20 17L19 19L18 17L16 16L18 15L19 13Z"
                  fill="#ffffff"
                  opacity="0.9"
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;1;0.2"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="0.8;1.2;0.8"
                    additive="sum"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Animated Sparkle 2 */}
                <path
                  d="M5 4L5.6 5.4L7 6L5.6 6.6L5 8L4.4 6.6L3 6L4.4 5.4L5 4Z"
                  fill="#ffffff"
                  opacity="0.8"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="0.9;1.25;0.9"
                    additive="sum"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Animated Sparkle 3 */}
                <path
                  d="M9 1L9.5 2L10.5 2.5L9.5 3L9 4L8.5 3L7.5 2.5L8.5 2L9 1Z"
                  fill="#ffffff"
                  opacity="0.75"
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;1;0.2"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="0.85;1.2;0.85"
                    additive="sum"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Pulsing bottom-left dot */}
                <circle cx="3.5" cy="20.5" r="1.2" fill="#ffffff">
                  <animate
                    attributeName="r"
                    values="0.8;1.5;0.8"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>

            {/* 2. Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[40px] md:text-[62px] font-extrabold text-[#111827] leading-[1.1] tracking-[-1.5px] mb-4 text-center"
              style={{ textShadow: "0 0 40px rgba(37,99,235,0.18)" }}
            >
              Giveaways that Convert.
              <br className="hidden md:block" /> Faster than Ever.
            </motion.h2>

            {/* 3. Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[17px] text-[#4B5563] max-w-[540px] mb-10 text-center leading-relaxed"
            >
              Tragami captures high-value participants, validates every entry, and tracks verified attribution across every marketing channel in seconds.
            </motion.p>

            {/* 4. CTA Form Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              <form onSubmit={handleSubmit} className="cta01-domain-form" role="search">
                <input
                  type="text"
                  placeholder="Enter your campaign idea or email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-transparent border-none outline-none text-[15px] text-[#111827] flex-1 placeholder:text-[#94A3B8]"
                  aria-label="Campaign idea or email prompt"
                />
                <button
                  type="submit"
                  className="bg-[#2563EB] text-white rounded-full px-6 py-2.5 text-[14px] font-bold transition-all hover:bg-[#1D4ED8] flex-shrink-0 shadow-[0_4px_12px_rgba(37,99,235,0.3)] cursor-pointer"
                >
                  {submitted ? "Launching..." : "Try Demo"}
                </button>
              </form>

              {/* Trust line */}
              <p className="text-[13px] text-[#64748B] tracking-tight flex items-center gap-2">
                <span>No credit card required</span>
                <span className="text-[#2563EB] font-bold" aria-hidden="true">
                  ✦
                </span>
                <span>14-days free trial</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
