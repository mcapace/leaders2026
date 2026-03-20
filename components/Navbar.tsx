"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LEADERS_EVENT_ISO, useDaysUntilEvent } from "@/lib/useCountdown";

/** Venue, date, and days-until-event in one high-contrast card (no time-of-day) */
function EventClockWidget({
  days,
  expired,
  muted,
}: {
  days: number;
  expired: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={
        "w-full max-w-[14rem] rounded-xl border-2 border-[#cc9933] bg-[#141414] px-3 py-2.5 shadow-[0_6px_28px_rgba(0,0,0,0.55)] sm:max-w-[15rem] sm:px-3.5 sm:py-3 " +
        (muted ? "opacity-0" : "")
      }
      role="region"
      aria-label="Event date and days until event"
    >
      <div className="border-b border-[#98652b]/70 pb-2 text-center">
        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#fee2b2] sm:text-[0.62rem]">
          Pierre Hotel · New York
        </p>
        <p className="mt-1 text-sm font-semibold leading-tight text-white sm:text-base">
          October 8, 2026
        </p>
      </div>

      <p className="pt-2 text-center text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#fee2b2]/85">
        Days until event
      </p>

      <div
        className="mt-2 flex flex-col items-center justify-center py-1"
        role="timer"
        aria-live="polite"
        aria-atomic="true"
      >
        {expired ? (
          <p className="py-1 text-center text-lg font-semibold leading-tight text-[#cc9933] sm:text-xl">
            Event day
          </p>
        ) : (
          <>
            <span className="tabular-nums text-3xl font-bold leading-none text-white sm:text-4xl">
              {days}
            </span>
            <span className="mt-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-[#fee2b2]">
              Days
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function LiveEventClock() {
  const { days, expired } = useDaysUntilEvent(LEADERS_EVENT_ISO);
  return <EventClockWidget days={days} expired={expired} />;
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
            <EventClockWidget days={0} expired={false} muted />
          )}
        </div>
      </nav>
    </motion.header>
  );
}
