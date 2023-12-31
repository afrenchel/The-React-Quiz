import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Progress = () => {
  const { numQuestions, index, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong> {points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
