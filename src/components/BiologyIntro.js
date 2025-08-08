import React from "react";

function BiologyIntro({ onStart }) {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>🧬 Welcome to Biology!</h2>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "auto" }}>
        Meet the cells, DNA, and creatures that make life squishy, weird, and
        fascinating. Biology is basically nature's gossip column!
      </p>
      <p style={{ fontStyle: "italic", color: "#555", marginTop: "10px" }}>
        Let's dissect knowledge — not frogs (ew).
      </p>
      <button
        onClick={onStart}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#43a047",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Start Biology Quiz 🐸
      </button>
    </div>
  );
}

export default BiologyIntro;
