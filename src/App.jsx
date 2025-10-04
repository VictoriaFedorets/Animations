import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CubePage from "./pages/CubePage/CubePage";
import SpherePage from "./pages/SpherePage/SpherePage";
import PlaygroundPage from "./pages/PlaygroundPage/PlaygroundPage";
import CapybaraPage from "./pages/CapybaraPage/CapybaraPage";
import PlanePage from "./pages/PlanePage/PlanePage";
import WavyPlane from "./pages/WavyPage/WavyPage";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#222" }}>
        <Link to="/cube" style={{ margin: "0 10px", color: "#fff" }}>
          Cube
        </Link>
        <Link to="/sphere" style={{ margin: "0 10px", color: "#fff" }}>
          Sphere
        </Link>
        <Link to="/plane" style={{ margin: "0 10px", color: "#fff" }}>
          Plane
        </Link>

        <Link to="/wavy" style={{ margin: "0 10px", color: "#fff" }}>
          WavyPlane
        </Link>
        <Link to="/playground" style={{ margin: "0 10px", color: "#fff" }}>
          Playground
        </Link>
        <Link to="/capybara" style={{ margin: "0 10px", color: "#fff" }}>
          Capybara
        </Link>
      </nav>

      <Routes>
        <Route path="/cube" element={<CubePage />} />
        <Route path="/sphere" element={<SpherePage />} />
        <Route path="/plane" element={<PlanePage />} />
        <Route path="/wavy" element={<WavyPlane />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/capybara" element={<CapybaraPage />} />
        <Route path="*" element={<CubePage />} />
      </Routes>
    </Router>
  );
}
