import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <center>
        <h1>This is the main page</h1>
        <p>Button Clicked {count} times</p>
        <button
          className="btn btn-outline-success m-3"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </center>
    </main>
  );
}

function Card() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "22rem" }}>
          <div className="position-relative">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.SzxhDhfEdcwO7R6qGueRCAHaEo?pid=Api&P=0&h=180"
              alt="placeholder"
              className="card-img-top"
            />
            <button
              onClick={() => setIsDark(!isDark)}
              className="btn btn-warning position-absolute top-0 end-0 m-2"
            >
              Toggle
            </button>
          </div>
          <div
            className={`card-body ${isDark ? "bg-dark text-light" : ""}`}
          >
            <h5 className="card-title">Lorem</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn btn-outline-primary">Learn More</button>
            <div className="card-footer mt-3">2days Ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
   


export { Main, Card };
