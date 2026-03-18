const PILLARS = [
  {
    icon: "🔒",
    title: "Data never trains AI",
    desc: "Your ESG reports and company data are never used to train Anthropic's models. Each session is isolated and ephemeral.",
  },
  {
    icon: "🏛️",
    title: "Board-grade confidentiality",
    desc: "Designed for the sensitivity of board-level information. No data is persisted on our servers between sessions.",
  },
  {
    icon: "🔑",
    title: "Your API key, your control",
    desc: "You bring your own Anthropic API key. It never leaves your browser. We have zero access to your credentials or data.",
  },
  {
    icon: "📋",
    title: "SOC 2-aligned architecture",
    desc: "Built on Anthropic's enterprise API, which undergoes regular third-party security audits and compliance reviews.",
  },
  {
    icon: "🌍",
    title: "GDPR ready",
    desc: "No personal data is collected or stored. The app runs entirely client-side — there is no backend database.",
  },
  {
    icon: "🔍",
    title: "Transparent AI",
    desc: "Every insight is citation-grounded. The AI links its conclusions to specific passages in your report — no black box.",
  },
];

const FRAMEWORKS = [
  { label: "CSRD", full: "Corporate Sustainability Reporting Directive" },
  { label: "TCFD", full: "Task Force on Climate-related Financial Disclosures" },
  { label: "GRI", full: "Global Reporting Initiative" },
  { label: "SBTi", full: "Science Based Targets initiative" },
  { label: "SASB", full: "Sustainability Accounting Standards Board" },
  { label: "UN SDGs", full: "UN Sustainable Development Goals" },
];

export default function Security() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-400/60 border border-emerald-500/15 px-4 py-1.5 rounded-full bg-emerald-500/5 mb-6">
          🔒 Enterprise security
        </span>
        <h1
          className="text-4xl md:text-5xl text-white font-bold mb-5"
          style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.03em" }}
        >
          Built for board-level<br />
          <span className="text-emerald-400 italic">confidentiality</span>
        </h1>
        <p className="text-white/35 text-sm max-w-lg mx-auto leading-relaxed">
          ESG reports contain commercially sensitive information. We've designed BoardESG so your data never leaves your control.
        </p>
      </div>

      {/* Security pillars */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all"
          >
            <div className="text-2xl mb-4">{p.icon}</div>
            <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
            <p className="text-xs text-white/35 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Architecture callout */}
      <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-3xl p-10 mb-16 text-center">
        <div className="text-3xl mb-4">🏗️</div>
        <h2
          className="text-2xl text-white font-bold mb-4"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          100% client-side architecture
        </h2>
        <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed mb-8">
          BoardESG has no backend server. Your report text flows directly from your browser to Anthropic's API and back. Nothing is stored, logged or shared.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          {["Your browser", "→ Anthropic API", "→ AI analysis", "→ Your screen"].map((step, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full border ${
                i % 2 === 0
                  ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400/70"
                  : "text-white/30 border-transparent"
              }`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <h2
          className="text-2xl text-white font-bold mb-6 text-center"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Framework coverage
        </h2>
        <p className="text-white/30 text-sm text-center mb-8">
          The AI agent understands and references these reporting frameworks when analysing your ESG reports.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {FRAMEWORKS.map((f) => (
            <div
              key={f.label}
              className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-1 hover:border-white/10 transition-all"
            >
              <span className="text-sm font-semibold text-emerald-400">{f.label}</span>
              <span className="text-xs text-white/30 leading-snug">{f.full}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
