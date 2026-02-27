export default function OurStory() {
  const events = [
    {
      year: "The Beginning",
      title: "How We Met",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The rest is history.",
    },
    {
      year: "The Middle",
      title: "Adventures Together",
      description:
        "From mountains to cities, we've explored the world side by side.",
    },
    {
      year: "The Proposal",
      title: "She Said Yes",
      description:
        "Under the stars, with nothing but love and bad jokes, the question was asked.",
    },
    {
      year: "Now",
      title: "Getting Married",
      description:
        "And now here we are, inviting our favorite people to witness it all.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          A love story
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">
          Our Story
        </h1>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-200" />

        <div className="space-y-12">
          {events.map((event) => (
            <div key={event.year} className="pl-12 relative">
              <div className="absolute left-[13px] top-1.5 w-2.5 h-2.5 rounded-full bg-stone-400 border-2 border-white" />
              <span className="text-xs uppercase tracking-widest text-stone-400 font-sans">
                {event.year}
              </span>
              <h2 className="font-serif text-2xl text-stone-800 mt-1 mb-2">
                {event.title}
              </h2>
              <p className="text-stone-500 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="font-serif text-xl text-stone-400 italic">
          More details coming soon...
        </p>
      </div>
    </div>
  );
}
