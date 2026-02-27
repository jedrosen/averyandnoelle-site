import { list } from "@vercel/blob";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Gallery() {
  let urls: { url: string; pathname: string }[] = [];

  try {
    const { blobs } = await list({ prefix: "gallery/" });
    urls = blobs;
  } catch {
    // Blob store not configured yet
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          Memories
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800 mb-4">
          Gallery
        </h1>
        <Link
          href="/upload"
          className="inline-block px-6 py-2 border border-stone-300 text-stone-600 text-sm uppercase tracking-widest hover:border-stone-500 hover:text-stone-800 transition-colors"
        >
          + Add Your Photos
        </Link>
      </div>

      {urls.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-stone-400 italic text-lg mb-4">No photos yet — be the first!</p>
          <Link
            href="/upload"
            className="inline-block px-8 py-3 bg-stone-800 text-white text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors"
          >
            Upload Photos
          </Link>
        </div>
      ) : (
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {urls.map((blob) => (
            <div key={blob.url} className="break-inside-avoid overflow-hidden rounded-lg bg-stone-100">
              <Image
                src={blob.url}
                alt="Gallery photo"
                width={800}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
