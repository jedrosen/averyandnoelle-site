const SEVEN_ELEVEN_URL = "https://www.google.com/maps/search/7-Eleven+near+me";

type Event = {
  time: string;
  title: string;
  description: React.ReactNode;
};

import React from "react";

const events: Event[] = [
  {
    time: "3:00 PM",
    title: "Guests Arrive",
    description: "Find your seats, grab a drink, pretend you know everyone.",
  },
  {
    time: "3:05 PM",
    title: "Avery Stuffs His Pockets with Quarters",
    description: "He needs to make weight. Please do not ask questions.",
  },
  {
    time: "3:29 PM",
    title: "Avery & Ben Kaplan Freaky Friday Back Into Each Other's Bodies",
    description: "One minute buffer before the ceremony. They've done this before.",
  },
  {
    time: "3:30 PM",
    title: "Ceremony",
    description: "The main event. Please silence your phones. Please.",
  },
  {
    time: "4:00 PM",
    title: "Cocktail Hour",
    description: "Mingle, drink, and photograph the couple being photographed.",
  },
  {
    time: "5:30 PM",
    title: "Dinner",
    description: (
      <>
        World-class catering.{" "}
        <a
          href={SEVEN_ELEVEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-1.5 bg-stone-800 text-white text-xs uppercase tracking-widest hover:bg-stone-600 transition-colors rounded-sm"
        >
          View Full Menu →
        </a>
      </>
    ),
  },
  {
    time: "7:00 PM",
    title: "First Dance",
    description: "Opus by Eric Prydz. Obviously.",
  },
  {
    time: "7:15 PM",
    title: "Dancing",
    description: "More Opus by Eric Prydz.",
  },
  {
    time: "11:00 PM",
    title: "Last Song",
    description: "Opus by Eric Prydz.",
  },
  {
    time: "11:01 PM",
    title: "Run",
    description: "",
  },
  {
    time: "11:02 PM",
    title: "Hide",
    description: "",
  },
];

export default function Schedule() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          Day Of
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">
          Schedule
        </h1>
        <p className="text-stone-400 mt-3 text-sm">[DATE TBD] · Triple S Ranch</p>
      </div>

      <div className="space-y-0">
        {events.map((event, i) => (
          <div
            key={i}
            className="flex gap-6 py-6 border-b border-stone-100 last:border-0"
          >
            <div className="w-20 shrink-0 text-right">
              <span className="text-sm text-stone-400 font-mono">{event.time}</span>
            </div>
            <div>
              <h3 className="font-serif text-lg text-stone-800">{event.title}</h3>
              {event.description && (
                <p className="text-stone-500 text-sm mt-0.5">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-stone-400 text-xs italic mt-10">
        Times subject to change. Vibes subject to upgrade.
      </p>
    </div>
  );
}
