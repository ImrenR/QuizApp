import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
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

          <div>
            <div className="mb-3"></div>

            <button></button>

            <button className="btn btn-success mt-1 w-50">Next Question</button>
            <p className="fs-6 text-muted mt-1"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
