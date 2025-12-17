import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Board ESG Intelligence
        </Link>

        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <a href="#product">Product</a>
          <a href="#security">Security</a>
          <a href="#who">Who It’s For</a>
          <a href="#roadmap">Roadmap</a>
        </div>
      </div>
    </nav>
  );
}
