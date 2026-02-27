"use client";

import { useState, useEffect, useRef } from "react";

type Phase = "scanning" | "denied" | "checklist";

const getRandomDuration = () => (Math.floor(Math.random() * 11) + 10) * 1000; // 10–20s

const readouts = [
  { threshold: 0,  label: "Identity Match",       getValue: (p: number) => p > 10 ? "CONFIRMED" : "VERIFYING...",         color: "text-green-300" },
  { threshold: 10, label: "Cheekbone Prominence",  getValue: (p: number) => p > 20 ? "EXCEPTIONALLY HIGH" : "MEASURING...", color: "text-green-300" },
  { threshold: 20, label: "Jawline Integrity",     getValue: (p: number) => p > 30 ? "CHISELED · PASS" : "ANALYZING...",   color: "text-green-300" },
  { threshold: 30, label: "Brow Ridge Depth",      getValue: (p: number) => p > 40 ? "BROODING · NOTED" : "SCANNING...",   color: "text-green-300" },
  { threshold: 40, label: "Nasal Symmetry",        getValue: (p: number) => p > 50 ? "87.3% SYMMETRIC" : "COMPUTING...",   color: "text-green-300" },
  { threshold: 50, label: "Lip-to-Nose Ratio",     getValue: (p: number) => p > 60 ? "WITHIN NORMS" : "CALIBRATING...",   color: "text-green-300" },
  { threshold: 60, label: "Vibe Assessment",       getValue: (p: number) => p > 68 ? "DANGEROUSLY HIGH" : "RUNNING...",   color: "text-yellow-400" },
  { threshold: 68, label: "Pupillary Dilation",    getValue: (p: number) => p > 76 ? "EXTREMELY DILATED" : "CHECKING...", color: "text-yellow-400" },
  { threshold: 76, label: "Eligible Guest",        getValue: (p: number) => p > 84 ? "DETECTED" : "VERIFYING...",         color: "text-green-300" },
  { threshold: 84, label: "⚠ Horniness Level",    getValue: (p: number) => {
    if (p < 84) return "PENDING...";
    if (p < 92) return `${Math.floor((p - 84) * 12)}% — ELEVATED`;
    return "100% — CRITICAL ⚠";
  }, color: "text-red-400" },
];

const checklistItems: {
  id: string;
  icon: string;
  title: string;
  description: string;
  links?: { label: string; url: string }[];
  steps?: string[];
}[] = [
  {
    id: "christ",
    icon: "✝️",
    title: "Accept Jesus Christ as Your Personal Savior",
    description: "A critical first step in the cooling-down process. Clinical trials show a 0% success rate without this step.",
    links: [
      { label: "The Case for Christ — Lee Strobel", url: "https://www.amazon.com/s?k=the+case+for+christ+lee+strobel" },
      { label: "Mere Christianity — C.S. Lewis", url: "https://www.amazon.com/s?k=mere+christianity+cs+lewis" },
      { label: "The Purpose Driven Life — Rick Warren", url: "https://www.amazon.com/s?k=the+purpose+driven+life+rick+warren" },
    ],
  },
  {
    id: "cooling",
    icon: "🧊",
    title: "Apply Cooling Spray to Affected Areas",
    description: "Your face registered critically elevated thermal readings. Please cool down before re-attempting biometric entry.",
    links: [
      { label: "Biofreeze Professional Cooling Spray on Amazon →", url: "https://www.amazon.com/s?k=biofreeze+cooling+spray" },
      { label: "ARCTIC ICE Instant Cooling Spray on Amazon →", url: "https://www.amazon.com/s?k=arctic+ice+instant+cooling+spray" },
      { label: "Gold Bond Cooling Powder Spray on Amazon →", url: "https://www.amazon.com/s?k=gold+bond+cooling+powder+spray" },
    ],
  },
  {
    id: "hiccups",
    icon: "😮‍💨",
    title: "Resolve Any Outstanding Hiccups",
    description: "Hiccups are a clinically documented horniness amplifier. You must be hiccup-free before re-entry.",
    steps: [
      "Hold your breath for a slow count of 10.",
      "Drink a full glass of water upside down.",
      "Pull both knees firmly to your chest and hold for 30 seconds.",
      "Swallow a level teaspoon of granulated sugar without water.",
      "Ask someone nearby to scare you. Not too hard.",
      "Breathe slowly into a paper bag (5–6 cycles).",
      "Think about something deeply unsexy. Take your time.",
    ],
  },
];

export default function RSVP() {
  const [phase, setPhase] = useState<Phase>("scanning");
  const [progress, setProgress] = useState(0);
  const [attempt, setAttempt] = useState(1);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const scanDuration = useRef(getRandomDuration());

  useEffect(() => {
    if (phase !== "scanning") return;
    setProgress(0);
    const start = Date.now();
    const dur = scanDuration.current;

    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / dur) * 100, 100);
      setProgress(Math.floor(pct));
      if (elapsed >= dur) {
        clearInterval(tick);
        setPhase("denied");
      }
    }, 50);

    return () => clearInterval(tick);
  }, [phase, attempt]);

  const allChecked = checklistItems.every((item) => checked[item.id]);

  const handleTryAgain = () => setPhase("checklist");

  const handleReady = () => {
    scanDuration.current = getRandomDuration();
    setChecked({});
    setAttempt((a) => a + 1);
    setPhase("scanning");
  };

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  /* ── CHECKLIST ── */
  if (phase === "checklist") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
            Remediation Required
          </p>
          <h1 className="font-serif text-4xl font-bold text-stone-800 mb-3">
            Before You Try Again
          </h1>
          <p className="text-stone-500 text-sm">
            Please complete all steps below. The scanner will know if you didn&apos;t.
          </p>
        </div>

        <div className="space-y-6 mb-10">
          {checklistItems.map((item) => (
            <div
              key={item.id}
              className={`border rounded-xl p-5 transition-colors ${
                checked[item.id]
                  ? "border-green-200 bg-green-50"
                  : "border-stone-100 bg-white"
              }`}
            >
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!checked[item.id]}
                  onChange={() => toggle(item.id)}
                  className="mt-1 w-4 h-4 accent-stone-800 shrink-0 cursor-pointer"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="font-semibold text-stone-800">{item.title}</h3>
                  </div>
                  <p className="text-stone-500 text-sm mb-3">{item.description}</p>

                  {/* Links */}
                  {item.links && (
                    <ul className="space-y-1">
                      {item.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Hiccup steps */}
                  {item.steps && (
                    <ol className="list-decimal list-inside space-y-1 text-sm text-stone-500">
                      {item.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleReady}
            disabled={!allChecked}
            className={`px-10 py-4 text-sm uppercase tracking-widest transition-colors ${
              allChecked
                ? "bg-stone-800 text-white hover:bg-stone-700 cursor-pointer"
                : "bg-stone-100 text-stone-400 cursor-not-allowed"
            }`}
          >
            {allChecked ? "I'm Ready — Scan Me Again" : "Complete All Steps to Continue"}
          </button>
          {!allChecked && (
            <p className="text-stone-400 text-xs mt-3 italic">
              {checklistItems.filter((i) => !checked[i.id]).length} step(s) remaining
            </p>
          )}
        </div>
      </div>
    );
  }

  /* ── SCANNING ── */
  if (phase === "scanning") {
    return (
      <>
        <style>{`
          @keyframes scanline {
            0%   { top: 0%; }
            100% { top: calc(100% - 2px); }
          }
          .scan-line {
            position: absolute; left: 0; right: 0; height: 2px;
            background: #4ade80;
            box-shadow: 0 0 10px #4ade80, 0 0 20px #4ade80;
            animation: scanline 1.4s linear infinite;
          }
        `}</style>
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 font-mono text-green-400">
          <p className="text-xs uppercase tracking-[0.3em] mb-1 opacity-50">
            BIOMETRIC RSVP VERIFICATION SYSTEM v2.1
            {attempt > 1 && ` — ATTEMPT ${attempt}`}
          </p>
          <p className="text-xs uppercase tracking-[0.3em] mb-8 opacity-30">
            PLEASE HOLD STILL — FACIAL ANALYSIS IN PROGRESS
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Face box */}
            <div className="flex flex-col items-center">
              <div
                className="relative w-44 h-56 border border-green-400 overflow-hidden"
                style={{ boxShadow: "0 0 24px #4ade8060" }}
              >
                {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
                  <div key={i} className={`absolute w-4 h-4 border-green-300 ${cls}`} />
                ))}
                <svg viewBox="0 0 100 130" className="absolute inset-0 w-full h-full opacity-20 p-4">
                  <ellipse cx="50" cy="55" rx="34" ry="44" stroke="#4ade80" strokeWidth="1.5" fill="none" />
                  <line x1="16" y1="62" x2="26" y2="62" stroke="#4ade80" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="74" y1="62" x2="84" y2="62" stroke="#4ade80" strokeWidth="0.8" strokeDasharray="2 2" />
                  <ellipse cx="36" cy="48" rx="5" ry="4" stroke="#4ade80" strokeWidth="1" fill="none" />
                  <ellipse cx="64" cy="48" rx="5" ry="4" stroke="#4ade80" strokeWidth="1" fill="none" />
                  <path d="M 50 52 L 46 65 Q 50 68 54 65 Z" stroke="#4ade80" strokeWidth="0.8" fill="none" />
                  <path d="M 38 74 Q 50 84 62 74" stroke="#4ade80" strokeWidth="1.5" fill="none" />
                  <path d="M 16 60 Q 18 90 50 100 Q 82 90 84 60" stroke="#4ade80" strokeWidth="0.8" fill="none" opacity="0.5" />
                  <line x1="44" y1="99" x2="36" y2="128" stroke="#4ade80" strokeWidth="1" />
                  <line x1="56" y1="99" x2="64" y2="128" stroke="#4ade80" strokeWidth="1" />
                  <line x1="36" y1="128" x2="64" y2="128" stroke="#4ade80" strokeWidth="1" />
                  <line x1="20" y1="40" x2="80" y2="40" stroke="#4ade80" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.4" />
                  <line x1="20" y1="62" x2="80" y2="62" stroke="#4ade80" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.4" />
                  <line x1="20" y1="74" x2="80" y2="74" stroke="#4ade80" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.4" />
                </svg>
                <div className="scan-line" />
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, #4ade80 0px, transparent 1px, transparent 12px), repeating-linear-gradient(90deg, #4ade80 0px, transparent 1px, transparent 12px)" }} />
              </div>
              <div className="mt-3 text-xs opacity-40 text-center space-y-0.5">
                {progress > 20 && <p>↑ cheekbone width: {(138 + progress * 0.3).toFixed(1)}mm</p>}
                {progress > 40 && <p>↑ jawline angle: {(82 + progress * 0.1).toFixed(1)}°</p>}
                {progress > 60 && <p>↑ inter-ocular dist: {(61 + progress * 0.05).toFixed(1)}mm</p>}
              </div>
            </div>

            {/* Readouts */}
            <div className="w-72">
              <div className="mb-5">
                <div className="flex justify-between text-xs mb-1">
                  <span className="opacity-50 uppercase tracking-widest">
                    {progress < 30 ? "INITIALIZING" : progress < 60 ? "DEEP SCAN" : progress < 90 ? "CROSS-REFERENCING" : "FINALIZING"}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-green-950 h-1">
                  <div className="bg-green-400 h-1 transition-all duration-75" style={{ width: `${progress}%`, boxShadow: "0 0 6px #4ade80" }} />
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {readouts.map((r) => progress >= r.threshold && (
                  <div key={r.label} className="flex justify-between gap-4 opacity-80">
                    <span className="text-green-600 shrink-0">{r.label}</span>
                    <span className={`${r.color} text-right`}>{r.getValue(progress)}</span>
                  </div>
                ))}
              </div>

              {progress > 40 && (
                <div className="mt-5 border border-green-900 p-3 text-xs opacity-40 space-y-1">
                  <p className="opacity-60 uppercase tracking-widest mb-2">System Log</p>
                  {progress > 40 && <p>&gt; cheekbone_scan.exe — complete</p>}
                  {progress > 55 && <p>&gt; cross-referencing brow database...</p>}
                  {progress > 65 && <p>&gt; nasal_ratio.dll loaded</p>}
                  {progress > 75 && <p>&gt; WARNING: anomalous vibe signature</p>}
                  {progress > 85 && <p>&gt; escalating to horniness module...</p>}
                  {attempt > 1 && progress > 70 && <p className="text-yellow-500">&gt; prior remediation noted — re-evaluating...</p>}
                  {attempt > 1 && progress > 88 && <p className="text-red-500">&gt; remediation insufficient — same result expected</p>}
                  {progress > 93 && <p className="text-red-500">&gt; THRESHOLD EXCEEDED — initiating denial</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  /* ── DENIED ── */
  return (
    <>
      <style>{`
        @keyframes strobe {
          0%, 49%  { background-color: #dc2626; }
          50%, 100% { background-color: #450a0a; }
        }
        @keyframes blink {
          0%, 49%  { opacity: 1; }
          50%, 100% { opacity: 0.15; }
        }
        @keyframes glitch {
          0%   { transform: skewX(0deg) translateX(0px); }
          20%  { transform: skewX(-2deg) translateX(-4px); }
          40%  { transform: skewX(2deg) translateX(4px); }
          60%  { transform: skewX(-1deg) translateX(-2px); }
          80%  { transform: skewX(1deg) translateX(2px); }
          100% { transform: skewX(0deg) translateX(0px); }
        }
        .strobe-bg { animation: strobe 0.25s step-end infinite; }
        .blink-text { animation: blink 0.25s step-end infinite; }
        .glitch-text { animation: glitch 0.3s step-end infinite; }
      `}</style>
      <div className="strobe-bg min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="blink-text">
          <div className="text-8xl md:text-9xl mb-6">🚨</div>
          <h1
            className="glitch-text font-serif font-bold text-white mb-4"
            style={{ fontSize: "clamp(3rem, 12vw, 8rem)", textShadow: "4px 4px 0px #7f1d1d, -4px -4px 0px #7f1d1d", lineHeight: 1 }}
          >
            RSVP
            <br />
            DENIED
          </h1>
          <p
            className="font-bold uppercase text-white tracking-[0.2em] mb-4"
            style={{ fontSize: "clamp(1.5rem, 6vw, 4rem)", textShadow: "2px 2px 0px #7f1d1d" }}
          >
            TOO HORNY
          </p>
          {attempt > 1 && (
            <p className="text-red-200 text-sm mb-4 opacity-80">
              Attempt {attempt} of ∞. Remediation was noted. It was not enough.
            </p>
          )}
          <p className="text-red-200 text-xs uppercase tracking-[0.3em] opacity-70 mb-10">
            Your horniness level exceeded acceptable thresholds.
            <br />
            Please try again when you have calmed down.
          </p>
        </div>

        <button
          onClick={handleTryAgain}
          className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white text-sm uppercase tracking-widest border border-white/40 transition-colors backdrop-blur-sm"
        >
          I Have Calmed Down — Try Again
        </button>
      </div>
    </>
  );
}
