"use client";

import { motion } from "framer-motion";
import { navLinks } from "./navData";

export default function NavLinks() {
  return (
    <nav
      className="
      hidden
      lg:flex
      items-center
      justify-center
      gap-2
      rounded-full
      border
      border-white/10
      bg-transparent
      px-3
      py-2
      backdrop-blur-xl
      "
    >

      {navLinks.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          whileHover={{
            y: -3,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
          group
          relative
          flex
          items-center
          justify-center
          overflow-hidden
          rounded-full
          px-5
          py-2.5
          text-center
          text-[14px]
          font-medium
          tracking-wide
          text-slate-300
          transition-all
          duration-300
          hover:text-white
          "
        >

          {/* Hover Glow */}
          <span
            className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-r
            from-cyan-500/0
            via-cyan-400/15
            to-cyan-500/0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            "
          />

          {/* Text */}
          <span
            className="
            relative
            z-10
            "
          >
            {item.name}
          </span>


          {/* Active Hover Line */}
          <span
            className="
            absolute
            bottom-1.5
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            rounded-full
            bg-cyan-400
            transition-all
            duration-300
            group-hover:w-8
            "
          />

        </motion.a>
      ))}

    </nav>
  );
}