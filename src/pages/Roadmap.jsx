export default function Roadmap() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-primary">
          Product Roadmap
        </h1>

        <ul className="list-disc list-inside text-textsub space-y-2">
          <li>Decision-type templates (CapEx, suppliers, M&A)</li>
          <li>Validator plug-ins (auditors, ESG advisors)</li>
          <li>Portfolio-level governance analytics</li>
          <li>Exportable LP-ready evidence packs</li>
          <li>Optional external ESG credentials</li>
        </ul>
      </div>
    </section>
  );
}
