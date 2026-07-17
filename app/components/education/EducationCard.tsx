"use client";

import { motion } from "framer-motion";
import { Education } from "./educationData";

export default function EducationCard({
  education,
}: {
  education: Education;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <span className="text-cyan-400">
        {education.year}
      </span>

      <h3 className="mt-3 text-2xl font-bold">
        {education.degree}
      </h3>

      <p className="mt-3 text-slate-400">
        {education.college}
      </p>
    </motion.div>
  );
}