"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "./projectsData";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all"
    >
      {/* Preview */}

      <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20">

        <h3 className="text-2xl font-black text-cyan-300">
          {project.title}
        </h3>

        {project.featured && (
          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 text-sm font-bold text-black">
            <Star size={15} />
            Featured
          </div>
        )}

      </div>

      <div className="p-7">

        <p className="leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-cyan-400"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}