import React from 'react';
import Home from './pages';
import SignIn from './pages/signin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SignIn} exact />
      </Switch>
    </Router>
  );
}

export default App;
