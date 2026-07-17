"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950"
        >
          <div className="text-center">
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl"
            >
              Pranumann
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
              className="mt-4 tracking-[8px] text-slate-400 uppercase"
            >
              AI Software Engineer
            </motion.p>

            <div className="mt-10 flex justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="h-12 w-12 rounded-full border-4 border-cyan-400 border-t-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}