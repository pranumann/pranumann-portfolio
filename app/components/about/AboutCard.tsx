"use client";

import { motion } from "framer-motion";

type Props = {
  number: string;
  label: string;
};

export default function AboutCard({
  number,
  label,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        w-full
        max-w-[280px]
        min-h-[220px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-transparent
        p-8
        text-center
        backdrop-blur-sm
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:bg-white/5
      "
    >
      {/* Glass Reflection */}

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-white/5
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Number */}

      <motion.h3
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          text-center
          text-5xl
          font-black
          tracking-tight
          bg-gradient-to-r
          from-cyan-400
          via-sky-300
          to-blue-500
          bg-clip-text
          text-transparent
        "
      >
        {number}
      </motion.h3>

      {/* Divider */}

      <div
        className="
          my-6
          h-px
          w-20
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />

      {/* Label */}

      <p
        className="
          relative
          max-w-[220px]
          text-center
          text-base
          font-medium
          leading-7
          text-slate-300
        "
      >
        {label}
      </p>
    </motion.div>
  );
}