"use client";

import { useState, useEffect } from "react";

// When the date is confirmed, set this to: new Date("YYYY-MM-DD")
const WEDDING_DATE: Date | null = null;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!WEDDING_DATE) return;

    const tick = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!WEDDING_DATE) {
    return (
      <p className="text-stone-400 text-sm italic">
        Countdown coming soon...
      </p>
    );
  }

  return (
    <div className="flex gap-8 justify-center">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
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
