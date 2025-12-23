import React, { useState, useEffect } from "react";

/* -----------------------------
   Sample (illustrative) records
----------------------------- */
const sampleDecisions = [
  {
    id: "sample-1",
    title: "Approve Renewable Energy Transition Plan",
    theme: "Environment",
    date: "2025-02-10",
    risk: "Energy cost volatility and regulatory exposure",
    outcome: "Approved",
    confidence: "High",
    evidence: "Management briefing and external energy risk assessment",
  },
  {
    id: "sample-2",
    title: "Delay Scope 3 Supplier Mandate",
    theme: "Environment / Supply Chain",
    date: "2024-11-18",
    risk: "Supplier readiness and data reliability",
    outcome: "Deferred",
    confidence: "Medium",
    evidence: "Supplier readiness review and consultant input",
  },
];

export default function Decisions() {
  /* -----------------------------
     State
  ----------------------------- */
  const [userDecisions, setUserDecisions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    theme: "",
    risk: "",
    outcome: "Approved",
    confidence: "High",
    evidence: "",
  });

  /* -----------------------------
     Load saved decisions
  ----------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem("esg-decisions");
    if (stored) {
      setUserDecisions(JSON.parse(stored));
    }
  }, []);

  /* -----------------------------
     Save decisions helper
  ----------------------------- */
  const saveDecisions = (decisions) => {
    setUserDecisions(decisions);
    localStorage.setItem("esg-decisions", JSON.stringify(decisions));
  };

  /* -----------------------------
     Handle form input
  ----------------------------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* -----------------------------
     Save new decision
  ----------------------------- */
  const handleSave = () => {
    const newDecision = {
      id: crypto.randomUUID(),
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };

    saveDecisions([...userDecisions, newDecision]);
    setShowForm(false);
    setFormData({
      title: "",
      theme: "",
      risk: "",
      outcome: "Approved",
      confidence: "High",
      evidence: "",
    });
  };

  const allDecisions = [...sampleDecisions, ...userDecisions];

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-primary">
            ESG Decision Records
          </h1>

          <p className="text-textsub max-w-3xl">
            A structured system-of-record for board-level ESG decisions.
            Each record captures <strong>context, evidence, and rationale</strong>,
            enabling defensible governance during audits, LP reviews, and exits.
          </p>
        </div>

        {/* Why this matters */}
        <div className="bg-white border border-borderlight rounded-xl p-6">
          <h2 className="font-semibold text-primary mb-2">
            Why this matters for Boards
          </h2>
          <ul className="list-disc list-inside text-textsub space-y-2 text-sm">
            <li>Demonstrates that ESG risks were actively considered</li>
            <li>Preserves decision context at the time of action</li>
            <li>Reduces regulatory and litigation hindsight risk</li>
            <li>Creates defensible evidence for governance reviews</li>
          </ul>
        </div>

        {/* Decision Register Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-primary">
            Recorded Decisions
          </h2>

          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:opacity-90"
          >
            + New Decision
          </button>
        </div>

        {/* Decisions List */}
        <div className="space-y-4">
          {allDecisions.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-borderlight rounded-xl p-6 hover:shadow-sm transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-primary">{d.title}</h3>
                  <p className="text-xs text-textsub mt-1">
                    {d.theme} • {d.date}
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    d.outcome === "Approved"
                      ? "bg-green-100 text-green-700"
                      : d.outcome === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {d.outcome}
                </span>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-textsub">
                <div>
                  <p className="font-medium text-textmain">Risk Considered</p>
                  <p>{d.risk}</p>
                </div>

                <div>
                  <p className="font-medium text-textmain">Evidence</p>
                  <p>{d.evidence}</p>
                </div>
              </div>

              <div className="mt-4 text-xs text-textsub">
                Confidence: <strong>{d.confidence}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">
              <h2 className="text-lg font-semibold text-primary">
                New ESG Decision
              </h2>

              <input
                name="title"
                placeholder="Decision title"
                className="w-full border rounded p-2 text-sm"
                value={formData.title}
                onChange={handleChange}
              />

              <input
                name="theme"
                placeholder="ESG Theme (e.g. Climate, Supply Chain)"
                className="w-full border rounded p-2 text-sm"
                value={formData.theme}
                onChange={handleChange}
              />

              <textarea
                name="risk"
                placeholder="Risk considered"
                className="w-full border rounded p-2 text-sm"
                value={formData.risk}
                onChange={handleChange}
              />

              <textarea
                name="evidence"
                placeholder="Evidence reviewed"
                className="w-full border rounded p-2 text-sm"
                value={formData.evidence}
                onChange={handleChange}
              />

              <div className="grid grid-cols-2 gap-3">
                <select
                  name="outcome"
                  className="border rounded p-2 text-sm"
                  value={formData.outcome}
                  onChange={handleChange}
                >
                  <option>Approved</option>
                  <option>Deferred</option>
                  <option>Rejected</option>
                </select>

                <select
                  name="confidence"
                  className="border rounded p-2 text-sm"
                  value={formData.confidence}
                  onChange={handleChange}
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="text-sm text-textsub"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-primary text-white rounded text-sm"
                >
                  Save Decision
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
