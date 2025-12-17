import FeatureCard from "../components/FeatureCard";

export default function Home() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight">
            Board-Level ESG Decision Intelligence
          </h1>
          <p className="text-gray-700 mt-6 text-lg">
            A secure platform designed for Private Equity firms and Boards of Directors
            to document, validate, and evidence ESG-related decisions —
            protecting governance integrity, reputation, and long-term value.
          </p>
        </div>

        {/* PROBLEM */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-gray-700 max-w-3xl">
            ESG decisions are made at board level, but rarely documented in a
            structured, defensible way. When regulators, LPs, or buyers ask
            <em>“How were ESG risks considered?”</em>, boards rely on fragmented
            minutes, emails, and memory.
          </p>
        </div>

        {/* SOLUTION */}
        <div id="product">
          <h2 className="text-2xl font-semibold mb-8">The Solution</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              title="ESG Decision Records"
              desc="Create structured, timestamped records of ESG-relevant board decisions, including context, trade-offs, and supporting evidence."
            />
            <FeatureCard
              title="AI-Assisted Governance Review"
              desc="AI highlights missing ESG considerations, governance gaps, and documentation risks — without making decisions."
            />
            <FeatureCard
              title="Personal Board Member View"
              desc="Each board member maintains a private history of ESG diligence and decision participation across portfolio companies."
            />
            <FeatureCard
              title="Exportable Evidence Packs"
              desc="Generate audit-ready ESG decision evidence for LP reviews, regulatory scrutiny, and exit diligence."
            />
          </div>
        </div>

        {/* WHO IT IS FOR */}
        <div id="who">
          <h2 className="text-2xl font-semibold mb-4">Who It’s For</h2>
          <ul className="list-disc list-inside text-gray-700 max-w-3xl space-y-2">
            <li>Private Equity Operating Partners</li>
            <li>Heads of ESG & Sustainability</li>
            <li>Independent Board Members</li>
            <li>Risk & Governance Committees</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div id="security">
          <h2 className="text-2xl font-semibold mb-4">Security & Trust</h2>
          <p className="text-gray-700 max-w-3xl">
            Designed with PE-grade security principles: role-based access,
            audit logs, encrypted storage, and strict data isolation.
            Customer data is never used to train AI models.
          </p>
        </div>

        {/* ROADMAP */}
        <div id="roadmap">
          <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
          <ul className="list-disc list-inside text-gray-700 max-w-3xl space-y-2">
            <li>Validator plug-ins (auditors, ESG advisors)</li>
            <li>Decision-type templates (CapEx, suppliers, M&A)</li>
            <li>Portfolio-level governance insights</li>
            <li>Optional external ESG credentials</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
