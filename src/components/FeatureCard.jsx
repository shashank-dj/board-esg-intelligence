export default function FeatureCard({ title, desc }) {
  return (
    <div className="border border-borderlight rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>

      {/* ESG Accent line */}
      <div className="h-1 w-10 bg-accent rounded mt-2 mb-3"></div>

      <p className="text-textsub text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
