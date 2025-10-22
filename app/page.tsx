"use client";

import "./globals.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-dvh bg-black text-white flex items-center justify-center">
      <section className="w-full max-w-[560px] flex flex-col items-center gap-8 px-6">
        {/* Icon */}
        <div className="perspective-midrange[800px]">
          <motion.img
            alt="Diamond"
            src="/brand/diamond.svg"
            className="h-28 w-28 origin-center"
            animate={{ rotateY: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />
        </div>

        {/* Title + Copy */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            TON Wallet
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/70 max-w-[36ch] mx-auto">
            Securely store crypto and make blockchain payments at the speed of
            light.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 w-full flex flex-col items-center">
          {/* Light blue Create Wallet button */}
          <Link
            href="/create"
            className="w-[220px] h-11 rounded-xl bg-sky-400 text-white font-semibold shadow-md hover:bg-sky-300 transition-colors flex items-center justify-center"
          >
            Create Wallet
          </Link>

          <div className="relative w-full max-w-[260px] my-5">
            <div className="absolute inset-0 top-1/2 -translate-y-1/2 border-t border-white/10" />
            <span className="relative mx-auto block w-fit bg-black px-3 text-xs text-white/50">
              or import from
            </span>
          </div>

          <Link
            href="/secret"
            className="w-[220px] h-11 rounded-xl bg-white/10 text-white font-medium backdrop-blur hover:bg-white/15 transition-colors flex items-center justify-center"
          >
            Secret Words
          </Link>
        </div>
      </section>
    </main>
  );
}
