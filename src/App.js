import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Collaborators from "./components/Collaborators";
import Contact from "./components/Contact";
import HeartResult from "./components/HeartResult";   // ✅ NEW RESULT PAGE

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./index.css";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <div style={{ flex: 1 }}>
          <Routes>

            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/collaborators" element={<Collaborators />} />
            <Route path="/contact" element={<Contact />} />

            {/* NEW RESULT ROUTE */}
            <Route path="/heart-result" element={<HeartResult />} />

            {/* ❌ Removed old heart-disease route */}
            {/* <Route path="/heart-disease" element={<HeartPredictor />} /> */}

          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

