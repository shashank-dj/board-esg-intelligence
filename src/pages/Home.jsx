export default function Home() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-primary leading-tight sm:leading-snug">
          Board-Level ESG Decision Intelligence
        </h1>

        {/* Subheading */}
        <p className="text-textsub text-base sm:text-lg leading-relaxed max-w-3xl">
          A secure platform for Private Equity firms and Boards of Directors to
          document, validate, and evidence ESG-related decisions — protecting
          governance integrity and long-term value.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-5 sm:p-6 bg-white border border-borderlight rounded-xl">
            <h3 className="font-semibold text-primary text-base">
              Why this exists
            </h3>
            <p className="text-textsub mt-2 text-sm leading-relaxed">
              ESG decisions are made, but rarely defensibly documented.
              This platform creates a system-of-record for governance.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white border border-borderlight rounded-xl">
            <h3 className="font-semibold text-primary text-base">
              Who it’s for
            </h3>
            <p className="text-textsub mt-2 text-sm leading-relaxed">
              PE firms, independent directors, and governance committees
              facing ESG scrutiny from LPs and regulators.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
