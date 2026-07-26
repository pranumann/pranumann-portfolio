"use client";

import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >

      <div
        className="
        mx-auto mt-5
        flex h-[82px] w-[96%] max-w-[1400px]
        items-center justify-between
        rounded-3xl
        border border-white/10
        bg-slate-950/60
        px-8
        backdrop-blur-2xl
        shadow-[0_15px_50px_rgba(0,0,0,.45)]
        "
      >

        {/* Logo */}

        <a 
          href="#home"
          className="flex items-center gap-3 group"
        >

          <motion.div
            whileHover={{
              rotate: 8,
              scale:1.08
            }}
            className="
            relative flex h-12 w-12
            items-center justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-400
            via-blue-500
            to-purple-600
            text-lg
            font-bold
            text-white
            shadow-xl
            shadow-cyan-500/30
            "
          >

            P

            <span
              className="
              absolute inset-0
              rounded-2xl
              bg-cyan-400/30
              blur-xl
              opacity-0
              group-hover:opacity-100
              transition
              "
            />

          </motion.div>


          <div className="leading-tight">

            <h2
              className="
              text-[17px]
              font-semibold
              tracking-tight
              text-white
              "
            >
              Praveen Yadav
            </h2>


            <p
              className="
              mt-1
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-cyan-400
              "
            >
              AI ENGINEER
            </p>

          </div>

        </a>



        {/* Navigation */}

        <NavLinks />



        {/* Resume Button */}

        <div className="hidden lg:block">

          <motion.a
            href="/resume/Praveen_Yadav_Resume.pdf"
            download

            whileHover={{
              scale:1.06,
              y:-3,
            }}

            whileTap={{
              scale:.95,
            }}

            className="
            group
            relative
            flex items-center gap-2
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-600
            px-7
            py-3.5
            text-[13px]
            font-bold
            text-slate-950
            shadow-lg
            shadow-cyan-500/40
            "
          >

            {/* Shine Animation */}

            <span
              className="
              absolute inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/50
              to-transparent
              group-hover:translate-x-full
              transition-transform
              duration-700
              "
            />


            <Download
              size={17}
              className="
              relative
              transition-transform
              group-hover:-translate-y-1
              "
            />

            <span className="relative">
              Download Resume
            </span>


            <Sparkles
              size={14}
              className="
              relative
              text-purple-900
              animate-pulse
              "
            />


          </motion.a>


        </div>



        {/* Mobile */}

        <div className="lg:hidden">
          <MobileMenu/>
        </div>


      </div>

    </motion.header>
  );
}