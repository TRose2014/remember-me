import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return(
    <header className="header bar">
      Remember Me

      <ul>
        <Link to="/">Home </Link>
        <Link to="/about">About Me </Link>
        <Link to="/resource">Resource Page </Link>
      </ul>

    </header>
  )
}

export default Header;
