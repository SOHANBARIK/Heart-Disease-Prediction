// HeartResult.jsx (modified)
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function calculateRisk(data) {
  if (!data) return 0; // prevent undefined error
  let score = 0;
  if (data.age > 50) score += 15;
  if (data.chol > 200) score += 15;
  if (data.trestbps > 130) score += 10;
  if (data.exang === 1 || data.exang === "1") score += 20;
  if (data.cp === 2 || data.cp === 3 || data.cp === "2" || data.cp === "3") score += 15;
  if (data.thalach < 120) score += 10;
  if (Number(data.oldpeak) > 2.0) score += 15;
  return Math.min(score, 95);
}

const HeartResultModal = ({ close }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const { form, prediction } = state;

  const riskScore = calculateRisk(form);

  if (!form && !prediction) return <p>No data provided</p>;

  return (
    <div style={overlay}>
      <div style={card}>
        <button style={closeBtn} onClick={() => navigate(-1)}>×</button>
        <h1 style={mainTitle}>Heart Disease Prediction Result</h1>
        <p style={subTitle}>Based on your submitted clinical parameters</p>

        <div style={resultBox}>
  
          {/* High / Low Risk Header */}
          <h2 style={riskTitle}>
            {prediction
              ? prediction.prediction === 1
                ? "⚠️ High Risk Detected"
                : "✅ Low Risk Detected"
              : riskScore >= 50
                ? "⚠️ High Risk Detected"
                : "✅ Low Risk Detected"}
          </h2>

          {/* Model Response */}
          {prediction ? (
            <div style={{ marginTop: 6 }}>
              
              {/* Interpreted result text */}
              <div
                style={{
                  fontWeight: "bold",
                  color: prediction.prediction === 1 ? "red" : "green",
                  marginBottom: 8,
                }}
              >
                {prediction.prediction === 1
                  ? "⚠️ The model predicts that you have heart disease."
                  : "✅ The model predicts that you do not have heart disease."}
              </div>

              {/* Raw model output values */}
              <div>
                Prediction value: <b>{prediction.prediction}</b>
              </div>
              <div>
                Model probability:{" "}
                <b>{(prediction.probability ?? 0).toFixed(3)}</b>
              </div>
            </div>
          ) : (
            <p style={{ marginTop: 8 }}>
              No server prediction available — using local heuristic score.
            </p>
          )}

          {/* Estimated Risk Score */}
          <p style={riskPercentage}>
            Estimated Risk Score:{" "}
            <b>
              {prediction
                ? Math.round((prediction.probability ?? 0) * 100) + "%"
                : riskScore + "%"}
            </b>
          </p>
        </div>


        <h3 style={sectionTitle}>Your Entered Parameters</h3>
        <div style={grid}>
          {form
            ? Object.entries(form).map(([key, value]) => (
                <div key={key} style={infoItem}>
                  <span style={infoLabel}>{key.toUpperCase()} : </span>
                  <span style={infoValue}>{String(value)}</span>
                </div>
              ))
            : <div style={infoItem}>No form data</div>
          }
        </div>

        <div style={btnRow}>
          <button
            style={newBtn}
            onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = "left center"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = "right center"}
            onClick={() => navigate(-1)}
          >
            Analyze New Patient
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- STYLES ---------------- (same as your original file) */
const overlay = { position:"fixed", top:0, left:0, width:"100vw", height:"100vh", background:"rgba(0,0,0,0.5)", backdropFilter:"blur(8px)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:1000, padding:"20px" };
const card = { width:"90%", maxWidth:"1000px", background:"#fff", borderRadius:"20px", padding:"30px 40px", boxShadow:"0 8px 25px rgba(0,0,0,0.25)", position:"relative", maxHeight:"90vh", overflowY:"auto" };
const closeBtn = { position:"absolute", top:"18px", right:"20px", fontSize:"32px", border:"none", background:"none", cursor:"pointer", color:"#222" };
const mainTitle = { fontSize:"28px", fontWeight:"700", textAlign:"center", color:"red", marginBottom:"5px" };
const subTitle = { textAlign:"center", fontSize:"14px", color:"#666", marginBottom:"20px" };
const resultBox = { background:"#f6f6f6", padding:"25px", borderRadius:"20px", textAlign:"center", marginBottom:"25px" };
const riskTitle = { fontSize:"22px", fontWeight:"700", marginBottom:"8px" };
const riskPercentage = { fontSize:"16px", color:"#444" };
const sectionTitle = { fontSize:"18px", marginBottom:"10px", fontWeight:"600", borderBottom:"2px solid #ddd", paddingBottom:"5px", color:"#333" };
const grid = { display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px", marginBottom:"25px" };
const infoItem = { background:"#fafafa", padding:"12px", borderRadius:"12px", boxShadow:"0 2px 6px rgba(0,0,0,0.1)" };
const infoLabel = { fontSize:"12px", fontWeight:"600", color:"#777" };
const infoValue = { fontSize:"14px", fontWeight:"700", color:"#222" };
const btnRow = { display:"flex", justifyContent:"center", marginTop:"10px" };
const newBtn = {
  backgroundSize:"200% auto",
  backgroundImage:"linear-gradient(to right,#00008b 0%,#00008b 50%,#ff0000 50%,#ff0000 100%)",
  color:"#fff",
  padding:"12px 20px",
  borderRadius:"15px",
  border:"none",
  fontSize:"14px",
  cursor:"pointer",
  transition:"0.4s ease",
  backgroundPosition:"right center"
};

export default HeartResultModal;

