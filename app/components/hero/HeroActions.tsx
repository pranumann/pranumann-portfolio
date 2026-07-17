"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-10 flex flex-col gap-4 sm:flex-row"
    >
      <a
  href="/resume/Praveen_Yadav_Resume.pdf"
  download
  className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
>
  <Download size={18} />
  Download Resume
</a>

      <a
        href="#projects"
        className="flex items-center justify-center gap-2 rounded-full border border-cyan-400 px-7 py-4 font-semibold text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black"
      >
        View Projects
        <ArrowRight size={18} />
      </a>
    </motion.div>
  );
}