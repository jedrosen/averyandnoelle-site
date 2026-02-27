import CountdownTimer from "@/components/CountdownTimer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[88vh] px-4 text-center overflow-hidden">
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn-rileygrey.s3.amazonaws.com/295467/39a5de2d-e16d-45cb-bdd7-bc8c9282f4da.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#faf8f5]/75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
      <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-6">
        You&apos;re invited to the wedding of
      </p>

      <h1 className="font-serif text-7xl md:text-9xl font-bold text-stone-800 leading-none mb-4">
        Avery
        <br />
        <span className="text-stone-400 text-4xl md:text-5xl font-normal italic">&amp;</span>
        <br />
        Noelle
      </h1>

      <div className="w-20 h-px bg-stone-300 my-8" />

      <p className="text-stone-800 text-lg mb-1 font-medium">Triple S Ranch</p>
      <p className="text-stone-700 text-sm italic mb-10">
        (Short for Shit Shower Shave)
      </p>

      <div className="mb-10">
        <CountdownTimer />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/rsvp"
          className="px-8 py-3 bg-stone-800 text-white text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors"
        >
          RSVP
        </Link>
        <Link
          href="/schedule"
          className="px-8 py-3 border border-stone-300 text-stone-600 text-sm uppercase tracking-widest hover:border-stone-500 hover:text-stone-800 transition-colors"
        >
          Schedule
        </Link>
      </div>
      </div>
    </div>
  );
}
