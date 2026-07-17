"use client";

import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { educationData } from "./educationData";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[8px] text-cyan-400">
          Education
        </p>

        <h2 className="mt-4 text-5xl font-black md:text-6xl">
          Education
        </h2>
      </motion.div>

      <div className="mt-20">
        {educationData.map((item) => (
          <EducationCard
            key={item.degree}
            education={item}
          />
        ))}
      </div>
    </section>
  );
}