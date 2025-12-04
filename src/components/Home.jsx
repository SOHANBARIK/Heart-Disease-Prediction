import React, { useState } from "react";
import { FaPlay, FaHeart, FaCheck } from "react-icons/fa";
import HeartFormModal from "./HeartFormModal"; // Make sure path is correct

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Page Content */}
      <div
        style={{
          filter: showModal ? "blur(8px) brightness(0.6)" : "none",
          transition: "filter 0.3s ease",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to bottom, #ffffff, #fde0e0)",
            padding: "40px 80px",
          }}
        >
          {/* Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "1300px",
            }}
          >
            {/* LEFT CONTENT */}
            <div style={{ width: "55%", marginLeft: "40px" }}>
              {/* Badge */}
              <div
                style={{
                  background: "#fde0e0",
                  color: "#e63946",
                  padding: "6px 18px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "fit-content",
                  marginBottom: "14px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#e63946",
                    animation: "beep 1s infinite",
                  }}
                ></span>
                AI-Powered Health Analysis
              </div>

              {/* Heading */}
              <h1
                style={{
                  fontSize: "54px",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                }}
              >
                <span>Protect Your</span>
                <br />
                <span style={{ color: "#e63946" }}>Heart Health</span>
                <br />
                <span>With AI.</span>
              </h1>

              {/* Description Box */}
              <div
                style={{
                  background: "white",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  width: "75%",
                  maxWidth: "500px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  border: "1.5px solid #e4e9f0",
                  marginBottom: "40px",
                  textAlign: "left",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#465269",
                }}
              >
                MediNauts utilizes advanced Machine Learning algorithms to
                predict heart disease risk with 98% accuracy. Early detection
                saves lives.
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "20px", marginBottom: "55px" }}>
                
                {/* ▶ START PREDICTION BUTTON WITH HOVER EFFECT */}
                <button
                  style={{
                    padding: "14px 32px",
                    background: "#b71c1c",
                    color: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.07)";
                    e.target.style.boxShadow = "0 6px 20px rgba(183, 28, 28, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                  onClick={() => setShowModal(true)}
                >
                  Start Prediction →
                </button>

                <button
                  style={{
                    padding: "14px 26px",
                    borderRadius: "12px",
                    border: "2px solid #b71c1c",
                    background: "#fff",
                    color: "#b71c1c",
                    fontSize: "18px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
                  }
                >
                  <FaPlay /> Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "70px" }}>
                <div>
                  <p style={{ margin: 0, fontSize: "30px", fontWeight: "800" }}>98%</p>
                  <span style={{ fontSize: "15px", color: "#465269" }}>
                    Accuracy Rate
                  </span>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "30px", fontWeight: "800" }}>24/7</p>
                  <span style={{ fontSize: "15px", color: "#465269" }}>
                    Instant Results
                  </span>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "30px", fontWeight: "800" }}>50k+</p>
                  <span style={{ fontSize: "15px", color: "#465269" }}>
                    Users Analyzed
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT HEART + BOXES */}
            <div
              style={{
                width: "45%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  animation: "heartbeat 1.2s infinite",
                }}
              >
                <FaHeart
                  style={{
                    color: "#e63946",
                    fontSize: "220px",
                    marginTop: "-100px",
                  }}
                />

                {/* TOP RIGHT BOX */}
                <div
                  style={{
                    position: "absolute",
                    top: "-75px",
                    right: "-55px",
                    background: "white",
                    padding: "12px 20px",
                    borderRadius: "14px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    animation: "heartbeat 1.2s infinite",
                  }}
                >
                  <FaCheck style={{ color: "#2ecc71", fontSize: "20px" }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: "700" }}>Heart Rate</p>
                    <p style={{ margin: 0, fontWeight: "700", color: "#e63946" }}>
                      72 BPM
                    </p>
                  </div>
                </div>

                {/* BOTTOM LEFT BOX */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "35px",
                    left: "-10px",
                    background: "white",
                    padding: "12px 20px",
                    borderRadius: "14px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    animation: "heartbeat 1.2s infinite",
                    transform: "translate(-30%, 40%)",
                  }}
                >
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "#3498db",
                    }}
                  ></span>
                  <div>
                    <p style={{ margin: 0, fontWeight: "700" }}>Status</p>
                    <p style={{ margin: 0, fontSize: "15px", color: "#465269" }}>
                      Normal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {showModal && (
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
            background: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setShowModal(false)}
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
            onClick={(e) => e.stopPropagation()}
          >
            <HeartFormModal close={() => setShowModal(false)} />
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes beep {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.4); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes heartbeat {
            0% { transform: scale(1); }
            30% { transform: scale(1.12); }
            60% { transform: scale(0.97); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
