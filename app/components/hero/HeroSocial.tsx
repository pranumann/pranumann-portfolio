"use client";

import { motion } from "framer-motion";
import { socialLinks } from "./SocialLinks";

export default function HeroSocial() {
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
        delay: 1,
      }}
      className="mt-12"
    >
      {/* Label */}
      <p className="mb-5 text-sm font-medium uppercase tracking-[4px] text-slate-500">
        Connect With Me
      </p>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1 + index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.12,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              <Icon className="transition-transform duration-300 group-hover:rotate-6" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}