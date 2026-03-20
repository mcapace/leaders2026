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

export type DaysUntilState = { days: number; expired: boolean };

function computeDaysUntil(targetMs: number): DaysUntilState {
  if (Number.isNaN(targetMs)) return { days: 0, expired: true };
  const diff = targetMs - Date.now();
  if (diff <= 0) return { days: 0, expired: true };
  const days = Math.floor(diff / 86_400_000);
  return { days, expired: false };
}

/**
 * Full calendar days until the ISO instant. No hours/minutes/seconds —
 * use when the exact event time is not public. Ticks every minute.
 */
export function useDaysUntilEvent(iso: string): DaysUntilState {
  const targetMs = new Date(iso).getTime();

  const [state, setState] = useState<DaysUntilState>(() =>
    computeDaysUntil(targetMs)
  );

  useEffect(() => {
    if (Number.isNaN(targetMs)) {
      setState({ days: 0, expired: true });
      return;
    }

    const tick = () => setState(computeDaysUntil(targetMs));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [targetMs]);

  return state;
}
