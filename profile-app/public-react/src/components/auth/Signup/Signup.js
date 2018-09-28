import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/UI/AppButton/AppButton';
import './Signup.css';

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
            <div className="home-wrapper sign-wrap">
                <div className="form-wrap">
                    <h1 className="sign-head">Sign up</h1>
                    <form className="sign-form">
                        <label>Username:</label>
                        <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

                        <label>Password</label>
                        <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

                        <label>Campus</label>
                        <select type="text" name="campus" value={this.state.campus} onChange={ e => this.handleChange(e)}>
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Miami">Miami</option>
                            <option value="Paris">Paris</option>
                            <option value="Berlin">Berlin</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Sao Paolo">Sao Paolo</option>
                        </select>

                        <label>Course</label>
                        <select type="text" name="course" value={this.state.campus} onChange={ e => this.handleChange(e)}>
                            <option value="WebDev">WebDev</option>
                            <option value="UX/UI">UX/UI</option>
                            <option value="Data Science">Data Science</option>
                        </select>
                    </form>
                </div>
               <div className="btn-wrap">
                   <p className="main-text">Today we will create cool app with authorization, adding some cool styles.</p>
                   <p>Today we will create cool app with authorization, adding some cool styles.</p>
                   <AppButton bg="white" type="submit" onClick={ this.handleFormSubmit }>Create the account</AppButton>
               </div>

            </div>
        )
    }
}

export default Signup;