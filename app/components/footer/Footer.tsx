"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";


const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/pranumann",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/pranumann",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/pranumann",
  },
];


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];


export default function Footer() {

  return (

    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
      "
    >


      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1400px]
          flex-col
          items-center
          px-6
          py-20
        "
      >



        {/* Logo */}

        <motion.a
          href="#home"

          whileHover={{
            scale:1.08,
          }}

          className="
            text-3xl
            font-black
            tracking-tight
          "
        >

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
            Pran
          </span>


          <span className="text-white">
            umann
          </span>


        </motion.a>




        {/* Description */}

        <p
          className="
            mt-5
            max-w-xl
            text-center
            text-sm
            leading-7
            text-slate-400
          "
        >
          AI Software Engineer crafting intelligent systems,
          scalable backend architectures and next-generation
          cloud-native applications.
        </p>




        {/* Navigation */}

        <div
          className="
            mt-12
            flex
            w-full
            max-w-5xl
            flex-wrap
            justify-center
            gap-3
            rounded-3xl
            border
            border-white/10
            bg-transparent
            p-5
            backdrop-blur-sm
          "
        >

          {links.map((link,index)=>(

            <motion.a

              key={link.name}

              href={link.href}


              initial={{
                opacity:0,
                y:20,
              }}


              whileInView={{
                opacity:1,
                y:0,
              }}


              transition={{
                delay:index*0.05,
              }}


              whileHover={{
                y:-3,
                scale:1.05,
              }}


              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-5
                py-2
                text-xs
                font-medium
                tracking-wide
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                hover:text-cyan-300
              "
            >

              {link.name}

            </motion.a>

          ))}


        </div>




        {/* Social Buttons */}

        <div
          className="
            mt-12
            flex
            justify-center
            gap-6
          "
        >

          {socials.map((social)=>{

            const Icon = social.icon;


            return (

              <motion.a

                key={social.name}

                href={social.href}

                target="_blank"

                rel="noopener noreferrer"


                whileHover={{
                  y:-8,
                  scale:1.15,
                }}


                whileTap={{
                  scale:.95,
                }}


                className="
                  group
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-transparent
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                "
              >

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-cyan-400/20
                    opacity-0
                    blur-xl
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                />


                <Icon
                  size={23}
                  className="relative z-10"
                />


              </motion.a>

            );

          })}


        </div>




        {/* Bottom */}

        <div
          className="
            mt-14
            w-full
            border-t
            border-white/10
            pt-8
            text-center
          "
        >

          <p
            className="
              text-xs
              text-slate-500
            "
          >

            © {new Date().getFullYear()}
            {" "}

            <span className="text-slate-300">
              Praveen Yadav
            </span>

            {" "}
            • Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.

          </p>


        </div>



      </div>


    </footer>

  );
}