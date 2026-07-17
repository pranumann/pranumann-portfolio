"use client";

import { motion } from "framer-motion";
import { Skill } from "./skillsData";

export default function SkillCard({
  skill,
}: {
  skill: Skill;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold">{skill.name}</h3>

        <span className="text-cyan-400">
          {skill.level}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${skill.level}%`,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>

      <p className="mt-3 text-sm text-slate-400">
        {skill.category}
      </p>
    </motion.div>
  );
}