import React from "react";

const sampleDecisions = [
  {
    id: 1,
    title: "Approve Renewable Energy Transition Plan",
    theme: "Environment",
    date: "2025-02-10",
    risk: "Energy cost volatility and regulatory exposure",
    outcome: "Approved",
    confidence: "High",
    evidence: "Audit readiness score: 72, CSRD maturity: Level 2",
  },
  {
    id: 2,
    title: "Delay Scope 3 Supplier Mandate",
    theme: "Environment / Supply Chain",
    date: "2024-11-18",
    risk: "Supplier readiness and data reliability",
    outcome: "Deferred",
    confidence: "Medium",
    evidence: "Scope 3 estimated, data quality flagged as partial",
  },
];

export default function Decisions() {
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

        {/* Decision Register */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">
            Recorded Decisions
          </h2>

          <div className="space-y-4">
            {sampleDecisions.map((d) => (
              <div
                key={d.id}
                className="bg-white border border-borderlight rounded-xl p-6 hover:shadow-sm transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-primary">
                      {d.title}
                    </h3>
                    <p className="text-xs text-textsub mt-1">
                      {d.theme} • {d.date}
                    </p>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      d.outcome === "Approved"
                        ? "bg-green-100 text-green-700"
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
                    <p className="font-medium text-textmain">Evidence Snapshot</p>
                    <p>{d.evidence}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-textsub">
                  <span>
                    Confidence: <strong>{d.confidence}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="border border-dashed border-borderlight rounded-xl p-6 text-center">
          <p className="text-textsub text-sm">
            In a full deployment, decisions are linked to live ESG data,
            audit scores, and CSRD maturity at the time of approval.
          </p>
          <p className="mt-2 text-xs text-textsub">
            (Decision creation, approvals, and evidence locking are intentionally
            restricted to authorized board members.)
          </p>
        </div>
      </div>
    </section>
  );
}
