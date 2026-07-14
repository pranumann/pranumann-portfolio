export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wider">
          <span className="text-cyan-400">PRANU</span>MANN
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </nav>

        {/* Resume Button */}
        <button className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-black transition hover:scale-105">
          Resume
        </button>

      </div>
    </header>
  );
}