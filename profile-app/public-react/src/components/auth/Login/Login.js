import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/UI/AppButton/AppButton';
import './Login.css';

class Login extends Component {
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
                    password: ""
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
            <div className="home-wrapper sign-wrap">
                <div className="form-wrap">
                    <h1 className="sign-head">Log in</h1>
                    <form className="sign-form">
                        <label>Username:</label>
                        <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

                        <label>Password</label>
                        <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
                    </form>

                    <p className="sub-text" id="form-text">If you don't have an account yet, you can create your account <Link to="/signup">here</Link>.</p>
                </div>
                <div className="btn-wrap">
                    <h3 id="log-head">Hello!!</h3>
                    <p className="main-text">Awesome to have at IronProfile again!</p>
                    <p className="sub-text">If you sign, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                    <AppButton bg="white" type="submit" className="sign-btn" onClick={ this.handleFormSubmit }>Log in</AppButton>
                </div>

            </div>
        )
    }
}

export default Login;