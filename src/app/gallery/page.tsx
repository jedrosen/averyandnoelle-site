import { list } from "@vercel/blob";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

// Polaroid-style card configs — cycled by index
const cards = [
  { border: "6px solid #ff006e", shadow: "0 16px 48px #ff006e70, 0 6px 16px rgba(0,0,0,0.35)", rotate: "-3deg",  spin: false },
  { border: "6px solid #3a86ff", shadow: "0 16px 48px #3a86ff70, 0 6px 16px rgba(0,0,0,0.35)", rotate: "2deg",   spin: true  },
  { border: "6px solid #06d6a0", shadow: "0 16px 48px #06d6a070, 0 6px 16px rgba(0,0,0,0.35)", rotate: "-1.5deg",spin: false },
  { border: "6px solid #ffd60a", shadow: "0 16px 48px #ffd60a70, 0 6px 16px rgba(0,0,0,0.35)", rotate: "3deg",   spin: false },
  { border: "6px solid #8338ec", shadow: "0 16px 48px #8338ec70, 0 6px 16px rgba(0,0,0,0.35)", rotate: "-2deg",  spin: true  },
  { border: "6px solid #ff6b35", shadow: "0 16px 48px #ff6b3570, 0 6px 16px rgba(0,0,0,0.35)", rotate: "1.5deg", spin: false },
];

// One keyframe per rotation value so CSS vars aren't needed in @keyframes
const spinKeyframes = `
  @keyframes spin-n3   { 0%,74%,100%{transform:rotate(-3deg)}   82%{transform:rotate(357deg)}  }
  @keyframes spin-p2   { 0%,74%,100%{transform:rotate(2deg)}    82%{transform:rotate(362deg)}  }
  @keyframes spin-n15  { 0%,74%,100%{transform:rotate(-1.5deg)} 82%{transform:rotate(358.5deg)}}
  @keyframes spin-p3   { 0%,74%,100%{transform:rotate(3deg)}    82%{transform:rotate(363deg)}  }
  @keyframes spin-n2   { 0%,74%,100%{transform:rotate(-2deg)}   82%{transform:rotate(358deg)}  }
  @keyframes spin-p15  { 0%,74%,100%{transform:rotate(1.5deg)}  82%{transform:rotate(361.5deg)}}
`;

const spinAnimNames = ["spin-n3","spin-p2","spin-n15","spin-p3","spin-n2","spin-p15"];
const spinDurations = [9, 11, 8, 13, 10, 12];
const spinDelays    = [0, -4, -7, -2, -9, -5];

export default async function Gallery() {
  let blobs: { url: string; pathname: string }[] = [];
  let error = false;

  try {
    const result = await list({ prefix: "gallery/" });
    blobs = result.blobs;
  } catch {
    error = true;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <style>{spinKeyframes}</style>

      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">Memories</p>
        <h1 className="font-serif text-5xl font-bold text-stone-800 mb-4">Gallery</h1>
        <Link
          href="/upload"
          className="inline-block px-6 py-2 border border-stone-300 text-stone-600 text-sm uppercase tracking-widest hover:border-stone-500 hover:text-stone-800 transition-colors"
        >
          + Add Your Photos
        </Link>
      </div>

      {error && (
        <p className="text-center text-red-400 text-sm mb-8">Gallery temporarily unavailable.</p>
      )}

      {!error && blobs.length === 0 && (
        <div className="text-center py-20">
          <p className="text-stone-400 italic text-lg mb-4">No photos yet — be the first!</p>
          <Link
            href="/upload"
            className="inline-block px-8 py-3 bg-stone-800 text-white text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors"
          >
            Upload Photos
          </Link>
        </div>
      )}

      {blobs.length > 0 && (
        <div className="columns-2 md:columns-3 gap-10 space-y-10">
          {blobs.map((blob, i) => {
            const c = cards[i % cards.length];
            const animName = spinAnimNames[i % spinAnimNames.length];
            const dur = spinDurations[i % spinDurations.length];
            const delay = spinDelays[i % spinDelays.length];

            const cardStyle: React.CSSProperties = {
              border: c.border,
              boxShadow: c.shadow,
              backgroundColor: "white",
              padding: "10px 10px 36px 10px",
              ...(c.spin
                ? { animation: `${animName} ${dur}s ease-in-out ${delay}s infinite` }
                : { transform: `rotate(${c.rotate})` }),
            };

            return (
              <div
                key={blob.url}
                className="break-inside-avoid"
                style={cardStyle}
              >
                <Image
                  src={blob.url}
                  alt="Gallery photo"
                  width={800}
                  height={800}
                  className="w-full h-auto block"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
