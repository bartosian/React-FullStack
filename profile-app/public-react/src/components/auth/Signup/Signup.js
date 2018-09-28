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

    handleFormSubmit = (event) => {
        event.preventDefault();

        const { username, password, course, campus } = this.state;

        this.service.signup(username, password)
            .then( response => {
                this.setState({
                    username: "",
                    password: "",
                    course: "",
                    campus: ""
                });
                // this.props.getUser(response)
            })
            .catch( error => console.log(error) )
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };


    render(){
        return(
            // more code will be added here
        )
    }
}

export default Signup;