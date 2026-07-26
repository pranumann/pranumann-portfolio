"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experience } from "./experienceData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 md:py-40"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300">
              EXPERIENCE
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-10 text-center text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building Modern
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              AI Experiences
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-slate-400">
            My professional journey spans Artificial Intelligence,
            Backend Engineering, Cloud Infrastructure, and scalable
            software systems, focused on delivering intelligent,
            production-ready applications with exceptional user
            experiences.
          </p>
        </motion.div>

        {/* Experience Cards */}

        <div className="mt-24 flex w-full flex-col items-center gap-10">

          {experience.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="flex w-full justify-center"
            >
              <ExperienceCard
                year={item.year}
                title={item.title}
                company={item.company}
                description={item.description}
                tech={item.tech}
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}