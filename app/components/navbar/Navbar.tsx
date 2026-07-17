"use client";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-black tracking-wide"
        >
          <span className="text-cyan-400">Pran</span>
          umann
        </a>

        {/* Desktop */}

        <NavLinks />

        {/* Resume */}

        <div className="hidden lg:block">
          <a
            href="/resume/Praveen_Yadav_Resume.pdf"
            download
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile */}

        <MobileMenu />

      </div>
    </header>
  );
}