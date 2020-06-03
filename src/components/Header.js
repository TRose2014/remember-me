import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './About';
import Home from '../App';

function Header() {
  return(
    <header className="header bar">
      Remember Me
      <Router>
        <div>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>

          <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </header>
  )
}

export default Header;
