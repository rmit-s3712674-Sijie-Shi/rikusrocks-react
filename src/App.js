import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, HashRouter  } from 'react-router-dom'
import Index from './components/index'
import EducationPage from './components/educationPage'
import ProjectPage from './components/projectPage'
import Contect from './components/contect'
import './App.css';

function App() {
  return (
    <HashRouter >
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
        <Route
        exact
        path='/contect'
        render={ () => <Contect/>}/>
      </Switch>
    </HashRouter >
  );
}

export default App;
