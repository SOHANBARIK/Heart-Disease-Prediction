import React from "react";
import logo from "./image/logo.PNG";

const Contact = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "50px 20px",
        background: "linear-gradient(to bottom, #ffffff, #fde0e0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          maxWidth: "900px",
          width: "100%",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: "1",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "140px",
              marginBottom: "20px",
              borderRadius: "12px", // Rounded corners
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)", // Shadow/border effect
            }}
          />

          <p
            style={{
              fontSize: "18px",
              color: "#b71c1c",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            📧 medinauts.team@gmail.com
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "#b71c1c",
              fontWeight: "600",
            }}
          >
            📞 +91 9876543210
          </p>
        </div>

        {/* Right Section */}
        <div style={{ flex: "1" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "28px",
              color: "#b71c1c",
              fontWeight: "700",
            }}
          >
            Get in Touch
          </h2>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "100%",
            }}
          >
            <input type="text" placeholder="Your Name" style={inputStyle} />
            <input type="email" placeholder="Your Email" style={inputStyle} />
            <textarea placeholder="Your Message" rows="5" style={inputStyle} />

            <button
              type="submit"
              style={{
                ...btnStyle,
                width: "100%",
                display: "block",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #e2bcbc",
  fontSize: "16px",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
};

const btnStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#b71c1c",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.3s",
  boxSizing: "border-box",
};

export default Contact;
