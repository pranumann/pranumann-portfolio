"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { navLinks } from "./navData";

export default function MobileMenu() {

  const [open, setOpen] = useState(false);


  return (
    <>


      {/* Menu Button */}

      <motion.button

        whileTap={{
          scale:.9
        }}

        whileHover={{
          scale:1.05
        }}

        onClick={() => setOpen(!open)}

        className="
        relative
        flex h-12 w-12
        items-center justify-center
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/5
        text-white
        backdrop-blur-xl
        shadow-lg
        shadow-cyan-500/10
        "

      >

        <span
          className="
          absolute inset-0
          bg-gradient-to-br
          from-cyan-400/20
          to-blue-500/20
          opacity-0
          hover:opacity-100
          transition
          "
        />


        {
          open 
          ?
          <X size={23} className="relative"/>
          :
          <Menu size={23} className="relative"/>
        }


      </motion.button>



      <AnimatePresence>


      {
        open && (

          <>


          {/* Overlay */}


          <motion.div

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            exit={{
              opacity:0
            }}

            onClick={() => setOpen(false)}

            className="
            fixed inset-0
            z-40
            bg-black/60
            backdrop-blur-md
            "

          />




          {/* Menu Card */}


          <motion.div


            initial={{
              opacity:0,
              y:-40,
              scale:.92
            }}

            animate={{
              opacity:1,
              y:0,
              scale:1
            }}

            exit={{
              opacity:0,
              y:-40,
              scale:.92
            }}


            transition={{
              duration:.35,
              ease:"easeOut"
            }}


            className="
            fixed
            left-1/2
            top-24
            z-50
            w-[92%]
            max-w-sm
            -translate-x-1/2

            rounded-[28px]

            border
            border-white/10

            bg-slate-950/80

            p-6

            backdrop-blur-3xl

            shadow-[0_25px_90px_rgba(0,0,0,.6)]

            "

          >



            {/* Header */}


            <div
              className="
              mb-6
              flex
              items-center
              gap-4
              border-b
              border-white/10
              pb-5
              "
            >


              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl

                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-purple-600

                text-lg
                font-bold
                text-white

                shadow-lg
                shadow-cyan-500/30
                "
              >
                P
              </div>



              <div>

                <h2
                  className="
                  text-[18px]
                  font-semibold
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


            </div>




            {/* Links */}


            <div className="flex flex-col gap-2">


              {
                navLinks.map((link,index)=>(


                  <motion.a

                    key={link.name}

                    href={link.href}

                    onClick={() => setOpen(false)}


                    initial={{
                      opacity:0,
                      x:-25
                    }}

                    animate={{
                      opacity:1,
                      x:0
                    }}

                    transition={{
                      delay:index*.07
                    }}


                    whileHover={{
                      x:8
                    }}


                    className="
                    group
                    flex
                    items-center
                    rounded-2xl
                    px-4
                    py-3

                    text-[14px]
                    font-medium

                    text-slate-300

                    transition

                    hover:bg-cyan-400/10
                    hover:text-cyan-300

                    "

                  >

                    <span
                      className="
                      mr-3
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-cyan-400
                      opacity-0
                      group-hover:opacity-100
                      transition
                      "
                    />


                    {link.name}


                  </motion.a>


                ))
              }


            </div>





            {/* Resume */}



            <motion.a


              href="/resume/Praveen_Yadav_Resume.pdf"

              download


              whileHover={{
                scale:1.04,
                y:-2
              }}

              whileTap={{
                scale:.96
              }}


              className="
              group
              relative
              mt-7

              flex
              w-full
              items-center
              justify-center
              gap-2

              overflow-hidden

              rounded-2xl

              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-600

              py-3.5

              text-[13px]

              font-bold

              text-slate-950

              shadow-lg

              shadow-cyan-500/40

              "

            >


              <span
                className="
                absolute
                inset-0
                -translate-x-full
                bg-white/30
                group-hover:translate-x-full
                transition-transform
                duration-700
                "
              />


              <Download size={17}/>


              Download Resume


              <Sparkles
                size={14}
                className="animate-pulse"
              />


            </motion.a>



          </motion.div>


          </>

        )
      }


      </AnimatePresence>


    </>
  );
}