"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  FolderGit2,
  Cpu,
  Rocket,
} from "lucide-react";

import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const stats = [
  {
    value: "10+",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    value: "AI",
    label: "Solutions",
    icon: Sparkles,
  },
  {
    value: "15+",
    label: "Technologies",
    icon: Cpu,
  },
  {
    value: "24/7",
    label: "Learning",
    icon: Rocket,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 md:py-36"
    >

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            flex
            max-w-5xl
            flex-col
            items-center
            text-center
          "
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-white/5
              px-6
              py-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-300
              backdrop-blur-md
            "
          >
            <Sparkles size={15} />
            Featured Work
          </span>


          {/* Title */}

          <h2
            className="
              mt-10
              text-center
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-6xl
            "
          >
            AI Projects &

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-cyan-300
                via-sky-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Engineering Experiments
            </span>

          </h2>


          {/* Divider */}

          <div
            className="
              mx-auto
              mt-7
              h-[2px]
              w-28
              rounded-full
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
            "
          />


          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-center
              text-[17px]
              leading-8
              text-slate-400
            "
          >
            Building intelligent AI systems, cloud-native
            architectures, scalable backend services and modern
            full-stack applications focused on performance,
            automation and exceptional user experience.
          </p>


        </motion.div>



        {/* Stats */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            grid
            w-full
            max-w-6xl
            place-items-center
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {stats.map((item) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[200px]
                  w-full
                  max-w-[260px]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-transparent
                  p-7
                  text-center
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:border-cyan-400/40
                  hover:bg-white/5
                "
              >

                <div className="relative z-10 flex flex-col items-center">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-400/10
                      text-cyan-300
                    "
                  >
                    <Icon size={24} />
                  </div>


                  <h3
                    className="
                      mt-5
                      text-3xl
                      font-black
                      text-white
                    "
                  >
                    {item.value}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      tracking-wide
                      text-slate-400
                    "
                  >
                    {item.label}
                  </p>


                </div>

              </motion.div>
            );

          })}

        </motion.div>



        {/* Divider */}

        <div
          className="
            mx-auto
            mt-20
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />



        {/* Projects */}

        <div
          className="
            mt-20
            grid
            w-full
            place-items-center
            gap-10
            lg:grid-cols-2
          "
        >

          {projectsData.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                flex
                w-full
                justify-center
              "
            >

              <ProjectCard {...project} />

            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
}