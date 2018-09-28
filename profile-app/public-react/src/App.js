import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  HomePage  from './components/HomePage/HomePage';
import Signup from './components/auth/Signup/Signup';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/signup" component={ Signup }/>
      </Switch>
    );
  }
}

export default App;
