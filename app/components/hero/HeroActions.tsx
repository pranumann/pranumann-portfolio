"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

export default function HeroActions() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.8,
      }}
      className="mt-12 flex flex-col gap-5 sm:flex-row"
    >
      {/* Resume */}
      <a
        href="/resume/Praveen_Yadav_Resume.pdf"
        download
        className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_20px_50px_rgba(34,211,238,0.45)]"
      >
        <Download size={20} />

        Download Resume
      </a>

      {/* Contact */}
      <a
        href="#contact"
        className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
      >
        <Mail size={20} />

        Contact Me
      </a>

      {/* Projects */}
      <a
        href="#projects"
        className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/30 bg-transparent px-8 py-4 font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
      >
        View Projects

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </motion.div>
  );
}