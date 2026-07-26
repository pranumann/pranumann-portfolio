"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  Building2,
  Sparkles,
} from "lucide-react";

type Props = {
  year: string;
  title: string;
  company: string;
  description: string;
  tech: string[];
};

export default function ExperienceCard({
  year,
  title,
  company,
  description,
  tech,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        relative
        mx-auto
        w-full
        max-w-5xl
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-transparent
        p-8
        md:p-12
        backdrop-blur-sm
        transition-all
        duration-500
        hover:border-cyan-400/40
      "
    >
      <div className="flex flex-col items-center text-center">

        {/* Icon */}

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
          "
        >
          <BriefcaseBusiness
            size={34}
            className="text-cyan-300"
          />
        </motion.div>

        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-5
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-cyan-300
          "
        >
          <Sparkles size={12} />
          {year}
        </div>

        {/* Title */}

        <h3
          className="
            mt-6
            text-center
            text-3xl
            font-extrabold
            tracking-tight
            text-white
            md:text-4xl
          "
        >
          {title}
        </h3>

        {/* Company & Date */}

        <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-center">

          <div className="flex items-center gap-2">
            <Building2
              size={18}
              className="text-cyan-400"
            />
            <span className="font-semibold text-slate-200">
              {company}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <CalendarDays size={17} />
            <span>{year}</span>
          </div>

        </div>

        {/* Divider */}

        <div
          className="
            my-8
            h-px
            w-full
            max-w-md
            bg-gradient-to-r
            from-transparent
            via-cyan-400/40
            to-transparent
          "
        />

        {/* Description */}

        <p
          className="
            mx-auto
            max-w-3xl
            text-center
            text-[16px]
            leading-8
            text-slate-300
          "
        >
          {description}
        </p>

        {/* Tech Stack */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {tech.map((item) => (
            <motion.span
              key={item}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-transparent
                px-5
                py-2.5
                text-sm
                font-medium
                text-cyan-200
                transition-all
                duration-300
                hover:border-cyan-300/40
                hover:bg-cyan-400/10
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