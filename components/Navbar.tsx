"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LEADERS_EVENT_ISO, useCountdown } from "@/lib/useCountdown";

const badgeClass =
  "hidden items-center justify-center rounded-sm bg-[#98652b] px-3 py-2 text-center text-xs font-semibold uppercase leading-tight text-white md:flex";

function CountdownPanel() {
  const { days, hours, minutes, seconds, expired } =
    useCountdown(LEADERS_EVENT_ISO);

  const cells = expired
    ? [
        { value: 0, label: "Days" },
        { value: 0, label: "Hrs" },
        { value: 0, label: "Min" },
        { value: 0, label: "Sec" },
      ]
    : [
        { value: days, label: "Days" },
        { value: hours, label: "Hrs" },
        { value: minutes, label: "Min" },
        { value: seconds, label: "Sec" },
      ];

  return (
    <div className="flex items-center justify-center gap-4 text-white sm:gap-6">
      {cells.map(({ value, label }) => (
        <div
          key={label}
          className="flex w-1/4 max-w-[5rem] flex-col items-center justify-center px-0 py-0 text-center"
        >
          <span
            className="font-semibold leading-tight text-white"
            style={{
              fontSize: "clamp(1.25rem, 2rem, 2rem)",
              fontWeight: 600,
            }}
          >
            {value}
          </span>
          <span
            className="mt-0 uppercase leading-none text-[#fee2b2]"
            style={{
              fontSize: "0.5625rem",
              letterSpacing: "0.3em",
              marginRight: "-0.3em",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    setShowCountdown(true);
  }, []);

  return (
    <motion.header
      className="section-nav pointer-events-none absolute inset-x-0 top-0 z-10"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <nav className="pointer-events-auto mx-auto flex w-[90%] max-w-[81.25rem] items-center justify-between gap-3 px-4 py-4 md:gap-4 md:px-6 md:py-6">
        <Link
          href="#hero"
          className="shrink-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Market Watch"
            width={300}
            height={80}
            className="h-auto w-[168px] sm:w-[192px] md:w-[280px] lg:w-[300px]"
            priority
          />
        </Link>

        <div className="flex flex-shrink-0 flex-row items-center gap-3">
          <div className={badgeClass}>Pierre Hotel / new york</div>
          <div className={badgeClass}>08 / oct</div>

          <div
            className="rounded-sm border border-white/25 px-2.5 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.35)] md:px-5 md:py-2.5"
            style={{
              backgroundColor: "rgba(251, 223, 179, 0.14)",
              WebkitBackdropFilter: "blur(8px)",
              backdropFilter: "blur(8px)",
            }}
          >
            {showCountdown ? (
              <CountdownPanel />
            ) : (
              <div
                className="flex items-center justify-center gap-6 opacity-0"
                aria-hidden
              >
                {(["Days", "Hrs", "Min", "Sec"] as const).map((label) => (
                  <div
                    key={label}
                    className="flex w-1/4 max-w-[5rem] flex-col items-center"
                  >
                    <span
                      className="font-semibold text-white"
                      style={{ fontSize: "clamp(1.25rem, 2rem, 2rem)" }}
                    >
                      0
                    </span>
                    <span
                      className="text-[0.5625rem] uppercase leading-none text-[#fee2b2]"
                      style={{ letterSpacing: "0.3em" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
