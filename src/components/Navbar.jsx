import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./image/logo.PNG"; // <-- Import image
import HeartFormModal from "./HeartFormModal"; // <-- Make sure path is correct

const Navbar = () => {
  const [showPredictModal, setShowPredictModal] = useState(false);

  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 40px",
          backgroundColor: "#fff",
          color: "#d32f2f",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Logo and Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "12px", // rounded corners
              transition: "all 0.3s ease",
              boxShadow: "0 0 0 rgba(0,0,0,0)", // initial no shadow
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(211, 47, 47, 0.6)";
              e.currentTarget.style.transform = "translateY(-3px)"; // slide up effect
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          />
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "600",
              margin: 0,
              color: "#d32f2f",
            }}
          >
            MediNauts
          </h1>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "30px", fontSize: "18px", fontWeight: "500" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collaborators">Collaborators</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {/* Predict Link opens modal */}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setShowPredictModal(true)}
          >
            Predict
          </span>
        </div>
      </nav>

      {/* Predict Modal */}
      {showPredictModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 2000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255,255,255,0.3)", // semi-transparent overlay
            backdropFilter: "blur(8px)", // blur background
          }}
          onClick={() => setShowPredictModal(false)}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "16px",
              maxWidth: "900px",
              width: "90%",
              maxHeight: "90%",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking inside
          >
            <HeartFormModal close={() => setShowPredictModal(false)} />
          </div>
        </div>
      )}
    </>
  );
};

// Custom link component with hover effect
const NavLink = ({ to, children }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Link
      to={to}
      style={{
        color: hover ? "#b71c1c" : "#d32f2f",
        textDecoration: "none",
        transition: "0.3s",
        fontWeight: "500",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
};

export default Navbar;
