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
    <React.Fragment>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  </Router>
);




export default App;