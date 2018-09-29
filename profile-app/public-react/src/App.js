import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  HomePage  from './components/HomePage/HomePage';
import Signup from './components/auth/Signup/Signup';
import Login from './components/auth/Login/Login';
import ProfilePage from './components/Profile/ProfilePage';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = { loggedInUser: null };
    }

    fetchUser(){
        if( this.state.loggedInUser === null ){
            this.service.loggedin()
                .then(response =>{
                    this.setState({
                        loggedInUser:  response
                    })
                })
                .catch( err =>{
                    this.setState({
                        loggedInUser:  false
                    })
                })
        }
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
          <Route exact path="/profile" render = { (props) => <ProfilePage {...props} userInSession={ this.state.loggedInUser }/>} />
          <Route exact path="/signup" render= { (props) => <Signup {...props} getUser={this.getTheUser}/>} />
          <Route exact path="/login" render= { (props) => <Login {...props} getUser={this.getTheUser}/>}/>
      </Switch>
    );
  }
}

export default App;
