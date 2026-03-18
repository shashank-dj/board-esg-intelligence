import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: "🚩",
    title: "Risk Radar",
    desc: "Surface material ESG risks from any sustainability report. Red, amber and green flags with board-ready questions.",
    to: "/decisions",
    color: "emerald",
  },
  {
    icon: "⚖️",
    title: "Decision Intelligence",
    desc: "AI-synthesised ESG scoring across Environmental, Social and Governance pillars with peer benchmarking.",
    to: "/decisions",
    color: "blue",
  },
  {
    icon: "💬",
    title: "Board Assistant",
    desc: "Ask anything about your ESG position. Get citation-grounded answers written for non-technical board members.",
    to: "/assistant",
    color: "violet",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    desc: "Your data never trains AI models. SOC 2-aligned. Designed for board-level confidentiality requirements.",
    to: "/security",
    color: "amber",
  },
];

const STATS = [
  { value: "80+", label: "Page reports analysed in seconds" },
  { value: "3×", label: "Pillars: Environment, Social, Governance" },
  { value: "CSRD", label: "EU regulatory framework aligned" },
  { value: "100%", label: "Citation-grounded outputs" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-32 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-emerald-400/70 border border-emerald-500/20 px-4 py-1.5 rounded-full bg-emerald-500/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI-powered ESG intelligence for boards
          </span>

          <h1
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6"
            style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
          >
            Turn ESG reports into<br />
            <span className="text-emerald-400 italic">board decisions</span>
          </h1>

          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Upload any sustainability report. Our AI agent surfaces material risks, scores each pillar, and delivers a board-ready briefing — in under 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/decisions"
              className="px-8 py-3.5 rounded-xl bg-emerald-500 text-emerald-950 text-sm font-semibold hover:bg-emerald-400 transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20"
            >
              Run Risk Analysis →
            </Link>
            <Link
              to="/assistant"
              className="px-8 py-3.5 rounded-xl border border-white/10 text-white/60 text-sm hover:border-white/20 hover:text-white/80 transition-all"
            >
              Try the Assistant
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-2xl font-bold text-emerald-400 mb-1"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-white/30 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl text-white font-bold mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.02em" }}
          >
            Everything a board needs
          </h2>
          <p className="text-white/35 text-sm max-w-md mx-auto">
            Four modules, one platform. Built for board members, sustainability committees and investor relations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {FEATURES.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200 flex gap-5 items-start"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                {f.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-emerald-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">{f.desc}</p>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-white/50 transition-colors self-center text-lg">
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl border border-emerald-500/15 bg-emerald-500/5 p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.06)_0%,transparent_70%)] pointer-events-none" />
          <h2
            className="text-3xl text-white font-bold mb-4 relative"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Ready to brief your board?
          </h2>
          <p className="text-white/40 text-sm mb-8 max-w-sm mx-auto relative">
            Upload your ESG report and get a structured risk briefing in under 60 seconds.
          </p>
          <Link
            to="/decisions"
            className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 text-emerald-950 text-sm font-semibold hover:bg-emerald-400 transition-all hover:-translate-y-0.5"
          >
            Start Analysis →
          </Link>
        </div>
      </section>
    </div>
  );
}
