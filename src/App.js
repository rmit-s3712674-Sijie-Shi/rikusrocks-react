import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/index'
import Education from './components/education'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={ () => <Index/>}
        />
        <Route
          exact
          path='education'
          render={ () => <Education/> }
        />

      </Switch>
    </Router>
  );
}

export default App;
