import { NavLink } from "react-router-dom";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/decisions", label: "Decisions" },
  { to: "/assistant", label: "Assistant" },
  { to: "/security", label: "Security" },
  { to: "/roadmap", label: "Roadmap" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bgsoft/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-base">
            🌱
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-white tracking-tight">BoardESG</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Intelligence</span>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm transition-all duration-150 ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>



        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/50 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-bgsoft px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg text-sm ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-white/50 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
