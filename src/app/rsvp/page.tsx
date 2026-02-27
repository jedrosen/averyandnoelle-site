"use client";

import { useState } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    meal: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="mb-6 text-5xl">💌</div>
        <h2 className="font-serif text-4xl font-bold text-stone-800 mb-4">
          {form.attending === "yes" ? "See you there!" : "We'll miss you."}
        </h2>
        <p className="text-stone-500">
          {form.attending === "yes"
            ? `We can't wait to celebrate with you, ${form.name}!`
            : `Thanks for letting us know, ${form.name}. We'll save you a Slurpee.`}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          Kindly reply by [DATE TBD]
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">RSVP</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-stone-400 bg-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
            Will you be attending?
          </label>
          <div className="flex gap-4">
            {["yes", "no"].map((option) => (
              <label
                key={option}
                className={`flex-1 border px-4 py-3 text-center cursor-pointer transition-colors ${
                  form.attending === option
                    ? "border-stone-800 bg-stone-800 text-white"
                    : "border-stone-200 text-stone-600 hover:border-stone-400"
                }`}
              >
                <input
                  type="radio"
                  name="attending"
                  value={option}
                  checked={form.attending === option}
                  onChange={(e) =>
                    setForm({ ...form, attending: e.target.value })
                  }
                  className="sr-only"
                />
                {option === "yes" ? "Joyfully accepts" : "Regretfully declines"}
              </label>
            ))}
          </div>
        </div>

        {form.attending === "yes" && (
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
              Meal Preference
            </label>
            <select
              value={form.meal}
              onChange={(e) => setForm({ ...form, meal: e.target.value })}
              className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-stone-400 bg-white"
            >
              <option value="">Select a meal...</option>
              <option value="chicken">Chicken</option>
              <option value="fish">Fish</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="hot-dog">7-Eleven Hot Dog</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
            Message for the Couple (optional)
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            className="w-full border border-stone-200 px-4 py-3 text-stone-800 focus:outline-none focus:border-stone-400 bg-white resize-none"
            placeholder="Words of wisdom, bad jokes, etc."
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-stone-800 text-white text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors"
        >
          Submit RSVP
        </button>
      </form>
    </div>
  );
}
