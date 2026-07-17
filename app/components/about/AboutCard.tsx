"use client";

import { motion } from "framer-motion";

type Props = {
  number: string;
  label: string;
};

export default function AboutCard({
  number,
  label,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
    >
      <h3 className="text-4xl font-black text-cyan-400">
        {number}
      </h3>

      <p className="mt-3 text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}