import React from "react";

function ChemistryIntro({ onStart }) {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>🧪 Welcome to Chemistry!</h2>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "auto" }}>
        It's time to mix things up! From bubbling beakers to invisible gases,
        chemistry is the magic show of science.
      </p>
      <p style={{ fontStyle: "italic", color: "#555", marginTop: "10px" }}>
        Warning: This quiz may cause spontaneous combustion of curiosity!
      </p>
      <button
        onClick={onStart}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#e91e63",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Start Chemistry Quiz 🧬
      </button>
    </div>
  );
}

export default ChemistryIntro;
