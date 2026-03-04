"use client";

import { useState } from "react";

export default function FeedbackTab() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [roasted, setRoasted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setRoasted(true);
  }

  function handleClose() {
    setRoasted(false);
    setOpen(false);
    setName("");
    setSuggestion("");
  }

  return (
    <>
      {/* Floating tab */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-stone-800 text-white text-xs uppercase tracking-widest py-3 px-2 rounded-l-md shadow-lg hover:bg-stone-700 transition-colors"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        Feedback
      </button>

      {/* Panel backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-xl text-stone-800">Share Feedback</h2>
              <p className="text-stone-400 text-xs mt-0.5">We value your input.</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-stone-400 hover:text-stone-600 transition-colors text-xl leading-none"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Smith"
                required
                className="w-full border border-stone-200 rounded px-3 py-2 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                Your Suggestion
              </label>
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="How could we improve our wedding?"
                required
                rows={4}
                className="w-full border border-stone-200 rounded px-3 py-2 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-1.5">
                How important is this?
              </label>
              <select className="w-full border border-stone-200 rounded px-3 py-2 text-sm text-stone-600 focus:outline-none focus:border-stone-400 transition-colors bg-white">
                <option>Nice to have</option>
                <option>Important</option>
                <option>Critical</option>
              </select>
            </div>

            <div className="mt-auto pt-4 border-t border-stone-100">
              <p className="text-stone-400 text-xs mb-3">
                All feedback is reviewed personally by the couple.
              </p>
              <button
                type="submit"
                className="w-full bg-stone-800 text-white text-xs uppercase tracking-widest py-3 hover:bg-stone-700 transition-colors rounded"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Roast modal */}
      {roasted && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6">
          <div className="bg-white max-w-md w-full rounded-lg p-8 text-center shadow-2xl">
            <div className="text-4xl mb-4">🚨</div>
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">
              You think you&apos;re better than me?
            </h2>
            <p className="text-stone-600 text-sm mb-4 leading-relaxed">
              {name ? `${name}, ` : ""}I just want to make sure I understand what happened here. You came to{" "}
              <em>my</em> wedding website and decided to leave a suggestion.
            </p>
            {suggestion && (
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 mb-4 text-left">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Your &ldquo;idea&rdquo;</p>
                <p className="text-stone-700 text-sm italic">&ldquo;{suggestion}&rdquo;</p>
              </div>
            )}
            <p className="text-stone-600 text-sm mb-3 leading-relaxed">
              {suggestion
                ? `"${suggestion}" — truly incredible. I have planned this wedding for months and you waltz in with that. That's not a suggestion, that's a cry for help.`
                : "You didn't even have the courage to write anything. Remarkable."}
            </p>
            <p className="text-stone-500 text-sm mb-6 leading-relaxed">
              Your feedback has been received, printed out, and will be used to
              stabilize a wobbly table at the reception. Thank you for your service.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-stone-800 text-white text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors rounded"
            >
              I deserve this
            </button>
          </div>
        </div>
      )}
    </>
  );
}
