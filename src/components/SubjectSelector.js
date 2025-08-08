
import React from "react";

function SubjectSelector({ onSelectSubject }) {
  const subjects = ["physics", "chemistry", "biology", "mathematics"];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Study Image Above Heading */}
      <img
        src="/study.png"
        alt="Study Icon"
        style={{
          width: "80%",
          maxWidth: "500px",
          height: "auto",
          marginBottom: "10px",
        }}
      />

      {/* Heading */}
      <h1
        style={{
          fontSize: "3rem",
          color: "#4c00ff",
          marginBottom: "5px",
          fontFamily: "'Comic Sans MS', cursive",
        }}
      >
        QuizUp
      </h1>

      {/* Funny Quote */}
      <p
        style={{
          fontSize: "1.1rem",
          color: "#555",
          fontStyle: "italic",
          marginBottom: "30px",
        }}
      >
        "Get ready to unleash your inner genius..."
      </p>

      {/* Subject Selection */}
      <h2 style={{ marginBottom: "20px" }}>Select a Subject</h2>
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => onSelectSubject(subject)}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              borderRadius: "8px",
              backgroundColor: "#0077cc",
              color: "white",
              border: "none",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#005fa3")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#0077cc")
            }
          >
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SubjectSelector;
