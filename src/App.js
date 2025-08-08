import React, { useState } from "react";
import SubjectSelector from "./components/SubjectSelector";
import PhysicsIntro from "./components/PhysicsIntro";
import ChemistryIntro from "./components/ChemistryIntro";
import BiologyIntro from "./components/BiologyIntro";
import MathematicsIntro from "./components/MathematicsIntro";
import Quiz from "./components/Quiz"; // ✅ Make sure this exists and is a default export
import quizData from "./components/quizData"; // ✅ This is your current file

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!selectedSubject) {
    return <SubjectSelector onSelectSubject={handleSubjectSelect} />;
  }

  if (!quizStarted) {
    switch (selectedSubject) {
      case "physics":
        return <PhysicsIntro onStart={startQuiz} />;
      case "chemistry":
        return <ChemistryIntro onStart={startQuiz} />;
      case "biology":
        return <BiologyIntro onStart={startQuiz} />;
      case "mathematics":
        return <MathematicsIntro onStart={startQuiz} />;
      default:
        return <SubjectSelector onSelectSubject={handleSubjectSelect} />;
    }
  }

  // ✅ When quiz starts, pass the subject and its data
  return (
    <Quiz
      subject={selectedSubject}
      data={quizData[selectedSubject]}
      onBack={() => {
        setQuizStarted(false);
        setSelectedSubject(null);
      }}
    />
  );
}

export default App;
