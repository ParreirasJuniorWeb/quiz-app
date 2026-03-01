// import Hooks e Context

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

// import images
import imgWelcome from "../images/icons8-quiz-64.png"

// import CSS
import "./Welcome.css"

const Welcome = () => {

  const { dispatch } = useContext(QuizContext);
  
  return (
    <div id="welcome">
      <h2>Seja bem-vindo!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button
      onClick={() => dispatch({type: "CHANGE_STAGE"})}>Iniciar Quiz</button>
      <img src={imgWelcome} alt="Iniciando o Quiz de Porgramação" />
    </div>
  )
}

export default Welcome;