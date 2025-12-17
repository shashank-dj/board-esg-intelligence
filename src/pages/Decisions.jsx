export default function Decisions() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-primary">
          ESG Decision Records
        </h1>

        <p className="text-textsub">
          Capture board-level ESG decisions in a structured, auditable format.
          This becomes defensible evidence during LP reviews, audits, and exits.
        </p>

        <div className="bg-white border border-borderlight rounded-xl p-6">
          <ul className="list-disc list-inside text-textsub space-y-2 text-sm">
            <li>Decision context and rationale</li>
            <li>ESG dimensions impacted (E / S / G)</li>
            <li>Trade-offs considered</li>
            <li>Supporting evidence</li>
            <li>Board participants</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
