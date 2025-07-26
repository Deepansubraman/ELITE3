import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">MyApp</div>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
          <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/multicounter" style={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => setMenuOpen(false)}>
              Multi Counter App
            </NavLink>
            <NavLink to="/moviewlist" style={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => setMenuOpen(false)}>
              Moview List
            </NavLink>
          </div>
        </div>
      </nav>

      <style jsx="true">{`
        .navbar {
          background-color: #f8f9fa;
          border-bottom: 1px solid #ccc;
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }
        .navbar-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }
        .menu-toggle {
          display: none;
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }
        .navbar-links {
          display: flex;
          gap: 20px;
        }
        .navbar-links a {
          text-decoration: none;
          color: #555;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .navbar-links a:hover {
          color: #007bff;
        }
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          .navbar-links {
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background-color: #f8f9fa;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            padding: 10px 0;
            border-top: 1px solid #ccc;
            display: none;
          }
          .navbar-links.active {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;
