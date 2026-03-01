// import CSS
import './App.css'

// import components
import Welcome from "./components/Welcome";
import Question from './components/Questions';

// import useContext hook 
import { useContext } from 'react';
import { QuizContext } from './context/quiz';
import GameOver from './components/GameOver';

// import components
import Category from "./components/PickCategory"

function App() {

  const { value } = useContext(QuizContext);

  return (
    <>
      <div className="app">
      <h1>Quiz de Programação</h1>  
        {/* Exibir o componente do app conforme o estágio do jogo */}
        {value.gameStage === "Start" && <Welcome />}
        {value.gameStage === "Category" && <Category />}
        {value.gameStage === "Playing" && <Question />}
        {value.gameStage === "End" && <GameOver />}
      </div>
    </>
  )
}

export default App;