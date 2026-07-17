"use client";

import { motion } from "framer-motion";
import { socialLinks } from "./SocialLinks";

export default function HeroSocial() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
          >
            <Icon />
          </a>
        );
      })}
    </motion.div>
  );
}