"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import EducationCard from "./EducationCard";
import { educationData } from "./educationData";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-36"
    >
      {/* ================= Content ================= */}

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-400/20
              bg-white/5
              px-7
              py-3
              backdrop-blur-xl
            "
          >
            <GraduationCap
              className="
                h-5
                w-5
                text-cyan-300
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.4em]
                text-cyan-300
              "
            >
              EDUCATION
            </span>

            <Sparkles className="h-4 w-4 text-cyan-300" />
          </div>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 flex max-w-4xl flex-col items-center text-center"
        >
          <h2
            className="
              text-5xl
              font-black
              tracking-tight
              text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            Academic
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-sky-300
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}Journey
            </span>
          </h2>

          <div
            className="
              mt-8
              h-1
              w-28
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-sky-300
              to-blue-500
            "
          />

          <p
            className="
              mt-10
              max-w-3xl
              text-center
              text-lg
              leading-9
              text-slate-400
            "
          >
            My academic journey has established a strong foundation in
            Computer Science, Software Engineering, Artificial Intelligence,
            Backend Engineering, Cloud Computing, and modern software
            architecture—enabling me to design scalable, intelligent systems
            for real-world applications.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-24 flex w-full max-w-5xl flex-col items-center gap-10"
        >
          {educationData.map((item) => (
            <EducationCard
              key={item.degree}
              degree={item.degree}
              stream={item.stream}
              college={item.college}
              year={item.year}
              description={item.description}
              highlights={item.highlights}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}