"use client";

import Link from "next/link";
import { useState } from "react";

export default function GatePage() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="relative flex flex-col items-center min-h-[88vh] overflow-hidden">
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn-rileygrey.s3.amazonaws.com/295467/39a5de2d-e16d-45cb-bdd7-bc8c9282f4da.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Cream overlay */}
      <div className="absolute inset-0 bg-[#faf8f5]/80" />

      {/* Branding — centers in the space above the wave */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 pb-[55vh] md:pb-[65vh] text-center px-4">
        <p className="text-stone-400 uppercase tracking-[0.4em] text-xs mb-4">
          you have arrived at
        </p>
        <h1 className="font-serif text-4xl md:text-7xl font-bold text-stone-800 leading-tight mb-6">
          AveryandNoelle
          <span className="text-stone-400 font-normal">.com</span>
        </h1>
        <p className="font-serif text-xl md:text-5xl text-stone-600 leading-snug">
          Are you{" "}
          <span className="shimmer-sure font-bold text-2xl md:text-6xl">SURE</span>
          {" "}this is where<br className="hidden md:block" /> you meant to go?
        </p>
      </div>

      {/* Wave section */}
      <div className="absolute bottom-0 left-0 right-0 h-[55vh] md:h-[65vh]">

        {/* Back wave — slowest, violet */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full wave-back"
          viewBox="0 0 2880 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 C240,20 480,280 720,150 C960,20 1200,280 1440,150 C1680,20 1920,280 2160,150 C2400,20 2640,280 2880,150 L2880,300 L0,300 Z"
            fill="rgba(167,139,250,0.3)"
          />
        </svg>

        {/* Mid wave — medium speed, pink */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full wave-mid"
          viewBox="0 0 2880 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 C240,280 480,20 720,150 C960,280 1200,20 1440,150 C1680,280 1920,20 2160,150 C2400,280 2640,20 2880,150 L2880,300 L0,300 Z"
            fill="rgba(244,114,182,0.28)"
          />
        </svg>

        {/* Front wave — fastest, warm peach/gold */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full wave-front"
          viewBox="0 0 2880 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,190 C240,60 480,260 720,190 C960,60 1200,260 1440,190 C1680,60 1920,260 2160,190 C2400,60 2640,260 2880,190 L2880,300 L0,300 Z"
            fill="rgba(251,191,36,0.35)"
          />
        </svg>

        {/* All interactive elements — grouped, sitting inside the waves */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 w-full px-4">

          {/* Step 1: Enter button */}
          {!confirmed && (
            <div className="wave-chaos">
              <button
                onClick={() => setConfirmed(true)}
                className="px-4 py-2 bg-stone-800 text-white text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors shadow-md cursor-pointer"
              >
                Enter AveryandNoelle.com
              </button>
            </div>
          )}

          {/* Step 2: Confirmation */}
          {confirmed && (
            <div className="text-center max-w-sm">
              <p className="font-serif text-stone-700 text-base md:text-xl mb-4 leading-snug">
                By clicking below you confirm that you understand
                this site contains <em>no actual wedding information.</em>
              </p>
              <Link
                href="/home"
                className="inline-block px-6 py-3 bg-stone-800 text-white text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors shadow-md"
              >
                I understand and accept my fate
              </Link>
            </div>
          )}

          {/* NoelleandAvery hint — right below the entry buttons */}
          <div className="text-center bg-white/90 backdrop-blur-sm px-5 py-3 shadow-lg border border-stone-200 max-w-[90vw]">
            <p className="text-stone-500 text-xs italic mb-1">
              This is probably what you&apos;re looking for:
            </p>
            <a
              href="https://www.noelleandavery.com"
              className="font-serif text-lg md:text-2xl font-bold text-stone-800 hover:text-stone-500 transition-colors"
            >
              NoelleandAvery.com →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
