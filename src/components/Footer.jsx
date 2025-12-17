export default function Footer() {
  return (
    <footer className="border-t border-borderlight bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-textsub flex justify-center">
        © {new Date().getFullYear()} Board ESG Intelligence · Confidential Product Concept
      </div>
    </footer>
  );
}
