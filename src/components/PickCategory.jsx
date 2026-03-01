// import CSS
import "./PickCategory.css";

// import Context
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

// import images
import CategoryImage from "../images/icons8-categories-64.png";

const PickCategory = () => {
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

  const handleCategory = (category, dispatch) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: category,
    });
    dispatch({ type: "REORDER_QUESTIONS" });
  };

  const handleMistCategory = (dispatch) => {
    dispatch({ type: "CATEGORY_MIST" });
    dispatch({ type: "REORDER_QUESTIONS" });
  };

  const filterCategory = value.questions
    .filter((item) => item.class && item.class.length > 0)
    .sort((a, b) => a.class.localeCompare(b.class))
    .filter(
      (item, index, arr) =>
        arr.findIndex((obj) => obj.class === item.class) === index,
    );

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div className="btn-container">
        {filterCategory.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCategory(item.class, dispatch, filterCategory)}
          >
            {item.class === "js"
              ? "JavaScript"
              : item.class === "html"
                ? "HTML"
                : "CSS"}
          </button>
        ))}
        <button
        id="btnMist"
        onClick={() => handleMistCategory(dispatch)}
        >
        Quiz Misto
        </button>
      </div>
      <img src={CategoryImage} alt="Categorias do Quiz" />
      <div className="cards-container">
        <div className="quantQuestionsHTML">
          <p>HTML</p>
          <p>{filteredQuestionsForHTML.length}</p>
        </div>
        <div className="quantQuestionsCSS">
          <p>CSS</p>
          <p>{filteredQuestionsForCSS.length}</p>
        </div>
        <div className="quantQuestionsJS">
          <p>JavaScript</p>
          <p>{filteredQuestionsForJS.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PickCategory;
