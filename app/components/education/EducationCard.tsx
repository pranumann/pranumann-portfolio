"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  School,
  Sparkles,
} from "lucide-react";

type Props = {
  degree: string;
  stream: string;
  college: string;
  year: string;
  description: string;
  highlights: string[];
};

export default function EducationCard({
  degree,
  stream,
  college,
  year,
  description,
  highlights,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-transparent
        p-10
        transition-all
        duration-500
        hover:border-cyan-400/40
      "
    >
      {/* Border Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          border
          border-transparent
          transition-all
          duration-500
          group-hover:border-cyan-400/30
        "
      />

      {/* Shine Animation */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{ duration: 0.3 }}
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/25
          "
        >
          <GraduationCap
            size={38}
            className="text-cyan-300"
          />
        </motion.div>

        {/* Degree */}
        <h3
          className="
            mt-8
            text-3xl
            font-black
            text-center
            tracking-tight
            text-white
          "
        >
          {degree}
        </h3>

        {/* Stream */}
        <div
          className="
            mt-5
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-cyan-400/20
            px-5
            py-2
          "
        >
          <Sparkles
            size={15}
            className="text-cyan-300"
          />

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.15em]
              text-cyan-300
            "
          >
            {stream}
          </span>
        </div>

        {/* College */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            text-center
            text-slate-300
          "
        >
          <School
            size={19}
            className="text-cyan-400"
          />

          <span className="text-lg font-medium">
            {college}
          </span>
        </div>

        {/* Year */}
        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-3
            text-center
            text-slate-400
          "
        >
          <CalendarDays
            size={19}
            className="text-cyan-400"
          />

          <span>{year}</span>
        </div>

        {/* Divider */}
        <div
          className="
            my-10
            h-px
            w-32
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
          "
        />

        {/* Description */}
        <p
          className="
            max-w-3xl
            text-center
            text-[16px]
            leading-8
            text-slate-300
          "
        >
          {description}
        </p>

        {/* Highlights */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            items-center
            gap-3
          "
        >
          {highlights.map((item) => (
            <motion.span
              key={item}
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              transition={{ duration: 0.2 }}
              className="
                rounded-full
                border
                border-cyan-400/20
                px-5
                py-2.5
                text-sm
                font-medium
                text-cyan-300
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:text-white
              "
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}