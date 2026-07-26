"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Props = {
  title: string;
  level: string;
  icon: IconType;
  color: string;
};

export default function SkillCard({
  title,
  level,
  icon: Icon,
  color,
}: Props) {
  const progress =
    level === "Advanced"
      ? 95
      : level === "Intermediate"
      ? 75
      : 55;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        flex
        min-h-[430px]
        w-full
        max-w-[320px]
        flex-col
        items-center
        overflow-hidden
        rounded-[30px]
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
          bg-gradient-to-br
          from-white/5
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />


      {/* Icon */}

      <div
        className="
          relative
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
        "
        style={{
          color,
        }}
      >
        <Icon size={40} />
      </div>


      {/* Title */}

      <h3
        className="
          mt-8
          text-center
          text-2xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>


      {/* Level */}

      <div className="mt-4">
        <span
          className="
            inline-flex
            rounded-full
            px-4
            py-2
            text-sm
            font-semibold
          "
          style={{
            color,
            backgroundColor: `${color}20`,
          }}
        >
          {level}
        </span>
      </div>


      {/* Description */}

      <p
        className="
          mx-auto
          mt-6
          max-w-xs
          text-center
          text-[15px]
          leading-7
          text-slate-400
        "
      >
        Experienced in building scalable,
        production-ready applications using
        modern engineering practices.
      </p>


      {/* Progress */}

      <div className="mt-auto w-full pt-8">

        <div className="mb-3 flex items-center justify-between text-sm">

          <span className="text-slate-400">
            Proficiency
          </span>

          <span
            className="font-semibold"
            style={{
              color,
            }}
          >
            {progress}%
          </span>

        </div>


        <div className="h-2 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${progress}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full"
            style={{
              backgroundColor: color,
            }}
          />

        </div>

      </div>


    </motion.div>
  );
}