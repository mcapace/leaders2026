"use client";

import { useEffect, useState } from "react";

/** Market Watch Leaders — Oct 8, 2026 (midnight EST start of event day; exact time TBD) */
export const LEADERS_EVENT_ISO = "2026-10-08T00:00:00-05:00";

export type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function computeState(targetMs: number): CountdownState {
  const diff = targetMs - Date.now();
  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, expired: false };
}

/**
 * Counts down to an ISO-8601 instant. Updates every second; clears on unmount.
 */
export function useCountdown(targetDate: string): CountdownState {
  const targetMs = new Date(targetDate).getTime();

  const [state, setState] = useState<CountdownState>(() =>
    Number.isNaN(targetMs)
      ? { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
      : computeState(targetMs)
  );

  useEffect(() => {
    if (Number.isNaN(targetMs)) {
      setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      });
      return;
    }

    const tick = () => setState(computeState(targetMs));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return state;
}
