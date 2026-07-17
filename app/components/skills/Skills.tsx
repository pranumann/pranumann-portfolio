"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "./skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[8px] text-cyan-400">
          Skills
        </p>

        <h2 className="mt-4 text-5xl font-black md:text-6xl">
          Technical Skills
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Technologies and tools I use to build scalable AI applications,
          backend systems and cloud-native software.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
}