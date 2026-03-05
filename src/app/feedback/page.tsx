"use client";

import { useState } from "react";

const CHECKBOXES = [
  "My suggestion was objectively stupid and I knew it when I typed it",
  "I have zero experience building websites and it shows",
  "This website is already a masterpiece and I was blinded by jealousy",
  "I understand that nobody asked for my opinion",
  "I accept that my feedback has been permanently deleted",
  "I acknowledge that I have wasted everyone's time including my own",
  "I promise to think before I type next time, which I clearly did not do here",
];

type Step = "form" | "roast" | "apologize" | "done";

export default function FeedbackPage() {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [section, setSection] = useState("General");
  const [suggestion, setSuggestion] = useState("");
  const [priority, setPriority] = useState("Low — Nice to have");
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [apology, setApology] = useState("");
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const allChecked =
    CHECKBOXES.every((_, i) => checked[i]) && apology.trim().length >= 20;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "submission", name, section, suggestion, priority }),
    });
    const data = await res.json();
    setSubmissionId(data.id ?? null);
    setStep("roast");
  }

  function handleDismissAttempt() {
    setStep("apologize");
  }

  async function handleFinalClose() {
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "apology",
        submissionId,
        name,
        section,
        suggestion,
        apology,
        boxesChecked: CHECKBOXES,
      }),
    });
    setStep("done");
    setName("");
    setSection("General");
    setSuggestion("");
    setPriority("Low — Nice to have");
    setChecked({});
    setApology("");
    setSubmissionId(null);
  }

  return (
    <>
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.12); }
        }
        @keyframes strobe-bg {
          0%, 100% { background-color: #000; }
          50%      { background-color: #180000; }
        }
        @keyframes sub-flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .anim-flash-text {
          animation: pulse-scale 1.4s ease-in-out infinite;
          display: inline-block;
          color: #ef4444;
        }
        .anim-strobe-bg {
          animation: strobe-bg 1.2s ease-in-out infinite;
        }
        .anim-shake {
          /* no shake */
        }
        .anim-sub-flash {
          animation: sub-flash 1.2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-xl mx-auto px-4 py-20">
        {/* ── FORM ── */}
        {step === "form" && (
          <>
            <div className="text-center mb-12">
              <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
                We&apos;re listening
              </p>
              <h1 className="font-serif text-5xl font-bold text-stone-800">
                Website Feedback
              </h1>
              <p className="text-stone-400 text-sm mt-3">
                Help us improve this site. All feedback is carefully reviewed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First and last name"
                  required
                  className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                  Which section?
                </label>
                <select
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-stone-400 transition-colors bg-white"
                >
                  {["General", "Homepage", "Registry", "Schedule", "Travel", "Gallery", "RSVP", "Guest List", "DJ", "Navigation"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                  Your Suggestion
                </label>
                <textarea
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="Describe your feedback in detail..."
                  required
                  rows={5}
                  className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                  Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full border border-stone-200 rounded px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-stone-400 transition-colors bg-white"
                >
                  <option>Low — Nice to have</option>
                  <option>Medium — Should fix</option>
                  <option>High — Blocking issue</option>
                  <option>Critical — Site is broken</option>
                </select>
              </div>

              <div className="pt-2">
                <p className="text-stone-400 text-xs mb-3">
                  By submitting, you confirm this feedback is genuine and
                  constructive.
                </p>
                <button
                  type="submit"
                  className="w-full bg-stone-800 text-white text-xs uppercase tracking-widest py-3.5 hover:bg-stone-700 transition-colors rounded"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </>
        )}

        {/* ── DONE ── */}
        {step === "done" && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🙏</div>
            <h2 className="font-serif text-3xl text-stone-800 mb-3">
              Apology Accepted
            </h2>
            <p className="text-stone-500 text-sm">
              We hope you have learned something today.
            </p>
          </div>
        )}
      </div>

      {/* ── ROAST MODAL ── */}
      {step === "roast" && (
        <div className="fixed inset-0 z-[60] anim-strobe-bg flex items-center justify-center p-4">
          <div className="anim-shake max-w-lg w-full bg-black border-2 border-red-600 rounded-lg p-8 text-center relative">
            {/* Dismiss attempt */}
            <button
              onClick={handleDismissAttempt}
              className="absolute top-3 right-4 text-stone-500 hover:text-white text-2xl leading-none transition-colors"
              aria-label="Close"
            >
              ×
            </button>

            <div className="text-5xl mb-4">🚨🚨🚨</div>

            <h2 className="anim-flash-text font-serif text-2xl md:text-3xl font-bold uppercase mb-2 leading-tight">
              You think you&apos;re better than me, huh?
            </h2>

            <p className="anim-sub-flash text-red-400 text-xs uppercase tracking-widest mb-6">
              ⚠ &nbsp; feedback received &nbsp; ⚠
            </p>

            <p className="text-stone-300 text-sm mb-4 leading-relaxed">
              {name ? (
                <><span className="text-white font-bold">{name}</span>, let me get this straight. </>
              ) : (
                "Let me get this straight. "
              )}
              You visited <em>my</em> wedding website — a site I did not ask you to critique — opened the feedback form, selected{" "}
              <span className="text-yellow-400 font-bold">{section}</span>, and decided the world needed your opinion.
            </p>

            {suggestion && (
              <div className="bg-stone-900 border border-red-900 rounded-lg p-4 mb-4 text-left">
                <p className="text-xs uppercase tracking-widest text-red-600 mb-2">
                  Exhibit A: Your &ldquo;Feedback&rdquo;
                </p>
                <p className="text-stone-300 text-sm italic leading-relaxed">
                  &ldquo;{suggestion}&rdquo;
                </p>
              </div>
            )}

            <p className="text-stone-400 text-sm mb-3 leading-relaxed">
              {suggestion
                ? `"${suggestion.split(" ").slice(0, 5).join(" ")}..." — I'm going to need you to sit with that for a moment. That is genuinely one of the worst ideas I have ever read on any website, in any format, in any language.`
                : "You couldn't even commit to a bad idea. That's somehow worse."}
            </p>

            <p className="text-stone-500 text-sm mb-6 leading-relaxed">
              This website was built with love, craft, and intentionality. Your
              feedback has been screenshotted, forwarded to zero people, and will
              be discussed at the wedding as a cautionary tale.
            </p>

            <button
              onClick={handleDismissAttempt}
              className="px-6 py-2.5 border border-stone-600 text-stone-400 text-xs uppercase tracking-widest hover:border-red-600 hover:text-red-400 transition-colors rounded"
            >
              I want to leave
            </button>
          </div>
        </div>
      )}

      {/* ── APOLOGY GATE ── */}
      {step === "apologize" && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 overflow-y-auto">
          <div className="max-w-md w-full bg-stone-950 border border-stone-700 rounded-lg p-8 my-8">
            <h2 className="font-serif text-2xl font-bold text-white mb-2 text-center">
              Not so fast.
            </h2>
            <p className="text-stone-400 text-sm text-center mb-8">
              Before you leave, please acknowledge the following and provide a
              written apology. All fields are required.
            </p>

            <div className="space-y-4 mb-8">
              {CHECKBOXES.map((label, i) => (
                <label
                  key={i}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={!!checked[i]}
                    onChange={(e) =>
                      setChecked((prev) => ({ ...prev, [i]: e.target.checked }))
                    }
                    className="mt-0.5 shrink-0 accent-red-500"
                  />
                  <span
                    className={`text-sm leading-snug transition-colors ${
                      checked[i] ? "text-stone-400 line-through" : "text-stone-300"
                    }`}
                  >
                    {label}
                  </span>
                </label>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                Written Apology{" "}
                <span className="text-stone-600 normal-case">
                  (minimum 20 characters)
                </span>
              </label>
              <textarea
                value={apology}
                onChange={(e) => setApology(e.target.value)}
                placeholder="I am deeply sorry for..."
                rows={4}
                className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2.5 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-stone-500 transition-colors resize-none"
              />
              <p className={`text-xs mt-1 ${apology.trim().length >= 20 ? "text-green-500" : "text-stone-600"}`}>
                {apology.trim().length} / 20 characters minimum
              </p>
            </div>

            <button
              onClick={handleFinalClose}
              disabled={!allChecked}
              className={`w-full py-3 text-xs uppercase tracking-widest rounded transition-colors ${
                allChecked
                  ? "bg-red-700 hover:bg-red-600 text-white cursor-pointer"
                  : "bg-stone-800 text-stone-600 cursor-not-allowed"
              }`}
            >
              {allChecked ? "Submit Apology & Leave" : "Check all boxes to continue"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
