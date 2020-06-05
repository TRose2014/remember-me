import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ResourcePage from './ResourcePage';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/resource" component={ResourcePage} />
      </Switch>
    </main> 
  )
}
export default Main;