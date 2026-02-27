"use client";

import { useState, useEffect } from "react";

const SCAN_DURATION = 5000;

// Each entry unlocks at a certain % of scan progress
const readouts = [
  { threshold: 0,  label: "Identity Match",             getValue: (p: number) => p > 15 ? "CONFIRMED" : "VERIFYING...",           color: "text-green-300" },
  { threshold: 15, label: "Cheekbone Prominence",        getValue: (p: number) => p > 25 ? "EXCEPTIONALLY HIGH" : "MEASURING...",   color: "text-green-300" },
  { threshold: 25, label: "Jawline Integrity",           getValue: (p: number) => p > 35 ? "CHISELED · PASS" : "ANALYZING...",      color: "text-green-300" },
  { threshold: 35, label: "Brow Ridge Depth",            getValue: (p: number) => p > 45 ? "BROODING · NOTED" : "SCANNING...",      color: "text-green-300" },
  { threshold: 45, label: "Nasal Symmetry",              getValue: (p: number) => p > 55 ? "87.3% SYMMETRIC" : "COMPUTING...",      color: "text-green-300" },
  { threshold: 55, label: "Lip-to-Nose Ratio",           getValue: (p: number) => p > 63 ? "WITHIN NORMS" : "CALIBRATING...",       color: "text-green-300" },
  { threshold: 63, label: "Vibe Assessment",             getValue: (p: number) => p > 72 ? "DANGEROUSLY HIGH" : "RUNNING...",       color: "text-yellow-400" },
  { threshold: 72, label: "Pupillary Dilation",          getValue: (p: number) => p > 80 ? "EXTREMELY DILATED" : "CHECKING...",     color: "text-yellow-400" },
  { threshold: 80, label: "Eligible Guest",              getValue: (p: number) => p > 88 ? "DETECTED" : "VERIFYING...",             color: "text-green-300" },
  { threshold: 88, label: "⚠ Horniness Level",           getValue: (p: number) => {
    if (p < 88) return "PENDING...";
    if (p < 94) return `${Math.floor((p - 88) * 14)}% — ELEVATED`;
    return "100% — CRITICAL ⚠";
  }, color: "text-red-400" },
];

export default function RSVP() {
  const [phase, setPhase] = useState<"scanning" | "denied">("scanning");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();

    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / SCAN_DURATION) * 100, 100);
      setProgress(Math.floor(pct));

      if (elapsed >= SCAN_DURATION) {
        clearInterval(tick);
        setPhase("denied");
      }
    }, 50);

    return () => clearInterval(tick);
  }, []);

  return (
    <>
      <style>{`
        @keyframes scanline {
          0%   { top: 0%; }
          100% { top: calc(100% - 2px); }
        }
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
        .scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: #4ade80;
          box-shadow: 0 0 10px #4ade80, 0 0 20px #4ade80;
          animation: scanline 1.4s linear infinite;
        }
        .strobe-bg { animation: strobe 0.25s step-end infinite; }
        .blink-text { animation: blink 0.25s step-end infinite; }
        .glitch-text { animation: glitch 0.3s step-end infinite; }
      `}</style>

      {phase === "scanning" ? (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 font-mono text-green-400">
          <p className="text-xs uppercase tracking-[0.3em] mb-1 opacity-50">
            BIOMETRIC RSVP VERIFICATION SYSTEM v2.1
          </p>
          <p className="text-xs uppercase tracking-[0.3em] mb-8 opacity-30">
            PLEASE HOLD STILL — FACIAL ANALYSIS IN PROGRESS
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

            {/* Face scan box */}
            <div className="flex flex-col items-center">
              <div
                className="relative w-44 h-56 border border-green-400 overflow-hidden"
                style={{ boxShadow: "0 0 24px #4ade8060" }}
              >
                {[
                  "top-0 left-0 border-t border-l",
                  "top-0 right-0 border-t border-r",
                  "bottom-0 left-0 border-b border-l",
                  "bottom-0 right-0 border-b border-r",
                ].map((cls, i) => (
                  <div key={i} className={`absolute w-4 h-4 border-green-300 ${cls}`} />
                ))}

                <svg viewBox="0 0 100 130" className="absolute inset-0 w-full h-full opacity-20 p-4">
                  <ellipse cx="50" cy="55" rx="34" ry="44" stroke="#4ade80" strokeWidth="1.5" fill="none" />
                  {/* cheekbones */}
                  <line x1="16" y1="62" x2="26" y2="62" stroke="#4ade80" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="74" y1="62" x2="84" y2="62" stroke="#4ade80" strokeWidth="0.8" strokeDasharray="2 2" />
                  {/* eyes */}
                  <ellipse cx="36" cy="48" rx="5" ry="4" stroke="#4ade80" strokeWidth="1" fill="none" />
                  <ellipse cx="64" cy="48" rx="5" ry="4" stroke="#4ade80" strokeWidth="1" fill="none" />
                  {/* nose */}
                  <path d="M 50 52 L 46 65 Q 50 68 54 65 Z" stroke="#4ade80" strokeWidth="0.8" fill="none" />
                  {/* mouth */}
                  <path d="M 38 74 Q 50 84 62 74" stroke="#4ade80" strokeWidth="1.5" fill="none" />
                  {/* jaw */}
                  <path d="M 16 60 Q 18 90 50 100 Q 82 90 84 60" stroke="#4ade80" strokeWidth="0.8" fill="none" opacity="0.5" />
                  {/* neck */}
                  <line x1="44" y1="99" x2="36" y2="128" stroke="#4ade80" strokeWidth="1" />
                  <line x1="56" y1="99" x2="64" y2="128" stroke="#4ade80" strokeWidth="1" />
                  <line x1="36" y1="128" x2="64" y2="128" stroke="#4ade80" strokeWidth="1" />
                  {/* measurement lines */}
                  <line x1="20" y1="40" x2="80" y2="40" stroke="#4ade80" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.4" />
                  <line x1="20" y1="62" x2="80" y2="62" stroke="#4ade80" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.4" />
                  <line x1="20" y1="74" x2="80" y2="74" stroke="#4ade80" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.4" />
                </svg>

                <div className="scan-line" />

                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, #4ade80 0px, transparent 1px, transparent 12px), repeating-linear-gradient(90deg, #4ade80 0px, transparent 1px, transparent 12px)",
                  }}
                />
              </div>

              {/* Labels on face */}
              <div className="mt-3 text-xs opacity-40 text-center space-y-0.5">
                {progress > 15 && <p>↑ cheekbone width: {(138 + progress * 0.3).toFixed(1)}mm</p>}
                {progress > 35 && <p>↑ jawline angle: {(82 + progress * 0.1).toFixed(1)}°</p>}
                {progress > 55 && <p>↑ inter-ocular dist: {(61 + progress * 0.05).toFixed(1)}mm</p>}
              </div>
            </div>

            {/* Readouts panel */}
            <div className="w-72">
              {/* Progress bar */}
              <div className="mb-5">
                <div className="flex justify-between text-xs mb-1">
                  <span className="opacity-50 uppercase tracking-widest">
                    {progress < 30 ? "INITIALIZING" : progress < 60 ? "DEEP SCAN" : progress < 90 ? "CROSS-REFERENCING" : "FINALIZING"}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-green-950 h-1">
                  <div
                    className="bg-green-400 h-1 transition-all duration-75"
                    style={{ width: `${progress}%`, boxShadow: "0 0 6px #4ade80" }}
                  />
                </div>
              </div>

              {/* Readout rows */}
              <div className="space-y-2 text-xs">
                {readouts.map((r) => (
                  progress >= r.threshold && (
                    <div key={r.label} className="flex justify-between gap-4 opacity-80">
                      <span className="text-green-600 shrink-0">{r.label}</span>
                      <span className={`${r.color} text-right`}>{r.getValue(progress)}</span>
                    </div>
                  )
                ))}
              </div>

              {/* Live log */}
              {progress > 40 && (
                <div className="mt-5 border border-green-900 p-3 text-xs opacity-40 space-y-1">
                  <p className="opacity-60 uppercase tracking-widest mb-2">System Log</p>
                  {progress > 40 && <p>&gt; cheekbone_scan.exe — complete</p>}
                  {progress > 55 && <p>&gt; cross-referencing brow database...</p>}
                  {progress > 65 && <p>&gt; nasal_ratio.dll loaded</p>}
                  {progress > 75 && <p>&gt; WARNING: anomalous vibe signature</p>}
                  {progress > 85 && <p>&gt; escalating to horniness module...</p>}
                  {progress > 93 && <p className="text-red-500">&gt; THRESHOLD EXCEEDED — initiating denial</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="strobe-bg min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="blink-text">
            <div className="text-8xl md:text-9xl mb-6">🚨</div>
            <h1
              className="glitch-text font-serif font-bold text-white mb-4"
              style={{
                fontSize: "clamp(3rem, 12vw, 8rem)",
                textShadow: "4px 4px 0px #7f1d1d, -4px -4px 0px #7f1d1d",
                lineHeight: 1,
              }}
            >
              RSVP
              <br />
              DENIED
            </h1>
            <p
              className="font-bold uppercase text-white tracking-[0.2em] mb-8"
              style={{
                fontSize: "clamp(1.5rem, 6vw, 4rem)",
                textShadow: "2px 2px 0px #7f1d1d",
              }}
            >
              TOO HORNY
            </p>
            <p className="text-red-200 text-xs uppercase tracking-[0.3em] opacity-70">
              Your horniness level exceeded acceptable thresholds.
              <br />
              Please try again when you have calmed down.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
