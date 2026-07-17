"use client";

import { motion } from "framer-motion";
import { Experience } from "./experienceData";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <span className="text-cyan-400 text-sm">
        {experience.duration}
      </span>

      <h3 className="mt-2 text-2xl font-bold">
        {experience.role}
      </h3>

      <p className="mt-2 text-lg text-cyan-300">
        {experience.company}
      </p>

      <p className="mt-5 leading-7 text-slate-400">
        {experience.description}
      </p>
    </motion.div>
  );
}