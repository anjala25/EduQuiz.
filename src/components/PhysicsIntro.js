import React from "react";

function PhysicsIntro({ onStart }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>⚛️ Welcome to Physics!</h1>
      <p style={styles.text}>
        Where apples fall, rockets soar, and equations sometimes make you cry. 🍎🚀
      </p>
      <p style={styles.text}>
        Newton says “stay still,” Einstein says “go fast,” and we just say “good luck!”
      </p>
      <p style={styles.text}>
        From motion and gravity to energy and light — you're about to defy expectations (and maybe gravity).
      </p>
      <button onClick={onStart} style={styles.button}>Start Physics Quiz 🚀</button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px", fontFamily: "Segoe UI" },
  heading: { fontSize: "2.5rem", color: "#3c3cff", marginBottom: "20px" },
  text: { fontSize: "1.2rem", marginBottom: "15px", color: "#444" },
  button: {
    padding: "10px 25px", fontSize: "18px", backgroundColor: "#0077cc",
    color: "white", border: "none", borderRadius: "8px", cursor: "pointer"
  }
};

export default PhysicsIntro;
