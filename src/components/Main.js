import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import ResourcePage from './ResourcePage/ResourcePage';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/resource" component={ResourcePage} />
      </Switch>
    </main>
  );
}
export default Main;
