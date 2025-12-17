import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Decisions from "./pages/Decisions";
import Assistant from "./pages/Assistant";
import Security from "./pages/Security";
import Roadmap from "./pages/Roadmap";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bgsoft">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decisions" element={<Decisions />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/security" element={<Security />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
