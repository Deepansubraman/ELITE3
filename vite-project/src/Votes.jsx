import { useState } from "react";

function Vote() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center><h1>Voting</h1></center>

      <div className="container d-flex justify-content-center mt-4">
        <div className="card border border-dark" style={{ width: "600px" }}>
          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center">
              <h3>🌿 ADMK</h3>
              <h4>Total Votes: {count}</h4>
            </div>

            <div className="d-flex gap-2 mt-4">
              <button className="btn btn-success" onClick={() => setCount(count + 1)}>➕ Add</button>
              <button className="btn btn-danger" onClick={() => setCount(0)}>➖ Reset</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Vote;
