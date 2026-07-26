"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.6,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.6,
            y: 30,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.12,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            fixed
            bottom-8
            right-8
            z-50

            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-2xl

            border
            border-cyan-300/30

            bg-white/10

            text-cyan-300

            backdrop-blur-xl

            shadow-[0_0_25px_rgba(34,211,238,0.45)]

            transition-all

            hover:border-purple-400/50
            hover:text-white

            hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]
          "
          aria-label="Back to Top"
        >
          
        </motion.button>
      )}
    </AnimatePresence>
  );
}