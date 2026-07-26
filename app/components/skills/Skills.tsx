"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 md:py-36"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-white/5
              px-6
              py-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-300
              backdrop-blur-md
            "
          >
            SKILLS
          </span>

          {/* Title */}

          <h2 className="mt-10 text-center text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Technology
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              {" "}Stack
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-center text-[17px] leading-9 text-slate-400">
            I specialize in Artificial Intelligence, Backend Development,
            Cloud-Native Engineering, and modern web technologies to build
            scalable, production-ready software.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <div
          className="
            mt-20
            grid
            w-full
            max-w-7xl
            place-items-center
            gap-8
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="flex w-full justify-center"
            >
              <SkillCard
                title={skill.title}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}