"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

/**
 * Layered backgrounds (first = painted on top).
 * 1–2: Calm the top so logo + countdown read clearly; soften bottom fade.
 * 3–4: Original depth + photo, slightly less dominant scale.
 */
const heroBackground: CSSProperties = {
  backgroundColor: "#141414",
  backgroundImage: `
    linear-gradient(180deg, rgba(20, 20, 20, 0.92) 0%, rgba(20, 20, 20, 0.35) 18%, transparent 42%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, transparent 52%),
    radial-gradient(circle farthest-corner at 50% 52%, transparent 44%, #141414 78%),
    url('/images/hero.avif')
  `,
  backgroundPosition: "0 0, 0 0, 0 0, 50% 100%",
  backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
  backgroundSize: "100% 100%, 100% 100%, 100% 100%, auto 92%",
};

const h1Style: CSSProperties = {
  textTransform: "uppercase",
  fontWeight: 900,
  fontSize: "clamp(2rem, 4vw + 1.25rem, 4.25rem)",
  letterSpacing: "-0.02em",
  lineHeight: "88%",
  backgroundImage:
    "linear-gradient(135deg, #98652b, #fee2b2 67%, #cc9933)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  margin: 0,
};

const pStyle: CSSProperties = {
  opacity: 0.78,
  color: "#fff",
  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
  lineHeight: "1.65rem",
  margin: "0.75rem auto 1.5rem",
  maxWidth: "56.25rem",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <div
      className="flex min-h-[100svh] w-full flex-col text-center sm:px-3"
      style={heroBackground}
    >
      {/* Clear band under absolute navbar (logo + countdown) */}
      <div
        className="shrink-0"
        style={{
          paddingTop: "clamp(5.5rem, 11vw, 8.5rem)",
        }}
        aria-hidden
      />

      <div className="flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-[71rem] px-6 pb-10 pt-4 md:pb-16 md:pt-8">
          <motion.h1
            style={h1Style}
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            the 2026 market watch leaders awards
          </motion.h1>

          <motion.p
            style={pStyle}
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Held October 8, 2026 at The Pierre, New York City.
            <br />
            Hosted by Marvin R. Shanken, Chairman, M. Shanken Communications, Inc.
            Honoring the most progressive wine &amp; spirits merchants in North
            America, as featured in the Leaders 2026 issue of Market Watch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#winners" className="btn-gold inline-block no-underline">
                Meet the 2026 Winners
              </a>
              <a
                href="#contact"
                className="btn-alt inline-block no-underline"
                style={{ fontSize: "0.8rem", padding: "0.85rem 1.6rem" }}
              >
                Contact For More Information
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
