import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  HomePage  from './components/HomePage/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/" component={ HomePage } />
      </Switch>
    );
  }
}

export default App;
