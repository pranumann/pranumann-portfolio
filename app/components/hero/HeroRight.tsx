"use client";

import { motion } from "framer-motion";

const techStack = [
  "Go",
  "Python",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "Docker",
  "Kubernetes",
  "LLMs",
];

const positions = [
  "top-0 left-0",
  "top-12 right-0",
  "bottom-10 left-0",
  "bottom-0 right-8",
  "top-1/2 -left-8",
  "top-1/3 -right-8",
  "-top-8 left-1/2 -translate-x-1/2",
  "-bottom-8 right-1/3",
];

export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Glass Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
          <span className="font-semibold text-green-400">
            Available for Work
          </span>
        </div>

        <div className="mt-10">
          <h3 className="text-3xl font-black">
            Software Engineer
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            Building scalable backend systems, AI applications,
            cloud-native architectures and modern distributed software.
          </p>
        </div>

        <div className="mt-10 space-y-5">

          <div className="flex justify-between">
            <span className="text-slate-400">Location</span>
            <span>🇮🇳 India</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Specialization</span>
            <span>AI + Backend</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Focus</span>
            <span>Cloud & Automation</span>
          </div>

        </div>
      </motion.div>

      {/* Floating Tech Chips */}
      {techStack.map((tech, index) => (
        <motion.div
          key={tech}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3 + index * 0.2,
            repeat: Infinity,
          }}
          className={`absolute ${positions[index]} rounded-full border border-cyan-400/20 bg-black/40 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl`}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
}