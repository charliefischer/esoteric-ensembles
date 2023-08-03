import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./components/index";
import About from "./components/about";
import React from "react";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <nav className="flex">
          <Link to="/">To Home</Link>
          <Link to="/about">To Karaoke</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/esoteric-ensembles" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
