import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  HomePage  from './components/HomePage/HomePage';
import Signup from './components/auth/Signup/Signup';
import Login from './components/auth/Login/Login';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = { loggedInUser: null };
    }

    getTheUser= (userObj) => {
        this.setState({
            loggedInUser: userObj
        })
    };


    render() {
    return (
      <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/signup" render= { () => <Signup getUser={this.getTheUser}/>} />
          <Route exact path="/login" render= { () => <Login getUser={this.getTheUser}/>}/>
      </Switch>
    );
  }
}

export default App;
