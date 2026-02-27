export default function OurStory() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          A love story
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">
          Our Story
        </h1>
      </div>

      <div className="flex justify-center">
        <iframe
          src="https://www.youtube.com/embed/gHaO0fHVANs?autoplay=1&mute=1"
          title="Our Story"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-md"
          style={{ width: "315px", height: "560px", border: 0 }}
        />
      </div>
    </div>
  );
}
