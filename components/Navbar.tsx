"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LEADERS_EVENT_ISO, useCountdown } from "@/lib/useCountdown";

const badgeClass =
  "hidden items-center justify-center rounded-md border border-white/15 bg-[#98652b]/85 px-2.5 py-1.5 text-center text-[0.65rem] font-medium uppercase leading-tight tracking-wide text-white/95 backdrop-blur-sm md:flex";

type CountdownCell = { value: number; label: string };

/** Four equal columns — same padding, dividers only between cells */
function CountdownGrid({
  cells,
  className = "",
}: {
  cells: CountdownCell[];
  className?: string;
}) {
  return (
    <div
      className={`grid min-w-[11.75rem] grid-cols-4 sm:min-w-[13.25rem] ${className}`.trim()}
      role="timer"
      aria-live="polite"
    >
      {cells.map(({ value, label }, i) => (
        <div
          key={label}
          className={
            "flex min-w-0 flex-col items-center justify-center px-2 py-1 sm:px-2.5 sm:py-1.5 " +
            (i > 0 ? "border-l border-white/[0.11]" : "")
          }
        >
          <span
            className="flex h-[1.375rem] w-full items-end justify-center tabular-nums text-[1.0625rem] font-medium leading-none tracking-tight text-white/93 sm:h-6 sm:text-[1.1875rem]"
          >
            {value}
          </span>
          <span className="mt-[0.3125rem] w-full text-center text-[0.5rem] font-medium uppercase leading-none tracking-[0.2em] text-[#fee2b2]/72">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function CountdownPanel() {
  const { days, hours, minutes, seconds, expired } =
    useCountdown(LEADERS_EVENT_ISO);

  const cells: CountdownCell[] = expired
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

  return <CountdownGrid cells={cells} />;
}

const PLACEHOLDER_CELLS: CountdownCell[] = [
  { value: 0, label: "Days" },
  { value: 0, label: "Hrs" },
  { value: 0, label: "Min" },
  { value: 0, label: "Sec" },
];

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
            className="rounded-2xl border border-white/[0.14] px-1.5 py-1 shadow-[0_2px_16px_rgba(0,0,0,0.18)] sm:px-2 sm:py-1.5"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.035) 55%, rgba(0,0,0,0.08) 100%)",
              WebkitBackdropFilter: "blur(14px)",
              backdropFilter: "blur(14px)",
            }}
          >
            {showCountdown ? (
              <CountdownPanel />
            ) : (
              <CountdownGrid cells={PLACEHOLDER_CELLS} className="opacity-0" />
            )}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
