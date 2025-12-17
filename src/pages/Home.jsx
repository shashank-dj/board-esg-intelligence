export default function Home() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-primary">
          Board-Level ESG Decision Intelligence
        </h1>

        <p className="text-textsub text-lg">
          A secure platform for Private Equity firms and Boards of Directors to
          document, validate, and evidence ESG-related decisions —
          protecting governance integrity and long-term value.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-borderlight rounded-xl">
            <h3 className="font-semibold text-primary">Why this exists</h3>
            <p className="text-textsub mt-2 text-sm">
              ESG decisions are made, but rarely defensibly documented.
              This platform creates a system-of-record for governance.
            </p>
          </div>

          <div className="p-6 bg-white border border-borderlight rounded-xl">
            <h3 className="font-semibold text-primary">Who it’s for</h3>
            <p className="text-textsub mt-2 text-sm">
              PE firms, independent directors, and governance committees
              facing ESG scrutiny from LPs and regulators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
