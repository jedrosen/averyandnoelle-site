"use client";

import { useState, useEffect, useRef } from "react";

function randomTime() {
  return {
    days: Math.floor(Math.random() * 999),
    hours: Math.floor(Math.random() * 24),
    minutes: Math.floor(Math.random() * 60),
    seconds: Math.floor(Math.random() * 60),
  };
}

function tickDown(t: { days: number; hours: number; minutes: number; seconds: number }) {
  let { days, hours, minutes, seconds } = t;
  if (seconds > 0) return { days, hours, minutes, seconds: seconds - 1 };
  if (minutes > 0) return { days, hours, minutes: minutes - 1, seconds: 59 };
  if (hours > 0) return { days, hours: hours - 1, minutes: 59, seconds: 59 };
  if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
  return randomTime();
}

export default function CountdownTimer() {
  const [time, setTime] = useState<ReturnType<typeof randomTime> | null>(null);
  const tickCount = useRef(0);

  useEffect(() => {
    setTime(randomTime());
    const interval = setInterval(() => {
      tickCount.current += 1;
      if (tickCount.current % 5 === 0) {
        setTime(randomTime());
      } else {
        setTime((prev) => tickDown(prev ?? randomTime()));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-8 justify-center">
      {[
        { label: "Days", value: time?.days ?? 0 },
        { label: "Hours", value: time?.hours ?? 0 },
        { label: "Minutes", value: time?.minutes ?? 0 },
        { label: "Seconds", value: time?.seconds ?? 0 },
      ].map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="text-4xl font-serif font-bold text-stone-800">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs text-stone-400 uppercase tracking-widest mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
