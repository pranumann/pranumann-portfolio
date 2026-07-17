"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {/* Heading */}
      <div>
        <p className="text-sm uppercase tracking-[8px] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-4 text-5xl font-black md:text-6xl">
          Let's Work Together
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
          I'm always open to discussing new opportunities, AI projects,
          backend development, freelance work, or collaborations.
          Feel free to reach out anytime.
        </p>
      </div>

      {/* Contact Items */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <Mail className="text-cyan-400" size={24} />
          <div>
            <p className="text-sm text-slate-400">Email</p>
            <p className="font-medium">monarchpraveen@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <MapPin className="text-cyan-400" size={24} />
          <div>
            <p className="text-sm text-slate-400">Location</p>
            <p className="font-medium">India</p>
          </div>
        </div>

        <a
          href="https://github.com/pranumann"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400 hover:bg-cyan-400/10"
        >
          <FaGithub className="text-2xl text-cyan-400" />
          <div>
            <p className="text-sm text-slate-400">GitHub</p>
            <p className="font-medium">github.com/pranumann</p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/pranumann"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400 hover:bg-cyan-400/10"
        >
          <FaLinkedin className="text-2xl text-cyan-400" />
          <div>
            <p className="text-sm text-slate-400">LinkedIn</p>
            <p className="font-medium">linkedin.com/in/pranumann</p>
          </div>
        </a>
      </div>
    </motion.div>
  );
}