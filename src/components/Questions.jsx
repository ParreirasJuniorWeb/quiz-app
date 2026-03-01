// import CSS
import "./Questions.css";

// import useContext hook
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

// import components
import Option from "./Option";

const Questions = () => {
  const { value, dispatch } = useContext(QuizContext);

  const filteredQuestionsForHTML = value.questions.filter(
    (question) => question.class === "html",
  );
  const filteredQuestionsForCSS = value.questions.filter(
    (question) => question.class === "css",
  );
  const filteredQuestionsForJS = value.questions.filter(
    (question) => question.class === "js",
  );

  const onSelectOption = (option, answer) => {
    dispatch({ type: "SELECT_OPTION", payload: { option, answer } });
  };

  return (
    <div id="question">
      <p>
        Pergunta {value.currentQuestion + 1} de {value.questions.length}
      </p>
      <h2>
        Disciplina:{" "}
        {value.questions[value.currentQuestion].class === "js"
          ? "JavaScript"
          : value.questions[value.currentQuestion].class === "html"
            ? "HTML"
            : "CSS"}
      </h2>
      <h2>{value.questions[value.currentQuestion].question}</h2>
      <div id="options-container">
        {value.questions[value.currentQuestion].options.map((option, index) => (
          <Option
            key={index}
            option={option}
            answer={value.questions[value.currentQuestion].answer}
            onSelectOption={onSelectOption}
            hide={value.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      {(!value.optionSelected && !value.answerSelected) &&
      !value.help && (
        <div className="btn-container">
          {value.maxTip === 1 && 
          value.questions[value.currentQuestion].tip && (
            <button
              onClick={() => dispatch({type: "SHOW_TIP"})}
            >
            Dica</button>
          )}
          {value.maxTip === 1 && (<button
            onClick={() => dispatch({type: "REMOVE_OPTION"})}
          >
          Excluir uma</button>)}
        </div>
      )}
      {(!value.optionSelected && !value.answerSelected) && 
      value.help === 'tip' && (
        <p>{value.questions[value.currentQuestion].tip}</p>
      )}

      <div className="btn-container">
        {value.optionSelected && (
          <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
          </button>
        )}
        {value.optionSelected && (
          <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reset</button>
        )}
        {value.optionSelected && (
          <button onClick={() => dispatch({ type: "REORDER_QUESTIONS" })}>
            Embaralhar perguntas
          </button>
        )}
      </div>
      {value.answerSelected && (
        <div className="answer-correct">
          <p>Resposta correta!</p>
        </div>
      )}
      {!value.answerSelected && value.optionSelected && (
        <div className="answer-incorrect">
          <p>Resposta errada!</p>
        </div>
      )}
      <div className="cards-container">
        {filteredQuestionsForHTML.length > 0 ? (
          <div className="quantQuestionsHTML">
            <p>HTML</p>
            <p>{filteredQuestionsForHTML.length}</p>
          </div>
        ) : null}
        {filteredQuestionsForCSS.length > 0 ? (
          <div className="quantQuestionsCSS">
            <p>CSS</p>
            <p>{filteredQuestionsForCSS.length}</p>
          </div>
        ) : null}
        {filteredQuestionsForJS.length > 0 ? (
          <div className="quantQuestionsJS">
            <p>JavaScript</p>
            <p>{filteredQuestionsForJS.length}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Questions;