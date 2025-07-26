import { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css'; // You can customize this further

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links d-flex">
          <li><Link to="/about">Vote</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="main-buttons">
        <button className="nav-button" onClick={() => navigate('/movies')}>🎬 Movies</button>
        <button className="nav-button" onClick={() => navigate('/ExpenseTracker')}>💰 Expense Tracker</button>
         <button className="nav-button" onClick={() => navigate('/MultiCounter')}>MultiCounter</button>
      </div>
    </>
  );
}

export default App;
