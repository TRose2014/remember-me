import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header bar">
      <h1>Remember Me</h1>

      <ul>
        <Link to="/">Home </Link>
        <Link to="/about">About Me </Link>
        <Link to="/resource">Resource Page </Link>
      </ul>

    </header>
  );
}

export default Header;
