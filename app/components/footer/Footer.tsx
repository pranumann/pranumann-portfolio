"use client";

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-center text-slate-400">
          © {new Date().getFullYear()} Praveen Yadav. Made with{" "}
          <FaHeart className="inline text-red-500" /> using Next.js & Tailwind
          CSS.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/pranumann"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/pranumann"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}