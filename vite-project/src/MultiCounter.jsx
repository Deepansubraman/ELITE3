import { useState } from "react";


function Con1()
{
    return(
         <center>
        <h1 className="mt-5 text-light">🔢 Multi Counter App</h1>
      </center>
    )
}
function Con({Co}) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="row">
          <center>
            <div className="col-md-4">
              <div className="card " style={{ width: "18rem"  }}>
                <div className="card-body">
                  <h5 className="card-title">Counter {Co}</h5>
                  <h1>{count}</h1>
                  <div className="btn-group">
                    <button className="btn btn-outline-danger" onClick={()=>setCount(count+1)}>+</button>
                    <button className="btn btn-outline-success " onClick={()=>setCount(0)}>Reset</button>
                    <button className="btn btn-outline-primary" onClick={()=>setCount(count-1)}>-</button>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export {Con,Con1};
