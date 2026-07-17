"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <p className="text-sm uppercase tracking-[8px] text-cyan-400">
          Projects
        </p>

        <h2 className="mt-4 text-5xl font-black md:text-6xl">
          Featured Projects
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A selection of AI, backend and cloud-native projects showcasing my
          experience in building modern software solutions.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}