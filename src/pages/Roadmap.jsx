const PHASES = [
  {
    phase: "Phase 1",
    label: "MVP — Live now",
    status: "live",
    items: [
      { done: true, text: "ESG report upload & text paste" },
      { done: true, text: "AI-powered Risk Radar (E, S, G pillar scoring)" },
      { done: true, text: "Material risk flags with severity levels" },
      { done: true, text: "Board question generation per risk" },
      { done: true, text: "Priority action items for the board" },
      { done: true, text: "Board Assistant chat interface" },
    ],
  },
  {
    phase: "Phase 2",
    label: "Product — Q3 2025",
    status: "building",
    items: [
      { done: false, text: "Peer Benchmark — compare two companies side-by-side" },
      { done: false, text: "Board Memo Generator — one-click PDF board pack" },
      { done: false, text: "CSRD Gap Checker — mandatory disclosure checklist" },
      { done: false, text: "Multi-report upload & year-on-year tracking" },
      { done: false, text: "Exportable risk register (CSV / PDF)" },
      { done: false, text: "Regulatory alert digest" },
    ],
  },
  {
    phase: "Phase 3",
    label: "GTM — Q4 2025",
    status: "planned",
    items: [
      { done: false, text: "White-label version for ESG consultancies" },
      { done: false, text: "Subscription SaaS with team workspaces" },
      { done: false, text: "API for integration with board portals (Diligent, Boardvantage)" },
      { done: false, text: "Investor relations module — ESG investor FAQ builder" },
      { done: false, text: "Real-time regulatory change monitoring" },
      { done: false, text: "Custom scoring frameworks per sector" },
    ],
  },
];

const PRINCIPLES = [
  {
    icon: "🎯",
    title: "Board-first design",
    desc: "Every feature is designed for a non-technical board member, not an ESG analyst. Clarity over comprehensiveness.",
  },
  {
    icon: "⚡",
    title: "Speed as a feature",
    desc: "The 60-second briefing is a product promise. We will never add complexity that breaks this constraint.",
  },
  {
    icon: "🔗",
    title: "Regulatory alignment",
    desc: "CSRD, TCFD and GRI are the north star. As regulations evolve, our analysis frameworks evolve with them.",
  },
  {
    icon: "🤝",
    title: "Advisor-friendly",
    desc: "ESG consultants and sustainability advisors can white-label and extend the platform for their clients.",
  },
];

const statusStyles = {
  live: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
  building: "bg-blue-500/10 border-blue-500/25 text-blue-400",
  planned: "bg-white/5 border-white/10 text-white/35",
};

const phaseAccent = {
  live: "bg-emerald-500",
  building: "bg-blue-500",
  planned: "bg-white/15",
};

export default function Roadmap() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1
          className="text-4xl md:text-5xl text-white font-bold mb-5"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
        >
          Where we're<br />
          <span className="text-emerald-400 italic">going</span>
        </h1>
        <p className="text-white/35 text-sm max-w-md mx-auto leading-relaxed">
          BoardESG is building the definitive AI intelligence layer for ESG governance. Here's how we get there.
        </p>
      </div>

      {/* Phases */}
      <div className="space-y-5 mb-20">
        {PHASES.map((p) => (
          <div
            key={p.phase}
            className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden"
          >
            {/* Phase header */}
            <div className={`h-0.5 ${phaseAccent[p.status]}`} />
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/25 mb-1">{p.phase}</div>
                <h2 className="text-white font-semibold text-lg" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {p.label.split("—")[0]}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/35">{p.label.split("—")[1]?.trim()}</span>
                <span className={`text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full border ${statusStyles[p.status]}`}>
                  {p.status === "live" ? "✓ Live" : p.status === "building" ? "In progress" : "Planned"}
                </span>
              </div>
            </div>

            {/* Items */}
            <div className="p-6 grid sm:grid-cols-2 gap-3">
              {p.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 border ${
                      item.done
                        ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                        : "bg-white/3 border-white/8 text-white/20"
                    }`}
                  >
                    {item.done ? "✓" : "○"}
                  </div>
                  <span className={`text-sm leading-snug ${item.done ? "text-white/60" : "text-white/30"}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Principles */}
      <div className="mb-16">
        <h2
          className="text-2xl text-white font-bold mb-8 text-center"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Product principles
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-3xl p-10 text-center">
        <h2
          className="text-2xl text-white font-bold mb-3"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Interested in early access?
        </h2>
        <p className="text-white/35 text-sm mb-6 max-w-sm mx-auto">
          We're working with a small group of boards and ESG advisors to shape the product roadmap.
        </p>
        <a
          href="mailto:hello@boardesg.ai"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold text-sm px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
        >
          Get in touch →
        </a>
      </div>
    </div>
  );
}
