// src/components/ResultScreen.js

import React from "react";

function ResultScreen({ score, total, onRestart, onFinishSubject }) {
  const percentage = (score / total) * 100;

  return (
    <div className="result-screen">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>

      {percentage >= 80 && <p>🎉 Excellent work! Keep it up!</p>}
      {percentage >= 50 && percentage < 80 && <p>👍 Good job! You're almost there!</p>}
      {percentage < 50 && <p>💡 Keep practicing and try again!</p>}

      <button onClick={onRestart}>Retry This Subject</button>
      <button onClick={onFinishSubject}>Choose Another Subject</button> {/* 👈 this is important */}
    </div>
  );
}

export default ResultScreen;
