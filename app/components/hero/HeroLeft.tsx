"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Sparkles,
  Code2,
  BrainCircuit,
} from "lucide-react";

import HeroSocial from "./HeroSocial";


export default function HeroLeft() {

  return (
    <div
      className="
      relative
      z-10
      mx-auto
      flex
      w-full
      max-w-5xl
      flex-col
      items-center
      text-center
      "
    >


      {/* Badge */}

      <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:.6}}
        className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/10
        px-6
        py-3
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(34,211,238,.15)]
        "
      >

        <span className="relative flex h-3 w-3">

          <span
          className="
          absolute
          h-full
          w-full
          animate-ping
          rounded-full
          bg-cyan-400
          opacity-70
          "
          />

          <span
          className="
          relative
          h-3
          w-3
          rounded-full
          bg-cyan-400
          "
          />

        </span>


        <span className="text-sm font-semibold text-cyan-300">
          Available for Full-Time Opportunities
        </span>


      </motion.div>





      {/* Name */}


      <motion.h2
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:.2}}

        className="
        mt-10
        text-4xl
        sm:text-5xl
        lg:text-7xl
        font-black
        tracking-[-0.06em]
        text-white
        "
      >

        Praveen{" "}

        <span
        className="
        bg-gradient-to-r
        from-cyan-400
        via-blue-400
        to-purple-500
        bg-clip-text
        text-transparent
        "
        >
          Yadav
        </span>

      </motion.h2>







      {/* Main Heading */}


      <motion.h1
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{delay:.35}}

        className="
        mt-8
        text-[23px]
        sm:text-3xl
        lg:text-4xl
        font-extrabold
        leading-[1.05]
        tracking-tight
        text-white
        "
      >

        Building

        <br/>


        <span
        className="
        bg-gradient-to-r
        from-cyan-400
        via-sky-300
        to-indigo-500
        bg-clip-text
        text-transparent
        "
        >

          Intelligent AI

        </span>


        <br/>


        Systems


      </motion.h1>








      {/* Role */}


      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:.5}}
      className="mt-8"
      >


        <div
        className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/5
        px-8
        py-4
        backdrop-blur-xl
        "
        >

          <BrainCircuit
          className="h-5 w-5 text-cyan-400"
          />


          <span
          className="
          text-sm
          font-bold
          tracking-[0.3em]
          text-cyan-300
          "
          >
            AI SOFTWARE ENGINEER
          </span>


        </div>


        <p
        className="
        mt-5
        text-sm
        uppercase
        tracking-[0.25em]
        text-slate-400
        "
        >

          Generative AI • Backend Systems • Cloud Native

        </p>


      </motion.div>








      {/* Description */}


      <motion.p

      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:.65}}

      className="
      mt-10
      max-w-3xl
      text-lg
      leading-9
      text-slate-400
      "

      >

        Building production-ready AI applications and scalable backend
        systems using


        <span className="font-semibold text-white">

        {" "}
        Go, Python, FastAPI, LangChain,
        LangGraph, Docker and Kubernetes.

        </span>


        <br/><br/>


        Creating intelligent software
        that is fast, scalable and reliable.


      </motion.p>








      {/* Stats */}


      <motion.div

      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:.8}}

      className="
      mt-14
      grid
      gap-5
      sm:grid-cols-3
      "

      >

      {[
        {
          icon:<Code2/>,
          value:"20+",
          label:"Projects"
        },
        {
          icon:<Sparkles/>,
          value:"15+",
          label:"Technologies"
        },
        {
          icon:<BrainCircuit/>,
          value:"AI",
          label:"Engineer"
        }

      ].map((item)=>(


        <div
        key={item.label}

        className="
        group
        w-52
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-3
        hover:border-cyan-400/40
        hover:bg-cyan-400/10
        "
        >

          <div
          className="
          mx-auto
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-cyan-400/10
          text-cyan-400
          "
          >

            {item.icon}

          </div>


          <h3 className="text-4xl font-black text-white">
            {item.value}
          </h3>


          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>


        </div>


      ))}

      </motion.div>








      {/* Buttons */}


      <motion.div

      initial={{opacity:0,y:30}}

      animate={{opacity:1,y:0}}

      transition={{
        delay:1,
        duration:.8,
        type:"spring"
      }}

      className="
      relative
      z-20
      mt-14
      flex
      flex-col
      items-center
      justify-center
      gap-6
      sm:flex-row
      "

      >




      {/* Work Button */}


      <motion.a

      href="#projects"

      whileHover={{
        scale:1.08,
        y:-5
      }}

      whileTap={{
        scale:.95
      }}

      className="
      group
      relative
      flex
      h-16
      w-64
      items-center
      justify-center
      gap-3
      overflow-hidden
      rounded-full
      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-indigo-600
      font-bold
      text-black
      shadow-[0_0_50px_rgba(34,211,238,.45)]
      "
      >

        <span
        className="
        pointer-events-none
        absolute
        inset-0
        -translate-x-full
        skew-x-12
        bg-white/30
        transition-transform
        duration-700
        group-hover:translate-x-full
        "
        />


        <span className="relative z-10">
          View My Work
        </span>


        <ArrowRight
        className="
        relative
        z-10
        h-5
        w-5
        transition-transform
        group-hover:translate-x-2
        "
        />

      </motion.a>








      {/* Resume Button */}


      <motion.a

      href="/resume.pdf"

      target="_blank"

      whileHover={{
        scale:1.08,
        y:-5
      }}

      whileTap={{
        scale:.95
      }}

      className="
      relative
      flex
      h-16
      w-64
      items-center
      justify-center
      gap-3
      rounded-full
      border
      border-white/20
      bg-white/5
      font-semibold
      text-white
      backdrop-blur-xl
      transition-all
      hover:border-cyan-400/50
      hover:bg-white/10
      "

      >

        <FileText
        className="
        h-5
        w-5
        text-cyan-400
        "
        />


        View Resume


      </motion.a>


      </motion.div>







      {/* Social */}


      <div className="mt-12">
        <HeroSocial/>
      </div>



    </div>
  );
}