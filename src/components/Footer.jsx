import React from "react";
import logo from "./image/logo.PNG"; // <-- Correct logo import
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#d32f2f", // medical red
        color: "#fff",
        padding: "50px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* Logo + Mission */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "10px",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "80px",
                borderRadius: "12px", // rounded corners
                transition: "all 0.3s ease",
                boxShadow: "0 0 0 rgba(0,0,0,0)", // initial no shadow
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(255,255,255,0.6)";
                e.currentTarget.style.transform = "translateY(-3px)"; // slide up effect
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            />
            <h1 style={{ fontSize: "36px", margin: 0 }}>MediNauts</h1>
          </div>

          <p style={{ fontSize: "18px", color: "#fff", maxWidth: "600px" }}>
            Our Mission is Deliver innovative health solutions and AI-powered
            prediction tools to improve healthcare outcomes.
          </p>
        </div>

        {/* Quick Links */}
        <div
          style={{
            flex: "2",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a href="/" style={linkStyle}>Home</a>
            <a href="/" style={linkStyle}>Predict</a>
            <a href="/" style={linkStyle}>Consult a Doctor</a>
            <a href="/" style={linkStyle}>Feedback</a>
            <a href="/" style={linkStyle}>Home Collection</a>
            <a href="/" style={linkStyle}>Customer Care</a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a href="/" style={linkStyle}>FAQ’S</a>
            <a href="/">Investor Relations</a>
            <a href="/">Career</a>
            <a href="/contact" style={linkStyle}>Contact Us</a>
            <a href="/" style={linkStyle}>Privacy Policy</a>
            <a href="/" style={linkStyle}>Terms & Conditions</a>
          </div>
        </div>

        {/* Follow + Contact */}
        <div style={{ flex: "1", minWidth: "180px", textAlign: "left" }}>
          <p
            style={{
              fontWeight: "600",
              marginBottom: "10px",
              fontSize: "18px",
            }}
          >
            Follow Us
          </p>

          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <SocialButton link="https://facebook.com" color="#4267B2">
              <FaFacebookF size={20} />
            </SocialButton>

            <SocialButton link="https://twitter.com" color="#1DA1F2">
              <FaTwitter size={20} />
            </SocialButton>

            <SocialButton link="https://linkedin.com" color="#0A66C2">
              <FaLinkedinIn size={20} />
            </SocialButton>
          </div>


          <div style={{ fontSize: "18px", color: "#fff" }}>
            <p style={{ margin: "3px 0" }}>📧 medinauts.team@gmail.com</p>
            <p style={{ margin: "3px 0" }}>☎️ 03582 21156</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
  transition: "0.3s",
};

const SocialButton = ({ link, color, children }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "32px",
      height: "32px",
      backgroundColor: color,
      borderRadius: "50%",
      color: "#fff",
      fontSize: "16px",
      textDecoration: "none",
      fontWeight: "600",
      transition: "0.3s",
    }}
  >
    {children}
  </a>
);

export default Footer;
