"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NEXT_EVENT } from "@/lib/data";
import { LEADERS_EVENT_ISO, useDaysUntilEvent } from "@/lib/useCountdown";

function SaveTheDate() {
  const [mounted, setMounted] = useState(false);
  const { days, expired } = useDaysUntilEvent(LEADERS_EVENT_ISO);
  useEffect(() => setMounted(true), []);
  return (
    <div
      className="mt-8 inline-flex items-center gap-4 rounded-lg border border-[#cc9933]/70 px-4 py-3 text-left"
      style={{ backgroundColor: "rgba(20, 20, 20, 0.55)", backdropFilter: "blur(6px)" }}
      role="region"
      aria-label="Save the date for the next Leaders Awards"
    >
      <div className="flex flex-col items-center border-r border-[#98652b]/70 pr-4" aria-live="polite">
        <span className="tabular-nums text-2xl font-bold leading-none text-white sm:text-3xl">
          {mounted && !expired ? days : "–"}
        </span>
        <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#fee2b2]">
          Days
        </span>
      </div>
      <div>
        <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#cc9933]">
          Save the date
        </p>
        <p className="m-0 mt-0.5 text-[0.95rem] font-semibold leading-tight text-white">
          {NEXT_EVENT.ordinal} Leaders Awards
        </p>
        <p className="m-0 text-[0.8rem] text-[#fee2b2]/85">
          {NEXT_EVENT.dateLabel} · {NEXT_EVENT.city}
        </p>
      </div>
    </div>
  );
}

/**
 * Layered backgrounds (first = painted on top). The photo is from the
 * Leaders Awards dinner at The Pierre; the gradients keep the headline
 * and nav legible and fade the edges into the page black.
 */
const heroBackground: CSSProperties = {
  backgroundColor: "#141414",
  backgroundImage: `
    linear-gradient(180deg, rgba(20, 20, 20, 0.9) 0%, rgba(20, 20, 20, 0.45) 22%, rgba(20, 20, 20, 0.35) 60%, #141414 100%),
    linear-gradient(90deg, rgba(20, 20, 20, 0.85) 0%, rgba(20, 20, 20, 0.35) 55%, rgba(20, 20, 20, 0.15) 100%),
    url('/images/hero-2026.avif')
  `,
  backgroundPosition: "0 0, 0 0, 50% 35%",
  backgroundRepeat: "no-repeat, no-repeat, no-repeat",
  backgroundSize: "100% 100%, 100% 100%, cover",
};

const h1Style: CSSProperties = {
  textTransform: "uppercase",
  fontWeight: 900,
  fontSize: "clamp(2.4rem, 4.6vw + 0.5rem, 4.6rem)",
  letterSpacing: "-0.025em",
  lineHeight: "0.92",
  backgroundImage:
    "linear-gradient(135deg, #98652b, #fee2b2 60%, #cc9933)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  margin: 0,
};

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <div
      className="flex min-h-[100svh] w-full flex-col"
      style={heroBackground}
    >
      {/* Clear band under the absolute navbar */}
      <div className="shrink-0 pt-[9rem] sm:pt-[9.5rem] md:pt-[12rem] lg:pt-[13rem]" aria-hidden />

      <div className="flex flex-1 items-center">
        <div className="mx-auto grid w-[90%] max-w-[81.25rem] grid-cols-1 items-center gap-10 pb-14 pt-6 md:grid-cols-[1.25fr_1fr] md:gap-12 md:pb-20 lg:grid-cols-[1.4fr_1fr]">
          <div className="text-center md:text-left">
            <motion.p
              className="m-0 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#fee2b2]/85 sm:text-[0.78rem]"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              43rd Annual · October 8, 2026 · The Pierre, New York
            </motion.p>

            <motion.h1
              className="mt-4"
              style={h1Style}
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.3, ease }}
            >
              The 2026 Market Watch Leaders Awards
            </motion.h1>

            <motion.p
              className="mx-auto mt-5 max-w-[34rem] text-white md:mx-0"
              style={{
                opacity: 0.82,
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                lineHeight: 1.6,
              }}
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.45, ease }}
            >
              Hosted by Marvin R. Shanken, Chairman of M. Shanken
              Communications, the Leaders Awards honor the most progressive
              wine and spirits merchants in North America. Meet this
              year&apos;s class and read every profile from the Leaders 2026
              issue.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.6, ease }}
            >
              <a href="#winners" className="btn-gold inline-block no-underline">
                Meet the 2026 Winners
              </a>
              <Link
                href="/articles"
                className="btn-alt inline-block no-underline"
                style={{ fontSize: "0.8rem", padding: "0.85rem 1.6rem" }}
              >
                Read the Issue
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.75, ease }}
            >
              <SaveTheDate />
            </motion.div>
          </div>

          <motion.div
            className="mx-auto w-full max-w-[16rem] sm:max-w-[18rem] md:max-w-[22rem] md:justify-self-end"
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
          >
            <Link
              href="/articles/chad-sokol"
              className="group block no-underline"
              aria-label="Read the Retailer of the Year story: Chad Sokol of Costco Wholesale Corp."
            >
              <div
                className="relative aspect-[1000/1318] w-full overflow-hidden rounded-md transition duration-500 group-hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 30px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(254,226,178,0.25)",
                }}
              >
                <Image
                  src="/images/2026/covers/leaders-2026.avif"
                  alt="Market Watch Leaders 2026 cover: Chad Sokol of Costco Wholesale Corp."
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 18rem, 22rem"
                />
              </div>
              <p className="mt-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#fee2b2]/80 transition group-hover:text-[#fee2b2]">
                Retailer of the Year · Chad Sokol, Costco
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
