//import CSS
import "./Option.css";

// import Hooks e Context

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Option = ({ option, answer, onSelectOption, hide }) => {
  const { value } = useContext(QuizContext);

  return (
    <div
      id="options-container"
      className={`option ${
        value.answerSelected && option === answer ? "correct" : ""
      } ${value.answerSelected && option !== answer ? "wrong" : ""}
      ${hide ? "hide" : ""}`}
      onClick={() => onSelectOption(option, answer)}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;