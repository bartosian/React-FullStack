import React, { Component } from 'react';
import './ProfilePage.css';
import AppButton from '../../components/UI/AppButton/AppButton';
import { Link } from 'react-router-dom';


class ProfilePage extends Component {

    state = {
        file: ""
    };

    handleChange(e) {
        this.setState({
            file: e.target.files[0]
        })
    };

    selectPhoto = () => {
        console.log("Click");
      this.input.click();
    };

    render() {
        return (
            <div className="home-wrapper profile-blog">
                <div className="info">
                    <h1 className="header-info">Profile</h1>
                    <div className="user-info info-name">
                        <h3>Username</h3>
                        <p>{ this.props.userInSession ? this.props.userInSession.username : null }</p>
                    </div>
                    <div className="user-info">
                        <h3>Campus</h3>
                        <p>{ this.props.userInSession ? this.props.userInSession.campus : null }</p>
                    </div>
                    <div className="user-info">
                        <h3>Course</h3>
                        <p>{ this.props.userInSession ? this.props.userInSession.course : null }</p>
                    </div>
                    <AppButton bg="white"><Link className="Log-link" to="/logout" onClick={() => this.props.logout(this.props.history) }>Logout</Link></AppButton>
                </div>
                <div className="info info-loader">
                    <i className="fa fa-user-circle circle" onClick={ this.selectPhoto }></i>
                    <input className="photo-loader" ref={ (node) => this.input = node } onChange={(e)=>this.handleChange(e)} name="picture"  type="file"/>
                    <AppButton bg="white">Edit Photo</AppButton>
                    <p className="text-uploader">The user is able to upload a new profile photo, using Node.js and Multer uploader.</p>
                </div>
            </div>

        );
    }
}

export default ProfilePage;