import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Index from './components/index';
import About from './components/about';
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">To Home</Link>
          </li>
          <li>
            <Link to="/about">To About</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );  
}
export default App;
