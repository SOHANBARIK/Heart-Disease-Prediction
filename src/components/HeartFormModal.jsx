// HeartFormModal.jsx (modified)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

const HeartFormModal = ({ close }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Convert string form values to numbers where necessary
  const normalizeForm = (f) => ({
    age: Number(f.age),
    sex: Number(f.sex),
    cp: Number(f.cp),
    trestbps: Number(f.trestbps),
    chol: Number(f.chol),
    fbs: Number(f.fbs),
    restecg: Number(f.restecg),
    thalach: Number(f.thalach),
    exang: Number(f.exang),
    oldpeak: Number(f.oldpeak),
    slope: Number(f.slope),
    ca: Number(f.ca),
    thal: Number(f.thal),
  });

  const submitForm = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const payload = normalizeForm(form);

    try {
      // POST to FastAPI predict endpoint
      const res = await fetch(`${API_BASE}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Server ${res.status}: ${txt}`);
      }

      const prediction = await res.json();

      // close modal then navigate to result page with both form & prediction
      if (close) close();
      navigate("/heart-result", { state: { form: payload, prediction } });

    } catch (err) {
      console.error(err);
      setError(err.message || "Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={close} style={closeBtn}>×</button>

        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <h1 style={{ margin: 0, fontSize: 18, color: "red" }}>Medical Analysis</h1>
          <h2 style={{ margin: "3px 0", fontSize: 22, fontWeight: 700, color: "#222" }}>
            Enter Clinical Parameters
          </h2>
          <p style={{ fontSize: 13, color: "#777", marginTop: 6 }}>
            Fill in the details below to generate a real-time risk assessment.
          </p>
        </div>

        <form onSubmit={submitForm}>
          <h3 style={sectionTitle}>🫀 Patient Details</h3>
          <div style={row}>
            <Field label="AGE" name="age" type="number" placeholder="Years" value={form.age} onChange={handleChange} />
            <Field label="SEX" name="sex" type="select" options={[0,1]} value={form.sex} onChange={handleChange} hint={["0: Female","1: Male"]} />
            <Field label="CHEST PAIN TYPE" name="cp" type="select" options={[0,1,2,3]} value={form.cp} onChange={handleChange} hint={["0: Typical","1: Atypical","2: Non-Anginal","3: None"]} />
          </div>

          <h3 style={sectionTitle}>🩺 Clinical Vitals</h3>
          <div style={row}>
            <Field label="RESTING BP" name="trestbps" type="number" placeholder="mm Hg" value={form.trestbps} onChange={handleChange} />
            <Field label="CHOLESTEROL" name="chol" type="number" placeholder="mg/dL" value={form.chol} onChange={handleChange} />
            <Field label="BLOOD SUGAR" name="fbs" type="select" options={[0,1]} value={form.fbs} onChange={handleChange} hint={["0: ≤ 120","1: > 120"]} />
          </div>

          <div style={row}>
            <Field label="RESTING ECG" name="restecg" type="select" options={[0,1,2]} value={form.restecg} onChange={handleChange} hint={["0: Normal","1: ST-T Abn","2: LV Hypertrophy"]} />
            <Field label="MAX HEART RATE" name="thalach" type="number" placeholder="BPM" value={form.thalach} onChange={handleChange} />
            <Field label="EXERCISE ANGINA" name="exang" type="select" options={[0,1]} value={form.exang} onChange={handleChange} hint={["0: No","1: Yes"]} />
          </div>

          <h3 style={sectionTitle}>🧪 Test Results</h3>
          <div style={row}>
            <Field label="ST DEPRESSION" name="oldpeak" type="text" placeholder="e.g. 1.5" value={form.oldpeak} onChange={handleChange} />
            <Field label="ST SLOPE" name="slope" type="select" options={[0,1,2]} value={form.slope} onChange={handleChange} hint={["0: Up","1: Flat","2: Down"]} />
            <Field label="MAJOR VESSELS" name="ca" type="select" options={[0,1,2,3]} value={form.ca} onChange={handleChange} hint={["0-3 colored vessels"]} />
          </div>
          <div style={row}>
            <Field label="THALLIUM" name="thal" type="select" options={[1,2,3]} value={form.thal} onChange={handleChange} hint={["1: Normal","2: Fixed","3: Reversible"]} />
          </div>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button
              type="submit"
              style={processBtn}
              disabled={loading}
              onMouseEnter={(e)=>e.currentTarget.style.backgroundPosition="left center"}
              onMouseLeave={(e)=>e.currentTarget.style.backgroundPosition="right center"}
            >
              {loading ? "Processing…" : "Process Data ❤️"}
            </button>
          </div>

          {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

/* Field component and styles unchanged from your file */
const Field = ({ label, name, type, placeholder, value, onChange, options, hint }) => (
  <div style={fieldBox}>
    <label style={labelStyle}>{label}</label>
    {type === "select" ? (
      <select name={name} value={value} onChange={onChange} required style={inputStyle}>
        <option value="">Select</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    ) : (
      <input name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} required style={inputStyle} />
    )}
    {hint && <div style={hintStyle}>{hint.map((h,i)=> <div key={i}>{h}</div>)}</div>}
  </div>
);

/* styles (same as yours) */
const overlayStyle = {
  position: "fixed",
  top: 0, left: 0, width: "100vw", height: "100vh",
  background: "rgba(0,0,0,0.45)",
  backdropFilter: "blur(6px)",
  display: "flex", justifyContent: "center", alignItems: "center",
  zIndex: 9999
};
const modalStyle = { width: "85%", background: "#fff", borderRadius: 30, padding: "25px 30px", boxShadow: "0 10px 30px rgba(0,0,0,0.25)", maxHeight: "85vh", overflowY: "auto", position: "relative" };
const closeBtn = { fontSize: 28, border: "none", background: "none", cursor: "pointer", position: "absolute", top: 12, right: 15 };
const sectionTitle = { marginTop: 22, marginBottom: 8, fontSize: 16, color: "#444", fontWeight: 600, borderBottom: "2px solid #e0e0e0", paddingBottom: 4 };
const row = { display: "flex", gap: 18, marginBottom: 12, flexWrap: "wrap" };
const fieldBox = { flex: "1 1 250px", display: "flex", alignItems: "center", gap: 10 };
const labelStyle = { width: 140, fontSize: 12, fontWeight: 600, color: "#333" };
const inputStyle = { flex: 1, padding: 8, border: "1px solid #ccc", borderRadius: 10, fontSize: 13 };
const hintStyle = { fontSize: 11, color: "#777", width: 100, lineHeight: 1.3 };
const processBtn = { backgroundSize: "200% auto", backgroundImage: "linear-gradient(to right, #00008b 0%, #00008b 50%, #ff0000 50%, #ff0000 100%)", color: "#fff", padding: "10px 22px", fontSize: 14, borderRadius: 16, cursor: "pointer", border: "none", transition: "0.4s ease", backgroundPosition: "right center" };

export default HeartFormModal;








// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HeartFormModal = ({ close }) => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     age: "",
//     sex: "",
//     cp: "",
//     trestbps: "",
//     chol: "",
//     fbs: "",
//     restecg: "",
//     thalach: "",
//     exang: "",
//     oldpeak: "",
//     slope: "",
//     ca: "",
//     thal: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     if (close) close();
//     navigate("/heart-result", { state: form });
//   };

//   return (
//     <div style={overlayStyle}>
//       <div style={modalStyle}>
//         <button onClick={close} style={closeBtn}>×</button>

//         <div style={{ textAlign: "center", marginBottom: 10 }}>
//           <h1 style={{ margin: 0, fontSize: 18, color: "red" }}>Medical Analysis</h1>
//           <h2 style={{ margin: "3px 0", fontSize: 22, fontWeight: 700, color: "#222" }}>
//             Enter Clinical Parameters
//           </h2>
//           <p style={{ fontSize: 13, color: "#777", marginTop: 6 }}>
//             Fill in the details below to generate a real-time risk assessment.
//           </p>
//         </div>

//         <form onSubmit={submitForm}>
//           <h3 style={sectionTitle}>🫀 Patient Details</h3>
//           <div style={row}>
//             <Field label="AGE" name="age" type="number" placeholder="Years" value={form.age} onChange={handleChange} />
//             <Field label="SEX" name="sex" type="select" options={[0,1]} value={form.sex} onChange={handleChange} hint={["0: Female","1: Male"]} />
//             <Field label="CHEST PAIN TYPE" name="cp" type="select" options={[0,1,2,3]} value={form.cp} onChange={handleChange} hint={["0: Typical","1: Atypical","2: Non-Anginal","3: None"]} />
//           </div>

//           <h3 style={sectionTitle}>🩺 Clinical Vitals</h3>
//           <div style={row}>
//             <Field label="RESTING BP" name="trestbps" type="number" placeholder="mm Hg" value={form.trestbps} onChange={handleChange} />
//             <Field label="CHOLESTEROL" name="chol" type="number" placeholder="mg/dL" value={form.chol} onChange={handleChange} />
//             <Field label="BLOOD SUGAR" name="fbs" type="select" options={[0,1]} value={form.fbs} onChange={handleChange} hint={["0: ≤ 120","1: > 120"]} />
//           </div>

//           <div style={row}>
//             <Field label="RESTING ECG" name="restecg" type="select" options={[0,1,2]} value={form.restecg} onChange={handleChange} hint={["0: Normal","1: ST-T Abn","2: LV Hypertrophy"]} />
//             <Field label="MAX HEART RATE" name="thalach" type="number" placeholder="BPM" value={form.thalach} onChange={handleChange} />
//             <Field label="EXERCISE ANGINA" name="exang" type="select" options={[0,1]} value={form.exang} onChange={handleChange} hint={["0: No","1: Yes"]} />
//           </div>

//           <h3 style={sectionTitle}>🧪 Test Results</h3>
//           <div style={row}>
//             <Field label="ST DEPRESSION" name="oldpeak" type="text" placeholder="e.g. 1.5" value={form.oldpeak} onChange={handleChange} />
//             <Field label="ST SLOPE" name="slope" type="select" options={[0,1,2]} value={form.slope} onChange={handleChange} hint={["0: Up","1: Flat","2: Down"]} />
//             <Field label="MAJOR VESSELS" name="ca" type="select" options={[0,1,2,3]} value={form.ca} onChange={handleChange} hint={["0-3 colored vessels"]} />
//           </div>
//           <div style={row}>
//             <Field label="THALLIUM" name="thal" type="select" options={[1,2,3]} value={form.thal} onChange={handleChange} hint={["1: Normal","2: Fixed","3: Reversible"]} />
//           </div>

//           <div style={{ textAlign: "center", marginTop: 20 }}>
//             <button type="submit" style={processBtn} onMouseEnter={(e)=>e.currentTarget.style.backgroundPosition="left center"} onMouseLeave={(e)=>e.currentTarget.style.backgroundPosition="right center"}>
//               Process Data ❤️
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Field = ({ label, name, type, placeholder, value, onChange, options, hint }) => (
//   <div style={fieldBox}>
//     <label style={labelStyle}>{label}</label>
//     {type === "select" ? (
//       <select name={name} value={value} onChange={onChange} required style={inputStyle}>
//         <option value="">Select</option>
//         {options.map(o => <option key={o} value={o}>{o}</option>)}
//       </select>
//     ) : (
//       <input name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} required style={inputStyle} />
//     )}
//     {hint && <div style={hintStyle}>{hint.map((h,i)=> <div key={i}>{h}</div>)}</div>}
//   </div>
// );

// /* ---------------- STYLES ---------------- */
// const overlayStyle = {
//   position: "fixed",
//   top: 0, left: 0, width: "100vw", height: "100vh",
//   background: "rgba(0,0,0,0.45)",
//   backdropFilter: "blur(6px)",
//   display: "flex", justifyContent: "center", alignItems: "center",
//   zIndex: 9999
// };
// const modalStyle = { width: "85%", background: "#fff", borderRadius: 30, padding: "25px 30px", boxShadow: "0 10px 30px rgba(0,0,0,0.25)", maxHeight: "85vh", overflowY: "auto", position: "relative" };
// const closeBtn = { fontSize: 28, border: "none", background: "none", cursor: "pointer", position: "absolute", top: 12, right: 15 };
// const sectionTitle = { marginTop: 22, marginBottom: 8, fontSize: 16, color: "#444", fontWeight: 600, borderBottom: "2px solid #e0e0e0", paddingBottom: 4 };
// const row = { display: "flex", gap: 18, marginBottom: 12, flexWrap: "wrap" };
// const fieldBox = { flex: "1 1 250px", display: "flex", alignItems: "center", gap: 10 };
// const labelStyle = { width: 140, fontSize: 12, fontWeight: 600, color: "#333" };
// const inputStyle = { flex: 1, padding: 8, border: "1px solid #ccc", borderRadius: 10, fontSize: 13 };
// const hintStyle = { fontSize: 11, color: "#777", width: 100, lineHeight: 1.3 };
// const processBtn = { backgroundSize: "200% auto", backgroundImage: "linear-gradient(to right, #00008b 0%, #00008b 50%, #ff0000 50%, #ff0000 100%)", color: "#fff", padding: "10px 22px", fontSize: 14, borderRadius: 16, cursor: "pointer", border: "none", transition: "0.4s ease", backgroundPosition: "right center" };

// export default HeartFormModal;
