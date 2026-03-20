"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const heroBackground: CSSProperties = {
  backgroundColor: "#141414",
  backgroundImage: `
    linear-gradient(0deg, black, transparent 58%),
    radial-gradient(circle farthest-corner at 50% 50%, transparent 46%, #141414),
    url('/images/hero.avif')
  `,
  backgroundPosition: "0 0, 0 0, 50% 100%",
  backgroundRepeat: "repeat, repeat, no-repeat",
  backgroundSize: "auto, auto, auto 120%",
};

const h1Style: CSSProperties = {
  textTransform: "uppercase",
  fontWeight: 900,
  fontSize: "clamp(2.2rem, 5.9rem, 5.9rem)",
  letterSpacing: "-0.02em",
  lineHeight: "80%",
  backgroundImage:
    "linear-gradient(135deg, #98652b, #fee2b2 67%, #cc9933)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  margin: 0,
};

const pStyle: CSSProperties = {
  opacity: 0.7,
  color: "#fff",
  fontSize: "1.25rem",
  lineHeight: "1.875rem",
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
      className="flex min-h-screen w-full flex-col justify-end text-center sm:px-3"
      style={heroBackground}
    >
      <div
        className="mx-auto w-full max-w-[71rem] px-6 pb-6"
        style={{ paddingTop: "24.5rem" }}
      >
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
          October 8th, 2026, 7:00 PM EST, at Pierre Hotel, NYC.
          <br />
          Hosted by Marvin R. Shanken, Chairman, M. Shanken Communications, Inc.
          Honoring the most progressive wine &amp; spirits merchants in North
          America.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#contact" className="btn-gold inline-block no-underline">
            Contact For More Information
          </a>
        </motion.div>
      </div>
    </div>
  );
}
