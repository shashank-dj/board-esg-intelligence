import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bgsoft mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm">
            🌱
          </div>
          <div>
            <p className="text-sm font-semibold text-white/80">BoardESG Intelligence</p>
            <p className="text-[11px] text-white/30">AI-powered ESG analysis for boards</p>
          </div>
        </div>

        <nav className="flex items-center gap-5">
          {[
            { to: "/decisions", label: "Decisions" },
            { to: "/assistant", label: "Assistant" },
            { to: "/security", label: "Security" },
            { to: "/roadmap", label: "Roadmap" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} BoardESG · Built with Claude AI
        </p>
      </div>
    </footer>
  );
}
