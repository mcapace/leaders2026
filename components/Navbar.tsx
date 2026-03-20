"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LEADERS_EVENT_ISO, useCountdown } from "@/lib/useCountdown";

const badgeClass =
  "hidden items-center justify-center rounded-md border border-white/15 bg-[#98652b]/85 px-2.5 py-1.5 text-center text-[0.65rem] font-medium uppercase leading-tight tracking-wide text-white/95 backdrop-blur-sm md:flex";

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
    <div className="flex items-stretch justify-center divide-x divide-white/10">
      {cells.map(({ value, label }) => (
        <div
          key={label}
          className="flex min-w-[2.35rem] flex-col items-center justify-center px-2.5 first:pl-1 last:pr-1 sm:min-w-[2.6rem] sm:px-3"
        >
          <span className="tabular-nums text-lg font-medium leading-none text-white/90 sm:text-xl">
            {value}
          </span>
          <span className="mt-1 text-[0.5rem] font-medium uppercase leading-none tracking-[0.22em] text-[#fee2b2]/70">
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
      <nav className="pointer-events-auto mx-auto flex w-[90%] max-w-[81.25rem] items-start justify-between gap-3 px-4 pt-3 md:gap-5 md:px-6 md:pt-4">
        <Link
          href="#hero"
          className="shrink-0 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Market Watch"
            width={200}
            height={54}
            className="h-auto w-[104px] sm:w-[118px] md:w-[132px] lg:w-[148px]"
            priority
          />
        </Link>

        <div className="flex flex-shrink-0 flex-row items-start gap-2 md:gap-2.5">
          <div className={badgeClass}>Pierre Hotel / new york</div>
          <div className={badgeClass}>08 / oct</div>

          <div
            className="rounded-full border border-white/12 px-1 py-1.5 shadow-[0_2px_20px_rgba(0,0,0,0.2)] sm:px-2 sm:py-2"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
              WebkitBackdropFilter: "blur(12px)",
              backdropFilter: "blur(12px)",
            }}
          >
            {showCountdown ? (
              <CountdownPanel />
            ) : (
              <div
                className="flex items-center justify-center divide-x divide-white/10 opacity-0"
                aria-hidden
              >
                {(["Days", "Hrs", "Min", "Sec"] as const).map((label) => (
                  <div
                    key={label}
                    className="flex min-w-[2.35rem] flex-col items-center px-2.5 first:pl-1 last:pr-1 sm:min-w-[2.6rem] sm:px-3"
                  >
                    <span className="tabular-nums text-lg font-medium text-white/90 sm:text-xl">
                      0
                    </span>
                    <span className="mt-1 text-[0.5rem] font-medium uppercase tracking-[0.22em] text-[#fee2b2]/70">
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
