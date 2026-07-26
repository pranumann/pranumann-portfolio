"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: Props) {
  return (
    <motion.article
      whileHover={{
        y: -12,
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
        max-w-[560px]
        flex-col
        items-center
        overflow-hidden
        rounded-[32px]
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
          rounded-[32px]
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


      {/* Badge */}

      <div className="relative">

        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-400/10
            px-5
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-cyan-300
            backdrop-blur-md
          "
        >
          <Sparkles size={14} />
          AI Project
        </span>

      </div>



      {/* Content */}

      <div
        className="
          relative
          mt-8
          flex
          w-full
          flex-col
          items-center
          text-center
        "
      >

        {/* Title */}

        <h3
          className="
            text-center
            text-3xl
            font-extrabold
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>



        {/* Description */}

        <p
          className="
            mx-auto
            mt-5
            max-w-md
            text-center
            leading-8
            text-slate-400
          "
        >
          {description}
        </p>



        {/* Tech Stack */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >

          {tech.map((item, index) => (

            <motion.span
              key={item}
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-white/5
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-300
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
              "
            >
              {item}
            </motion.span>

          ))}

        </div>



        {/* Buttons */}

        <div
          className="
            mt-10
            flex
            w-full
            justify-center
            gap-4
            sm:flex-row
            flex-col
          "
        >

          {/* Github */}

          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-white/10
            "
          >
            <FaGithub size={20} />
            Code
          </motion.a>



          {/* Demo */}

          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500
              px-5
              py-4
              font-bold
              text-slate-950
              transition-all
              duration-300
              hover:shadow-[0_20px_60px_rgba(34,211,238,.35)]
            "
          >
            Demo
            <ArrowUpRight size={18} />
          </motion.a>

        </div>


      </div>

    </motion.article>
  );
}