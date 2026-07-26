"use client";

import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { aboutData } from "./aboutData";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 sm:py-36"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >

          {/* Badge */}

          <span
            className="
              inline-flex
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
            ABOUT ME
          </span>

          {/* Title */}

          <h2
            className="
              mt-10
              text-center
              text-4xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            {aboutData.title}
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-6
              text-center
              text-xl
              font-semibold
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            {aboutData.subtitle}
          </p>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-10
              max-w-4xl
              text-center
              text-[17px]
              leading-9
              text-slate-400
            "
          >
            {aboutData.description}
          </p>

        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mt-20
            grid
            w-full
            max-w-6xl
            gap-7
            sm:grid-cols-2
            lg:grid-cols-4
            place-items-center
          "
        >
          {aboutData.stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex w-full justify-center"
            >
              <AboutCard
                number={item.number}
                label={item.label}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Developer Statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
          }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <p
            className="
              text-center
              text-lg
              leading-9
              text-slate-400
            "
          >
            Building intelligent software combining{" "}
            <span className="font-semibold text-white">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              Backend Engineering
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">
              Cloud Infrastructure
            </span>{" "}
            to create scalable, production-ready solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}