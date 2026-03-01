import { useReducer } from "react";
import React from "react";
import questions from "../data/questions.js";

export const QuizContext = React.createContext();

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  optionSelected: false,
  help: false,
  optionToHide: null,
  maxTip: 1,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    case "REORDER_QUESTIONS": {
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
        answerSelected: false,
        optionSelected: false,
        help: false,
      };
    }
    case "CHANGE_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false,
        optionSelected: false,
        help: false,
      };
    }
    case "NEW_GAME":
      return initialState;

    case "SELECT_OPTION": {
      const answer = action.payload.answer;
      const option = action.payload.option;

      return {
        ...state,
        score: option === answer ? state.score + 1 : state.score,
        answerSelected: option === answer ? true : false,
        optionSelected: true,
      };
    }
    case "CHANGE_CATEGORY": {
      const category = action.payload;
      const filteredQuestions = questions.filter(
        (question) => question.class === category);
      return {
        ...state,
        questions: filteredQuestions,
        gameStage: STAGES[2],
        help: false,
      };
    }
    case "CATEGORY_MIST":
      return {
        ...state,
        questions: questions,
        gameStage: STAGES[2],
        help: false,
      };
    case "SHOW_TIP":
      return {
        ...state,
        help: "tip",
        maxTip: 0,
      };
    case "REMOVE_OPTION": {
      const questionWithoutOption = state.questions[state.currentQuestion];

      let repeat = true;
      let optionToHide;

      questionWithoutOption.options.forEach((option) => { 
        if(option !== questionWithoutOption.answer && repeat){
          optionToHide = option;
          repeat = false;
        }
      })
      return {
        ...state,
        optionToHide,
        help: false,
        maxTip: 0,
      };
    }  
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [value, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ value, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};