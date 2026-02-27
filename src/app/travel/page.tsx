const routes = [
  {
    emoji: "✈️",
    mode: "By Plane",
    rating: "Recommended",
    ratingColor: "bg-green-100 text-green-700",
    time: "~14–16 hrs",
    details: [
      { label: "Ibiza → Madrid (IBZ → MAD)", time: "1 hr 15 min" },
      { label: "Madrid → San Francisco (MAD → SFO)", time: "11 hrs" },
      { label: "SFO → Calistoga (rental car, praying on 101)", time: "1 hr 45 min" },
      { label: "Crying in the rental car parking lot", time: "30 min" },
    ],
    tip: "Book the aisle seat. You will need to pee.",
    bar: 95,
  },
  {
    emoji: "🛳️",
    mode: "By Boat",
    rating: "Adventurous",
    ratingColor: "bg-blue-100 text-blue-700",
    time: "~18–22 days",
    details: [
      { label: "Ibiza → Strait of Gibraltar", time: "2 days" },
      { label: "Atlantic crossing (pray for wind)", time: "14–16 days" },
      { label: "Panama Canal (fees, paperwork, existential dread)", time: "1 day" },
      { label: "Pacific coast to San Francisco Bay", time: "3 days" },
      { label: "Uber from the marina to Calistoga", time: "1 hr 30 min" },
    ],
    tip: "Pack Dramamine. Pack more Dramamine. Pack a third container of Dramamine.",
    bar: 40,
  },
  {
    emoji: "🏊 🚶",
    mode: "Swimming + Walking",
    rating: "Not Recommended",
    ratingColor: "bg-red-100 text-red-700",
    time: "~4–7 years",
    details: [
      { label: "Swim: Ibiza → mainland Spain", time: "~18 hrs (tides permitting)" },
      { label: "Walk: Spain → Portugal coast", time: "~8 days" },
      { label: "Swim: Atlantic Ocean (5,570 km)", time: "Estimated 3–4 years" },
      { label: "Walk: Miami → Calistoga, CA on foot", time: "~14 months" },
      { label: "Collapse at venue entrance", time: "Immediate" },
    ],
    tip: "Bring a wetsuit, 800,000 calories, and a deep sense of purpose. Also: sharks.",
    bar: 4,
  },
];

const detoxTips = [
  {
    emoji: "💧",
    title: "Hydrate Aggressively",
    body: "Drink water like it owes you money. MDMA depletes you — flush it out. Aim for 3–4L/day but don't overdo it. Hyponatremia is also a thing.",
  },
  {
    emoji: "🥦",
    title: "Eat Real Food",
    body: "Your liver is doing its best. Help it with leafy greens, lean protein, and complex carbs. Avoid alcohol — it competes for the same metabolic pathways and makes everything worse.",
  },
  {
    emoji: "😴",
    title: "Sleep. Seriously.",
    body: "MDMA torches serotonin. Sleep is how you get it back. 8–9 hrs minimum for 3–5 days post-event. No late nights, no exceptions.",
  },
  {
    emoji: "🏃",
    title: "Light Exercise",
    body: "A 30-min jog increases metabolism and helps your body process metabolites faster. Don't go insane at the gym — you're recovering, not training for a triathlon.",
  },
  {
    emoji: "📅",
    title: "Know Your Timeline",
    body: "MDMA is typically detectable in urine for 3–5 days in casual users, up to 7 days in heavy/frequent use. Hair follicle tests can detect it for 90 days. Plan accordingly.",
  },
  {
    emoji: "🚫",
    title: "Stop Taking It",
    body: "This one is load-bearing.",
  },
];

export default function Travel() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          A Comprehensive Travel Study
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800 mb-4">
          Ibiza → Calistoga, CA
        </h1>
        <p className="text-stone-500 text-lg">
          Everything you need to get from the island to the ranch.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 bg-stone-50 border border-stone-100 rounded-full px-5 py-2 text-sm text-stone-500">
          <span>🌍</span>
          <span>Ibiza, Spain</span>
          <span className="text-stone-300">——————→</span>
          <span>🍷</span>
          <span>Calistoga, CA</span>
        </div>
        <p className="text-stone-400 text-xs mt-3">Total distance: ~9,700 km · As the crow flies · The crow is exhausted</p>
      </div>

      {/* Route map visual */}
      <div className="bg-stone-50 border border-stone-100 rounded-xl p-6 mb-16 text-center">
        <div className="font-mono text-stone-400 text-sm leading-relaxed whitespace-pre">
{`  🏝️ Ibiza
     |
     | Mediterranean Sea
     |
  🇪🇸 Spain
     |
     | Atlantic Ocean (the big one)
     |
  🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
     |
  🇺🇸 Eastern US
     |
     | Continental United States
     |
  🍷 Calistoga, CA  ← you need to be here`}
        </div>
      </div>

      {/* Travel methods */}
      <h2 className="font-serif text-3xl text-stone-800 mb-8">Getting Here</h2>
      <div className="space-y-8 mb-20">
        {routes.map((route) => (
          <div key={route.mode} className="border border-stone-100 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-stone-50 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{route.emoji}</span>
                <div>
                  <h3 className="font-serif text-xl text-stone-800">{route.mode}</h3>
                  <p className="text-stone-400 text-sm">Estimated total: <strong className="text-stone-600">{route.time}</strong></p>
                </div>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${route.ratingColor}`}>
                {route.rating}
              </span>
            </div>

            {/* Progress bar */}
            <div className="px-6 pt-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-stone-400 uppercase tracking-widest">Feasibility</span>
                <span className="text-xs text-stone-400">{route.bar}%</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 mb-4">
                <div
                  className="h-2 rounded-full bg-stone-600 transition-all"
                  style={{ width: `${route.bar}%` }}
                />
              </div>
            </div>

            {/* Legs */}
            <div className="px-6 pb-2">
              {route.details.map((leg, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-stone-50 last:border-0">
                  <span className="text-stone-300 mt-0.5 shrink-0">
                    {i + 1}.
                  </span>
                  <span className="text-stone-600 flex-1 text-sm">{leg.label}</span>
                  <span className="text-stone-400 text-sm font-mono shrink-0 text-right">{leg.time}</span>
                </div>
              ))}
            </div>

            {/* Tip */}
            <div className="mx-6 mb-6 mt-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3 text-sm text-amber-800">
              <span className="font-semibold">💡 Pro tip: </span>{route.tip}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-px bg-stone-100" />
        <span className="text-stone-300 text-xl">💊</span>
        <div className="flex-1 h-px bg-stone-100" />
      </div>

      {/* Detox section */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-stone-800 mb-2">
            Clearing Your System in Time
          </h2>
          <p className="text-stone-500">
            A practical guide for the mandatory pre-wedding drug test.
          </p>
          <div className="mt-4 inline-block bg-red-50 border border-red-100 text-red-600 text-xs px-4 py-2 rounded-full">
            ⚠️ Disclaimer: we are not doctors. we are not lawyers. we are getting married.
          </div>
        </div>

        {/* Detection timeline visual */}
        <div className="border border-stone-100 rounded-xl p-6 mb-8 bg-stone-50">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">Detection Window (Urine Test)</p>
          <div className="space-y-3">
            {[
              { label: "Day 1–2", note: "Still very much in there. Stay home.", pct: 100, color: "bg-red-400" },
              { label: "Day 3–4", note: "Getting there. Hydrate.", pct: 65, color: "bg-orange-400" },
              { label: "Day 5–6", note: "Borderline. Sweat more.", pct: 30, color: "bg-yellow-400" },
              { label: "Day 7+",  note: "Probably clear. Probably.", pct: 8, color: "bg-green-400" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className="text-xs font-mono text-stone-500 w-16 shrink-0">{row.label}</span>
                <div className="flex-1 bg-stone-200 rounded-full h-3">
                  <div className={`h-3 rounded-full ${row.color}`} style={{ width: `${row.pct}%` }} />
                </div>
                <span className="text-xs text-stone-400 w-40 shrink-0">{row.note}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-400 italic mt-4">
            * Hair follicle tests: 90 days. You are simply cooked. Wear a hat.
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {detoxTips.map((tip) => (
            <div key={tip.title} className="border border-stone-100 rounded-xl p-5 bg-white">
              <div className="text-2xl mb-2">{tip.emoji}</div>
              <h3 className="font-semibold text-stone-800 mb-1">{tip.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Catering */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-px bg-stone-100" />
        <span className="text-stone-300 text-xl">🥤</span>
        <div className="flex-1 h-px bg-stone-100" />
      </div>

      <div className="text-center">
        <h2 className="font-serif text-3xl text-stone-800 mb-2">Catering</h2>
        <p className="text-stone-500 mb-8">
          We have partnered with a world-class culinary institution to feed our guests.
        </p>
        <a
          href="https://www.google.com/maps/search/7-Eleven+near+me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-stone-800 text-white text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors"
        >
          View Catering Menu
        </a>
        <p className="text-stone-400 text-xs mt-3 italic">
          *Opens in a new tab. Bring exact change.
        </p>
      </div>
    </div>
  );
}
