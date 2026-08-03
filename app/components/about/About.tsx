"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type AboutCardProps = {
  number: string;
  label: string;
};

export default function AboutCard({
  number,
  label,
}: AboutCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  // Extract numeric value
  const numericValue = parseInt(number.replace(/\D/g, "")) || 0;

  // Detect prefix & suffix
  const prefix = number.startsWith("+") ? "+" : "";
  const suffix = number.endsWith("+")
    ? "+"
    : number.endsWith("%")
    ? "%"
    : "";

  return (
    <motion.div
      ref={ref}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
      "
    >
      {/* Glow Effect */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-cyan-500/10
          via-blue-500/10
          to-purple-500/10
        "
      />

      {/* Top Border Glow */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-full
          scale-x-0
          bg-gradient-to-r
          from-cyan-400
          via-blue-400
          to-purple-400
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

      {/* Number */}
      <h3
        className="
          relative
          text-center
          text-5xl
          font-black
          tracking-tight
          bg-gradient-to-r
          from-cyan-400
          via-blue-400
          to-purple-400
          bg-clip-text
          text-transparent
        "
      >
        {inView ? (
          <>
            {prefix}
            <CountUp
              end={numericValue}
              duration={2.5}
              separator=","
            />
            {suffix}
          </>
        ) : (
          number
        )}
      </h3>

      {/* Label */}
      <p
        className="
          relative
          mt-5
          text-center
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-slate-400
        "
      >
        {label}
      </p>

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-16
          w-16
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-cyan-400/20
        "
      />
    </motion.div>
  );
}