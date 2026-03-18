import { useState } from "react";

const MOCK_RESULT = {
  overall_score: 64,
  overall_rating: "Moderate",
  environmental_score: 58,
  social_score: 72,
  governance_score: 61,
  executive_summary:
    "The company demonstrates solid social performance with commendable gender diversity targets and community investment programmes. However, material gaps exist in Scope 3 emissions disclosure and board-level climate accountability, presenting reputational and regulatory risk as CSRD requirements take effect in 2025.",
  risk_flags: [
    {
      severity: "red",
      pillar: "Environmental",
      title: "Scope 3 emissions not disclosed",
      finding:
        "The report omits Scope 3 supply chain emissions entirely, accounting for an estimated 70–85% of total carbon footprint in this sector. This is a material gap under CSRD and TCFD frameworks.",
      evidence_quote:
        "We report Scope 1 and Scope 2 emissions in line with the GHG Protocol. Scope 3 reporting is under review.",
      board_question:
        "When will we have a credible Scope 3 baseline, and who is accountable at board level for delivering it?",
    },
    {
      severity: "amber",
      pillar: "Governance",
      title: "No board-level climate expertise disclosed",
      finding:
        "The report does not identify any board member with substantive climate or sustainability expertise. This increases the risk that ESG strategy lacks effective board oversight.",
      evidence_quote:
        "The board is responsible for oversight of ESG matters, delegated to the Audit and Risk Committee.",
      board_question:
        "Does the Audit and Risk Committee have the specialist knowledge to challenge management's ESG assumptions?",
    },
    {
      severity: "amber",
      pillar: "Environmental",
      title: "Net zero target lacks interim milestones",
      finding:
        "A 2050 net zero commitment is stated but no 2030 interim target or decarbonisation pathway is provided, making the commitment unverifiable and potentially exposed as greenwashing.",
      evidence_quote:
        "We are committed to achieving net zero by 2050 in line with the Paris Agreement.",
      board_question:
        "What are our 2030 and 2035 interim targets, and have they been validated by a third party?",
    },
    {
      severity: "green",
      pillar: "Social",
      title: "Strong gender diversity at senior level",
      finding:
        "40% female representation at senior leadership is above sector average and backed by a published progression framework. This is a genuine strength to highlight to investors.",
      evidence_quote:
        "Women represent 40% of our senior leadership population, up from 32% in 2022.",
      board_question:
        "How do we ensure this progress extends to board composition and the CEO pipeline?",
    },
  ],
  priority_actions: [
    "Commission a Scope 3 emissions inventory from a specialist provider within Q1 — set a board deadline for the first disclosed figure",
    "Appoint or designate a board member with verified climate expertise; disclose credentials in the next annual report",
    "Publish a science-based interim target for 2030 and submit to SBTi for validation",
    "Request management to produce a CSRD readiness gap analysis ahead of the 2025 mandatory reporting cycle",
  ],
};

function PillarBar({ label, letter, score, colorClass, barColor }) {
  return (
    <div className={`rounded-2xl border border-white/5 bg-white/[0.02] p-5 relative overflow-hidden`}>
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${barColor}`} />
      <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{letter}</div>
      <div className="text-sm font-medium text-white/70 mb-3">{label}</div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
        <div
          className={`h-full rounded-full transition-all duration-700 ${colorClass}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <div className="text-2xl font-light text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
        {score}<span className="text-sm text-white/30">/100</span>
      </div>
    </div>
  );
}

function RiskFlag({ flag }) {
  const [open, setOpen] = useState(false);
  const severityMap = {
    red: { label: "High Risk", dot: "bg-red-400", badge: "bg-red-500/10 text-red-400 border-red-500/20" },
    amber: { label: "Watch", dot: "bg-amber-400", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    green: { label: "Strength", dot: "bg-emerald-400", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  };
  const s = severityMap[flag.severity] || severityMap.amber;

  return (
    <div
      className="border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden cursor-pointer hover:border-white/10 transition-all"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-3 p-4">
        <span className={`text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${s.badge} flex-shrink-0`}>
          {s.label}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-white/30 border border-white/8 px-3 py-1 rounded-full flex-shrink-0">
          {flag.pillar}
        </span>
        <span className="text-sm text-white/80 font-medium flex-1">{flag.title}</span>
        <span className={`text-white/30 transition-transform ${open ? "rotate-90" : ""}`}>›</span>
      </div>
      {open && (
        <div className="px-4 pb-5 border-t border-white/5 pt-4 space-y-3">
          <p className="text-sm text-white/45 leading-relaxed">{flag.finding}</p>
          {flag.evidence_quote && (
            <blockquote className="border-l-2 border-white/10 pl-4 text-xs text-white/30 italic leading-relaxed">
              "{flag.evidence_quote}"
            </blockquote>
          )}
          {flag.board_question && (
            <div className="bg-blue-500/5 border border-blue-500/15 rounded-lg p-3 text-sm text-blue-300/80">
              <span className="font-semibold text-blue-400">💬 Board question: </span>
              {flag.board_question}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Decisions() {
  const [apiKey, setApiKey] = useState("");
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("Manufacturing");
  const [year, setYear] = useState("2024");
  const [reportText, setReportText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [useMock, setUseMock] = useState(false);

  const ratingColors = {
    Excellent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Good: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    Moderate: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    Poor: "text-red-400 bg-red-500/10 border-red-500/20",
    Critical: "text-red-500 bg-red-500/15 border-red-500/25",
  };

  async function runAnalysis() {
    setError("");
    if (useMock) {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1800));
      setResult({ ...MOCK_RESULT, company: company || "Demo Corp", sector, year });
      setLoading(false);
      return;
    }
    if (!apiKey) return setError("Please enter your Anthropic API key.");
    if (!reportText.trim()) return setError("Please paste ESG report text to analyse.");

    setLoading(true);
    try {
      const prompt = `You are an expert ESG analyst advising a corporate board. Analyse the ESG/sustainability report for ${company || "the company"} (Sector: ${sector}, Year: ${year}).

Return ONLY a valid JSON object (no markdown, no backticks):
{
  "overall_score": <0-100>,
  "overall_rating": "<Excellent|Good|Moderate|Poor|Critical>",
  "environmental_score": <0-100>,
  "social_score": <0-100>,
  "governance_score": <0-100>,
  "executive_summary": "<2-3 board-level sentences>",
  "risk_flags": [
    {
      "severity": "<red|amber|green>",
      "pillar": "<Environmental|Social|Governance>",
      "title": "<max 10 words>",
      "finding": "<2-3 sentences>",
      "evidence_quote": "<max 50 words from the report>",
      "board_question": "<one sharp question for management>"
    }
  ],
  "priority_actions": ["<action 1>","<action 2>","<action 3>","<action 4>"]
}

ESG REPORT:
---
${reportText.slice(0, 12000)}
---`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2500,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      if (!res.ok) {
        const e = await res.json();
        throw new Error(e.error?.message || "API error " + res.status);
      }
      const data = await res.json();
      const raw = data.content.map((b) => b.text || "").join("").replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(raw);
      setResult({ ...parsed, company: company || "Company", sector, year });
    } catch (e) {
      setError("Analysis failed: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-transparent border-t-emerald-500 rounded-full animate-spin" />
          <div className="absolute inset-2 border-2 border-transparent border-t-emerald-500/30 rounded-full animate-spin [animation-direction:reverse] [animation-duration:1.4s]" />
        </div>
        <div className="text-center">
          <p className="text-white/70 font-medium mb-1">Analysing ESG report…</p>
          <p className="text-white/30 text-sm">Scoring pillars · Flagging risks · Preparing board briefing</p>
        </div>
      </div>
    );
  }

  if (result) {
    const flags = [...(result.risk_flags || [])].sort((a, b) => {
      const o = { red: 0, amber: 1, green: 2 };
      return (o[a.severity] ?? 3) - (o[b.severity] ?? 3);
    });
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Result header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10 pb-8 border-b border-white/5">
          <div>
            <h1 className="text-3xl text-white font-bold mb-1" style={{ fontFamily: "'DM Serif Display', serif" }}>
              {result.company}
            </h1>
            <p className="text-sm text-white/30">{result.sector} · {result.year} · ESG Risk Analysis</p>
          </div>
          <div className="bg-white/[0.03] border border-white/8 rounded-2xl px-8 py-5 text-center flex-shrink-0">
            <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Overall score</div>
            <div className="text-4xl font-light text-white mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
              {result.overall_score}<span className="text-sm text-white/30">/100</span>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${ratingColors[result.overall_rating] || ""}`}>
              {result.overall_rating}
            </span>
          </div>
        </div>

        {/* Pillar scores */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <PillarBar letter="E" label="Environmental" score={result.environmental_score} colorClass="bg-emerald-500" barColor="bg-emerald-500" />
          <PillarBar letter="S" label="Social" score={result.social_score} colorClass="bg-blue-500" barColor="bg-blue-500" />
          <PillarBar letter="G" label="Governance" score={result.governance_score} colorClass="bg-amber-500" barColor="bg-amber-500" />
        </div>

        {/* Exec summary */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Executive Summary
          </h2>
          <p className="text-sm text-white/45 leading-relaxed">{result.executive_summary}</p>
        </div>

        {/* Risk flags */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Material Risk Flags
            </h2>
            <span className="text-xs text-white/30 border border-white/8 px-3 py-1 rounded-full bg-white/[0.02]">
              {flags.length} findings
            </span>
          </div>
          <div className="space-y-3">
            {flags.map((f, i) => <RiskFlag key={i} flag={f} />)}
          </div>
        </div>

        {/* Priority actions */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-5" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Priority Actions for the Board
          </h2>
          <div className="space-y-4">
            {(result.priority_actions || []).map((a, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-white/45 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setResult(null)}
          className="text-sm text-white/30 border border-white/8 px-5 py-2.5 rounded-lg hover:text-white/60 hover:border-white/15 transition-all"
        >
          ← Analyse another report
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-white font-bold mb-3" style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.02em" }}>
          ESG Risk <span className="text-emerald-400 italic">Radar</span>
        </h1>
        <p className="text-white/35 text-sm max-w-md mx-auto">
          Upload or paste your sustainability report. The AI agent reads it, scores each pillar, and surfaces material risks with board-ready questions.
        </p>
      </div>

      {/* Demo mode toggle */}
      <div className="flex items-center justify-end gap-3 mb-5">
        <span className="text-xs text-white/30">No API key?</span>
        <button
          onClick={() => setUseMock(!useMock)}
          className={`text-xs px-4 py-1.5 rounded-full border transition-all ${
            useMock
              ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
              : "border-white/10 text-white/35 hover:text-white/60"
          }`}
        >
          {useMock ? "✓ Demo mode on" : "Use demo mode"}
        </button>
      </div>

      {!useMock && (
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 mb-4">
          <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2">
            Anthropic API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-ant-..."
            className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-emerald-500/40 transition-colors"
          />
          <p className="text-[11px] text-white/20 mt-2">
            Stays in your browser. Get one at{" "}
            <a href="https://console.anthropic.com" target="_blank" rel="noreferrer" className="text-emerald-400/60 hover:text-emerald-400">
              console.anthropic.com
            </a>
          </p>
        </div>
      )}

      {/* Meta row */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Company name", value: company, onChange: setCompany, placeholder: "Acme Corp", type: "input" },
          {
            label: "Sector", value: sector, onChange: setSector, type: "select",
            options: ["Manufacturing","Financial Services","Energy","Technology","Retail","Healthcare","Real Estate","Utilities","Other"],
          },
          { label: "Report year", value: year, onChange: setYear, placeholder: "2024", type: "input" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-1.5">{f.label}</label>
            {f.type === "select" ? (
              <select
                value={f.value}
                onChange={(e) => f.onChange(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/8 rounded-lg px-3 py-2.5 text-sm text-white/70 outline-none focus:border-emerald-500/40 transition-colors"
              >
                {f.options.map((o) => <option key={o} value={o} className="bg-zinc-900">{o}</option>)}
              </select>
            ) : (
              <input
                type="text"
                value={f.value}
                onChange={(e) => f.onChange(e.target.value)}
                placeholder={f.placeholder}
                className="w-full bg-white/[0.03] border border-white/8 rounded-lg px-3 py-2.5 text-sm text-white/70 placeholder-white/20 outline-none focus:border-emerald-500/40 transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      {/* Text area */}
      {!useMock && (
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 mb-4">
          <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-2">
            ESG Report Content
          </label>
          <textarea
            value={reportText}
            onChange={(e) => setReportText(e.target.value)}
            rows={8}
            placeholder="Paste your ESG / sustainability report text here…"
            className="w-full bg-transparent text-sm text-white/60 placeholder-white/15 outline-none resize-none leading-relaxed"
          />
        </div>
      )}

      {error && (
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400 mb-4">
          ⚠️ {error}
        </div>
      )}

      <button
        onClick={runAnalysis}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold text-sm py-4 rounded-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
      >
        {useMock ? "Run Demo Analysis →" : "Run Risk Analysis →"}
      </button>
    </div>
  );
}
