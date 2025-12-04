import React from "react";
import { useNavigate } from "react-router-dom";

// Import all images
import m1 from "./image/anish.jpeg";
import m2 from "./image/sohan.jpeg";
import m3 from "./image/chayan.jpeg";
import m4 from "./image/jibo.png";
import m5 from "./image/animesh.png";
import team from "./image/team.jpg";

const Collaborators = () => {
  const navigate = useNavigate();

  const members = [
    { img: m1, name: "Anish Haldar", role: "Frontend Developer", email: "anishhaldarkingto@gmail.com", github: "https://github.com/anishhaldar12", linkedin: "https://www.linkedin.com/in/anish-haldar-b47659284" },
    { img: m2, name: "Sohan Barik", role: "Backend Developer", email: "sohanbarik227@gmail.com", github: "https://github.com/SOHANBARIK", linkedin: "https://www.linkedin.com/in/sohan-barik-b6a464286/" },
    { img: m3, name: "Chayan Chattaraj", role: "Full Stack Developer", email: "chayanchattaraj123456789@gmail.com", github: "https://github.com/chayan-chattaraj", linkedin: "https://www.linkedin.com/in/chayan-chattaraj-165231355" },
    { img: m4, name: "Jibotosh Dey", role: "UI/UX Designer", email: "deyjibo44@gmail.com", github: "https://github.com/deyjibo", linkedin: "https://www.linkedin.com/in/jibotosh-dey-3542aa245/" },
    { img: m5, name: "Animesh Naskar", role: "Project Manager", email: "an2190944@gmail.com", github: "https://github.com/Animesh4203", linkedin: "https://www.linkedin.com/in/animesh-naskar-8a1911285" },
  ];

  return (
    <div style={{ background: "#fde0e0", minHeight: "100vh", padding: "40px 20px" }}>
      {/* Top Team Image + Text side by side */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 50px auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        <img
          src={team}
          alt="Team"
          style={{
            width: "380px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />
        <div style={{ maxWidth: "600px" }}>
          <h2 style={{ fontSize: "40px", color: "#b71c1c" }}>Our Team</h2>
          <p style={{ fontSize: "18px", color: "#3a3a3a", marginBottom: "25px" }}>
            Meet the People Behind Your Success
          </p>
          <button
            onClick={() => navigate("/contact")}
            style={{
              padding: "12px 25px",
              fontSize: "16px",
              backgroundColor: "#b71c1c",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Members: first row 2, second row 3 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          maxWidth: "800px",
          margin: "0 auto 50px auto",
        }}
      >
        {members.slice(0, 2).map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {members.slice(2).map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>
    </div>
  );
};

const MemberCard = ({ member }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <img
        src={member.img}
        alt={member.name}
        style={{
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
          margin: "0 auto 15px",
        }}
      />
      <h4 style={{ fontSize: "20px", marginBottom: "5px" }}>{member.name}</h4>
      <p style={{ fontSize: "16px", color: "#555", fontWeight: "bold", marginBottom: "5px" }}>
        {member.role}
      </p>
      <p style={{ fontSize: "14px", color: "#333", whiteSpace: "nowrap" }}>
        Email: {member.email}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          style={btnStyle}
        >
          GitHub
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...btnStyle, background: "#0a66c2" }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: "8px 14px",
  background: "#b71c1c",
  color: "#fff",
  borderRadius: "6px",
  fontSize: "14px",
  textDecoration: "none",
};

export default Collaborators;
