import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { questions } from "./data/questions";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setshowScore] = useState(false);

  const nextQuestion = () => {
    setAnswer(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setshowScore(true);
    }
  };

  const handleAnswer = (id, isCorrect) => {
    setAnswer(true);
    setSelectedAnswer(id);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container text-center border rounded-3 shadow-lg p-5">
        <div>
          <div className="text-danger m-4 p-2 display-6 border rounded shadow-lg">
            Quiz App
          </div>
          {showScore ? (
            <div>
              You scored {score} of {questions.length}
            </div>
          ) : (
            <div>
              <div className="mb-3">
                {questions[currentQuestion].questionText}
              </div>
              {questions[currentQuestion].answerOptions.map((option, id) => (
                <button
                  key={id}
                  className={`btn d-block w-50 border rounded mx-auto p-4 ${
                    answer
                      ? option.isCorrect
                        ? "bg-success"
                        : selectedAnswer === id
                        ? "bg-danger"
                        : ""
                      : ""
                  }`}
                  onClick={() => handleAnswer(id, option.isCorrect)}
                >
                  {option.answerText}
                </button>
              ))}
              <button
                disabled={answer ? "" : "disabled"}
                onClick={nextQuestion}
                className="btn btn-success mt-1 w-50"
              >
                Next Question
              </button>
              <p className="fs-6 text-muted mt-1">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
