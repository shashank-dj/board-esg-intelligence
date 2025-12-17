export default function FeatureCard({ title, desc }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </div>
  );
}

