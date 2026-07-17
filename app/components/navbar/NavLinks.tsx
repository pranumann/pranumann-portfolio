"use client";

import { navLinks } from "./navData";

export default function NavLinks() {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}