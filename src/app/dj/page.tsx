const OPUS_URL = "https://open.spotify.com/track/6HluGxRGaDT9xa0BqJhnwh";

const tracklist = Array.from({ length: 10 }, (_, i) => ({
  number: i + 1,
  title: "Opus",
  artist: "Eric Prydz",
  duration: "9:08",
}));

export default function DJ() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          An Evening of Music
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">
          The DJ Set
        </h1>
        <p className="text-stone-500 mt-4 leading-relaxed">
          We&apos;ve spared no expense curating the perfect playlist.
        </p>
      </div>

      {/* Spotify Embed */}
      <div className="mb-12 flex justify-center">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/6HluGxRGaDT9xa0BqJhnwh?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Opus by Eric Prydz"
        />
      </div>

      {/* Tracklist */}
      <div className="border border-stone-100 rounded">
        <div className="flex items-center gap-4 px-4 py-2 border-b border-stone-100 text-xs uppercase tracking-widest text-stone-400">
          <span className="w-6 text-right">#</span>
          <span className="flex-1">Title</span>
          <span className="hidden sm:block">Artist</span>
          <span className="w-10 text-right">Time</span>
        </div>

        {tracklist.map((track) => (
          <a
            key={track.number}
            href={OPUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-4 py-3 border-b border-stone-50 last:border-0 hover:bg-stone-50 transition-colors group"
          >
            <span className="w-6 text-right text-stone-400 text-sm font-mono">
              {track.number}
            </span>
            <span className="flex-1 font-medium text-stone-800 group-hover:text-stone-600">
              {track.title}
            </span>
            <span className="hidden sm:block text-stone-500 text-sm">
              {track.artist}
            </span>
            <span className="w-10 text-right text-stone-400 text-sm font-mono">
              {track.duration}
            </span>
          </a>
        ))}
      </div>

      <p className="text-center text-stone-400 text-xs italic mt-6">
        Total runtime: 1 hr 31 min · Repeat: On
      </p>
    </div>
  );
}
