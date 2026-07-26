"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="
        fixed 
        left-0 
        top-0 
        z-[9999] 
        h-[3px] 
        w-full
        origin-left
        bg-gradient-to-r 
        from-cyan-400 
        via-blue-500 
        to-purple-600
        shadow-[0_0_15px_rgba(34,211,238,0.8)]
        backdrop-blur-xl
      "
    />
  );
}