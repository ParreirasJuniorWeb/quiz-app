// import CSS
import "./GameOver.css";

// import imgs

import wellDoneImg from "../images/icons8-check-mark-64.png";

// import context
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const GameOver = () => {

  const { value, dispatch } = useContext(QuizContext);

  return (
    <div id="gameOver">
      <h2>Fim de Jogo!</h2>
      <p>Sua pontuação é: {value.score}.</p>
      <p>
        Você acertou {value.score} de {value.questions.length} perguntas.
      </p>
      <img src={wellDoneImg} alt="Well Done!" />
      <button
      onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar Quiz</button>
    </div>
  );
};

export default GameOver;
