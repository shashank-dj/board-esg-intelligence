import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-borderlight bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-primary">
          Board ESG Intelligence
        </Link>

        <div className="flex gap-6 text-sm font-medium text-textsub">
          <Link to="/decisions" className="hover:text-primary transition">
            Decisions
          </Link>
          <Link to="/assistant" className="hover:text-primary transition">
            Assistant
          </Link>
          <Link to="/security" className="hover:text-primary transition">
            Security
          </Link>
          <Link to="/roadmap" className="hover:text-primary transition">
            Roadmap
          </Link>
        </div>
      </div>
    </nav>
  );
}
