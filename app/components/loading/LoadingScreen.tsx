"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.9,
      }}
      className="
      fixed
      inset-0
      z-[99999]
      overflow-hidden
      bg-[#020617]
      flex
      items-center
      justify-center
      "
    >
      {/* ================================= */}
      {/* GRID */}
      {/* ================================= */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />

      {/* ================================= */}
      {/* GLOW */}
      {/* ================================= */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        h-[700px]
        w-[700px]
        rounded-full
        bg-cyan-500/10
        blur-[170px]
        "
      />

      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-40, 40, -40],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-600/10
        blur-[170px]
        "
      />

      {/* ================================= */}
      {/* FLOATING PARTICLES */}
      {/* ================================= */}

      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [-20, -220],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.25,
          }}
          className="
          absolute
          rounded-full
          bg-cyan-300
          "
          style={{
            width: 3 + (i % 4),
            height: 3 + (i % 4),
            left: `${5 + i * 5}%`,
            bottom: "-40px",
          }}
        />
      ))}

      {/* ================================= */}
      {/* CARD */}
      {/* ================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-3xl
        px-20
        py-16
        shadow-[0_0_80px_rgba(0,255,255,0.08)]
        "
      >
        {/* Shine */}

        <motion.div
          animate={{
            x: ["-120%", "150%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
          className="
          absolute
          inset-0
          skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          "
        />

        {/* Ring */}

        <div className="relative flex justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            h-28
            w-28
            rounded-full
            border-[5px]
            border-cyan-400
            border-t-transparent
            "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            h-20
            w-20
            rounded-full
            border-[4px]
            border-blue-500
            border-b-transparent
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
            h-10
            w-10
            rounded-full
            bg-cyan-400
            shadow-[0_0_45px_#22d3ee]
            "
          />
        </div>

        {/* LOGO */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
          mt-16
          text-center
          text-6xl
          font-black
          tracking-[0.25em]
          "
        >
          <span className="text-cyan-400">PRAN</span>
          <span className="text-white">UMANN</span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
          mt-4
          text-center
          text-sm
          uppercase
          tracking-[0.45em]
          text-slate-400
          "
        >
          AI SOFTWARE ENGINEER
        </motion.p>

        {/* Loading */}

        <div className="mt-12 w-72">
          <div className="h-[4px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500
              shadow-[0_0_18px_#22d3ee]
              "
            />
          </div>

          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
            }}
            className="
            mt-4
            text-center
            text-xs
            tracking-[0.35em]
            text-slate-500
            "
          >
            INITIALIZING EXPERIENCE...
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}