"use client";

import { motion } from "framer-motion";
import HeroActions from "./HeroActions";
import HeroSocial from "./HeroSocial";

export default function HeroLeft() {
  return (
    <div className="text-center lg:text-left">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 text-sm uppercase tracking-[6px] text-cyan-400"
      >
        👋 Welcome to my Portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-black leading-tight md:text-7xl"
      >
        Praveen
        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
          Yadav
        </span>

      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-2xl font-bold text-cyan-300 md:text-3xl"
      >
        AI Software Engineer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
      >
        Passionate Software Engineer specializing in AI, Backend
        Development and Cloud Computing. I build scalable,
        production-ready applications using Go, Python, FastAPI,
        LangChain, LangGraph, Docker and Kubernetes.
      </motion.p>

      <HeroActions />

      <HeroSocial />

    </div>
  );
}