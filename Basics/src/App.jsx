import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header>
      <h1 className="Heading text-secondary ">
        <i
          className="bi bi-person-circle text-secondary"
          style={{ marginRight: '10px' }}
        ></i>
        DEEPAN
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#" className="nav">
              <i
                className="bi bi-house-door-fill  text-secondary"
                style={{ marginRight: '8px' }}
              ></i>{' '}
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav">
              <i
                className="bi bi-info-circle-fill  text-secondary"
                style={{ marginRight: '8px' }}
              ></i>{' '}
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav">
              <i
                className="bi bi-envelope-fill  text-secondary"
                style={{ marginRight: '8px' }}
              ></i>{' '}
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const UniqueNavBar = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        About
      </NavLink>{' '}
      |{' '}
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Contact
      </NavLink>
    </nav>
  );
};

function Content(prop) {
  return (
    <>
      <div className="prop">
        <p>Hello I am {prop.name}</p>
      </div>
    </>
  );
}

export { Header, Content, UniqueNavBar };

