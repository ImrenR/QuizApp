import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { questions } from "../src/data/questions";
import { useState } from "react";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className="container text-center mt-4 border p-3 d-flex flex-column align-items-center">
      <div className="display-6 text-danger m-3"> Quiz App</div>
      <div className="d-flex flex-column align-items-center w-100 m-5">
        {questions[currentQuestion].questionText}
      </div>
      {questions[currentQuestion].answerOptions.map((option, index) => (
        <button
          key={index}
          className="w-50 text-center p-4 border text-center w-75"
        >
          {option.answerText}
        </button>
      ))}

      <button
        className="btn btn-success border p-4 w-75"
        onClick={nextQuestion}
      >
        NEXT QUESTION
      </button>
      <p className="mt-2">
        Question {currentQuestion + 1} out of {questions.length}
      </p>
    </div>
  );
}

export default App;
