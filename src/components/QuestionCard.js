import React from "react";

function QuestionCard({ question, onAnswer, showFeedback }) {
  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      {question.options.map((option, idx) => (
        <button
          key={idx}
          className={
            showFeedback === null
              ? ""
              : option === question.answer
              ? "correct"
              : "wrong"
          }
          onClick={() => onAnswer(option)}
          disabled={showFeedback !== null && showFeedback !== false}
        >
          {option}
        </button>
      ))}

      {showFeedback !== null && (
        <p className={showFeedback ? "feedback-correct" : "feedback-wrong"}>
          {showFeedback ? "✅ Correct!" : "❌ Wrong!"}
        </p>
      )}
    </div>
  );
}

export default QuestionCard;
