import { useState } from 'react';

function Expense() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handle = () => {
    if (!name || !amount) return;

    const ex = { name, amount: parseFloat(amount) };
    setExpenses([...expenses, ex]);

    setName('');
    setAmount('');
  };

  return (
    <>
      <div className="container mt-5">
        <div className="col-md-12 mt-5">
          <div className="h1 text-light">🪙 Expense Tracker</div>
        </div>

        <div className="col-md-3 mt-3">
          <input
            type="text"
            value={name}
            placeholder="Expense Name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-3 mt-3">
          <input
            type="text"
            value={amount}
            placeholder="Amount"
            className="form-control"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="col-md-3 mt-3">
          <button className="btn btn-primary" onClick={handle}>Add</button>
        </div>
      </div>

      <div className="container mt-4">
        <h4>Expenses:</h4>
        {expenses.length > 0 ? (
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr className='text-light'>
                <th></th>
                <th>Expense Name</th>
                <th>Amount ($)</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{exp.name}</td>
                  <td>{exp.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-muted">No expenses added yet.</p>
        )}
      </div>
    </>
  );
}

export default Expense;
