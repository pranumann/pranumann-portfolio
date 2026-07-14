"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 tracking-[8px] uppercase text-cyan-400"
        >
          Welcome To My Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="text-6xl md:text-8xl font-black"
        >
          PRAVEEN
          <br />
          <span className="text-cyan-400">YADAV</span>
        </motion.h1>

        <div className="mt-8 text-2xl md:text-4xl font-bold text-white h-16">
          <TypeAnimation
            sequence={[
              "AI Software Engineer",
              2000,
              "LLM Engineer",
              2000,
              "Generative AI Developer",
              2000,
              "Python Backend Developer",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400 leading-8">
          Software Engineer specializing in AI Agents, LangChain,
          LangGraph, LLMs, FastAPI, Python, Go, Docker,
          Kubernetes and Cloud Native Systems.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <button className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-black hover:scale-105 transition">
            Download Resume
          </button>

          <button className="rounded-full border border-cyan-400 px-8 py-4 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            View Projects
          </button>

        </div>

      </div>
    </section>
  );
}