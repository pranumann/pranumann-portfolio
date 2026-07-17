"use client";

import { motion } from "framer-motion";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[160px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroLeft />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <HeroRight />
        </motion.div>

      </div>
    </section>
  );
}