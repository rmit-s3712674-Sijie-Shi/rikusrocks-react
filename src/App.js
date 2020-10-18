import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/index'
import EducationPage from './components/educationPage'
import ProjectPage from './components/projectPage'
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
          path='/education'
          render={ () => <EducationPage/> }
        />
        <Route
        exact
        path='/project'
        render={ () => <ProjectPage/>}/>
      </Switch>
    </Router>
  );
}

export default App;
