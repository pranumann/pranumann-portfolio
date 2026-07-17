"use client";

import { motion } from "framer-motion";
import { experiences } from "./experienceData";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[8px] text-cyan-400">
          Experience
        </p>

        <h2 className="mt-4 text-5xl font-black md:text-6xl">
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}