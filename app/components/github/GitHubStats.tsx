"use client";

import { motion } from "framer-motion";

export default function GitHubStats() {
  return (
    <section
      id="github"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-center uppercase tracking-[8px] text-cyan-400">
          GitHub
        </p>

        <h2 className="mt-4 text-center text-5xl font-black">
          Coding Activity
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <img
            src="https://github-readme-stats.vercel.app/api?username=pranumann&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            className="w-full rounded-3xl"
          />

          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=pranumann&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="mt-8">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=pranumann&theme=tokyo-night"
            alt="GitHub Activity Graph"
            className="w-full rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
}