export default function Travel() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          Getting There
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">
          Travel & Lodging
        </h1>
      </div>

      {/* Venue */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-stone-800 mb-4 pb-2 border-b border-stone-100">
          The Venue
        </h2>
        <p className="text-stone-600 mb-2">
          <strong className="font-semibold">Triple S Ranch</strong>
          <br />
          <span className="italic text-stone-400">(Short for Shit Shower Shave)</span>
        </p>
        <p className="text-stone-500 text-sm">
          Address and parking details coming soon.
        </p>
      </section>

      {/* Hotel Block */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-stone-800 mb-4 pb-2 border-b border-stone-100">
          Hotel Block
        </h2>
        <p className="text-stone-500 leading-relaxed">
          We&apos;ve reserved a block of rooms at a nearby hotel for out-of-town guests.
          Details and booking link coming soon. We recommend booking early — the
          entire 2013-14 Mountain Lakes lacrosse team has been invited.
        </p>
      </section>

      {/* Getting There */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-stone-800 mb-4 pb-2 border-b border-stone-100">
          Getting There
        </h2>
        <p className="text-stone-500 leading-relaxed">
          Directions and transportation options coming soon.
        </p>
      </section>

      {/* Catering */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-stone-800 mb-4 pb-2 border-b border-stone-100">
          Catering
        </h2>
        <p className="text-stone-500 mb-6 leading-relaxed">
          We have partnered with a world-class catering provider to ensure our
          guests are fed. Please explore the full menu at the link below.
        </p>
        <div className="text-center">
          <a
            href="https://www.google.com/maps/search/7-Eleven+near+me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-stone-800 text-white text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors"
          >
            View Catering Menu
          </a>
          <p className="text-stone-400 text-xs mt-3 italic">
            *Opens in a new tab. Bring cash.
          </p>
        </div>
      </section>
    </div>
  );
}
