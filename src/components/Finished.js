import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Finished = () => {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎖";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "👋";
  if (percentage >= 0 && percentage < 50) emoji = "🤦‍♀️";
  if (percentage === 0) emoji = "☠";
  return (
    <>
      <p className="result">
        You scored <strong>{points} </strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}) %! {emoji}
      </p>

      <p className="highscore"> Highscore: {highscore} points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Reset
      </button>
    </>
  );
};

export default Finished;
