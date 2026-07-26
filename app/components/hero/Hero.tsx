"use client";

import { motion } from "framer-motion";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="absolute right-[-180px] bottom-10 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[220px]" />

        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[260px]" />

      </div>

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 px-6 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24 lg:px-10">

        {/* Left */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="order-2 flex items-center lg:order-1"
        >
          <HeroLeft />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="order-1 flex items-center justify-center lg:order-2 lg:justify-end"
        >
          <HeroRight />
        </motion.div>

      </div>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
    </section>
  );
}