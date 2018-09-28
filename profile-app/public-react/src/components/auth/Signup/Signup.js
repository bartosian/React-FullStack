import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            campus: '',
            course: ''
        };

        this.service = new AuthService();
    }

    // handleChange() and handleSubmit() will be added here

    render(){
        return(
            // more code will be added here
        )
    }
}

export default Signup;