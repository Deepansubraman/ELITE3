// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Vote from './Votes';
import Movies from './Movies';
import Contact from './Contact1';
import Expense from './ExpenseTracker';
import { Con as Counter1, Con1 } from './MultiCounter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Vote />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ExpenseTracker" element={<Expense />} />
        <Route path="/MultiCounter" element={
          <>
            <Con1 />
            <div className='d-flex mt-5'>
            <Counter1 />
            <Counter1 />
            <Counter1 />
            </div>
          </>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
