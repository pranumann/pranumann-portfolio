"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "./navData";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <div className="flex flex-col py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}