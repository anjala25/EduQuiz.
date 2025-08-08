import React, { useState, useEffect } from "react";

function Quiz({ data, subject, onBack }) {
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const levelData = data.find((l) => l.level === level);
  const questions = levelData?.questions || [];

  useEffect(() => {
    if (timeLeft === 0 && selectedAnswer === null) {
      handleAnswer(null);
    }
    if (!showFeedback && selectedAnswer === null) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, selectedAnswer, showFeedback]);

  const handleAnswer = (selected) => {
    const correct = selected === questions[index].answer;
    if (correct) {
      setScore((s) => s + 1);
    }

    setSelectedAnswer(selected);
    setIsCorrect(correct);
    setShowFeedback(true);

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowFeedback(false);

      if (index + 1 < questions.length) {
        setIndex((i) => i + 1);
        setTimeLeft(15);
      } else if (level < 5 && data.find((l) => l.level === level + 1)) {
        setLevel((l) => l + 1);
        setIndex(0);
        setTimeLeft(15);
      } else {
        setShowResult(true);
      }
    }, 1500); // Show feedback for 1.5s
  };

  const restart = () => {
    setLevel(1);
    setIndex(0);
    setScore(0);
    setTimeLeft(15);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
  };

  const containerStyle = {
    fontFamily: "'Comic Neue', 'Poppins', sans-serif",
    maxWidth: "600px",
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#fefefe",
    borderRadius: "16px",
    boxShadow: "0 0 12px rgba(0,0,0,0.15)",
  };

  const questionStyle = {
    fontSize: "1.4rem",
    marginBottom: "20px",
    color: "#333",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "12px 20px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#8e44ad",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#732d91",
  };

  const feedbackStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: isCorrect ? "green" : "red",
    marginTop: "20px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f9fc",
      }}
    >
      <div style={containerStyle}>
        {showResult ? (
          <>
            <h2>🎉 Quiz Completed!</h2>
            <p style={{ fontSize: "18px" }}>Your score: {score}</p>
            <button style={buttonStyle} onClick={restart}>
              Retry
            </button>
            <button style={buttonStyle} onClick={onBack}>
              Back to Subjects
            </button>
          </>
        ) : (
          <>
            <h2>{subject.toUpperCase()} - Level {level}</h2>
            <p style={{ fontSize: "16px", marginBottom: "10px" }}>
              ⏱ Time Left: {timeLeft}s
            </p>
            <div style={questionStyle}>
              {`${index + 1}. ${questions[index].question}`}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              {questions[index].options.map((opt, i) => (
                <button
                  key={i}
                  disabled={selectedAnswer !== null}
                  style={{
                    ...buttonStyle,
                    backgroundColor:
                      selectedAnswer === opt
                        ? isCorrect
                          ? "#27ae60"
                          : "#c0392b"
                        : buttonStyle.backgroundColor,
                  }}
                  onMouseOver={(e) =>
                    selectedAnswer === null &&
                    (e.currentTarget.style.backgroundColor =
                      buttonHoverStyle.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    selectedAnswer === null &&
                    (e.currentTarget.style.backgroundColor =
                      buttonStyle.backgroundColor)
                  }
                  onClick={() => handleAnswer(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showFeedback && (
              <div style={feedbackStyle}>
                {isCorrect ? "✅ Correct!" : "❌ Incorrect!"}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
