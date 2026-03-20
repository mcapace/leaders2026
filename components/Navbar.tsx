"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { LEADERS_EVENT_ISO, useCountdown } from "@/lib/useCountdown";

type CountdownCell = { value: number; label: string };

const PLACEHOLDER_CELLS: CountdownCell[] = [
  { value: 0, label: "Days" },
  { value: 0, label: "Hrs" },
  { value: 0, label: "Min" },
  { value: 0, label: "Sec" },
];

/** Venue, date, time + countdown in one high-contrast card */
function EventClockWidget({ cells, muted }: { cells: CountdownCell[]; muted?: boolean }) {
  return (
    <div
      className={
        "w-full max-w-[17.5rem] rounded-xl border-2 border-[#cc9933] bg-[#141414] px-3 py-2.5 shadow-[0_6px_28px_rgba(0,0,0,0.55)] sm:max-w-[19rem] sm:px-3.5 sm:py-3 " +
        (muted ? "opacity-0" : "")
      }
      role="region"
      aria-label="Event date and countdown"
    >
      {/* Date & place */}
      <div className="border-b border-[#98652b]/70 pb-2 text-center">
        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#fee2b2] sm:text-[0.62rem]">
          Pierre Hotel · New York
        </p>
        <p className="mt-1 text-sm font-semibold leading-tight text-white sm:text-base">
          October 8, 2026
        </p>
        <p className="mt-0.5 text-xs font-medium text-[#cc9933] sm:text-sm">
          7:00 PM EST
        </p>
      </div>

      <p className="pt-2 text-center text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#fee2b2]/85">
        Countdown
      </p>

      {/* Clock-style segments with colons */}
      <div
        className="mt-1.5 flex w-full max-w-full items-end justify-center"
        role="timer"
        aria-live="polite"
      >
        {cells.map((cell, i) => (
          <Fragment key={cell.label}>
            {i > 0 ? (
              <span
                aria-hidden
                className="shrink-0 px-0.5 pb-[1.125rem] text-lg font-extralight leading-none text-[#cc9933] sm:px-1 sm:pb-5 sm:text-2xl"
              >
                :
              </span>
            ) : null}
            <div className="flex min-w-0 flex-1 basis-0 flex-col items-center px-0.5 sm:px-1">
              <span className="tabular-nums text-xl font-bold leading-none text-white sm:text-2xl">
                {cell.value}
              </span>
              <span className="mt-1 w-full text-center text-[0.45rem] font-semibold uppercase tracking-[0.14em] text-[#fee2b2] sm:text-[0.5rem] sm:tracking-[0.18em]">
                {cell.label}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function LiveEventClock() {
  const { days, hours, minutes, seconds, expired } =
    useCountdown(LEADERS_EVENT_ISO);

  const cells: CountdownCell[] = expired
    ? PLACEHOLDER_CELLS
    : [
        { value: days, label: "Days" },
        { value: hours, label: "Hrs" },
        { value: minutes, label: "Min" },
        { value: seconds, label: "Sec" },
      ];

  return <EventClockWidget cells={cells} />;
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

        <div className="min-w-0 flex-shrink">
          {mounted ? (
            <LiveEventClock />
          ) : (
            <EventClockWidget cells={PLACEHOLDER_CELLS} muted />
          )}
        </div>
      </nav>
    </motion.header>
  );
}
