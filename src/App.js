import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Resume } from './components/Resume';
import { Home } from './components/Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;