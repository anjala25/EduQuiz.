import React from "react";

function MathematicsIntro({ onStart }) {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>➗ Welcome to Mathematics!</h2>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "auto" }}>
        Numbers, logic, patterns, and puzzles! Math is the original brain gym—
        and it never skips leg day.
      </p>
      <p style={{ fontStyle: "italic", color: "#555", marginTop: "10px" }}>
        Don’t worry, there’s no algebra monster hiding here. (Or is there?)
      </p>
      <button
        onClick={onStart}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#ff9800",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Start Math Quiz ➕
      </button>
    </div>
  );
}

export default MathematicsIntro;
