// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Index from "./components/index";
import AudioAnalyzer from "./components/audio-analyzer";
import React from "react";

function App() {
  return (
    <Router>
      <div className={`app-wrapper`}>
        {}
        <nav className="flex">
          <Link to="/">To Home</Link>
          <Link to="/audio-analyzer">To Karaoke</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/esoteric-ensembles" element={<Index />} />
          <Route path="/audio-analyzer" element={<AudioAnalyzer />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
