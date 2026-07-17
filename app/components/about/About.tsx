"use client";

import { motion } from "framer-motion";
import { aboutData } from "./aboutData";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[8px] text-cyan-400 text-sm">
          About
        </p>

        <h2 className="mt-4 text-5xl font-black md:text-6xl">
          {aboutData.title}
        </h2>

        <h3 className="mt-6 text-2xl font-bold text-cyan-300">
          {aboutData.subtitle}
        </h3>

        <p className="mt-8 max-w-3xl whitespace-pre-line text-lg leading-8 text-slate-400">
          {aboutData.description}
        </p>
      </motion.div>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {aboutData.stats.map((item) => (
          <AboutCard
            key={item.label}
            number={item.number}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
}