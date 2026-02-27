import CountdownTimer from "@/components/CountdownTimer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[88vh] px-4 text-center">
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

      <p className="font-serif text-2xl md:text-3xl text-stone-600 mb-2">
        [DATE TBD]
      </p>

      <p className="text-stone-500 text-lg mb-1">Triple S Ranch</p>
      <p className="text-stone-400 text-sm italic mb-10">
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
  );
}
