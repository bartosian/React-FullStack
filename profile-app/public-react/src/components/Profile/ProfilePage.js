import React from 'react';
import './ProfilePage.css';
import AppButton from '../../components/UI/AppButton/AppButton';
import { Link } from 'react-router-dom';


const profilePage = (props) => (
    <div className="home-wrapper profile-blog">
        <div className="info">
            <h1 className="header-info">Profile</h1>
            <div className="user-info info-name">
                <h3>Username</h3>
                <p>{ props.userInSession ? props.userInSession.username : null }</p>
            </div>
            <div className="user-info">
                <h3>Campus</h3>
                <p>{ props.userInSession ? props.userInSession.campus : null }</p>
            </div>
            <div className="user-info">
                <h3>Course</h3>
                <p>{ props.userInSession ? props.userInSession.course : null }</p>
            </div>
            <AppButton bg="white"><Link className="Log-link" to="/logout" onClick={() => props.logout(props.history) }>Logout</Link></AppButton>
        </div>
        <div className="info info-loader">
               <i className="fa fa-user-circle circle"></i>
                <AppButton bg="white">Edit Photo</AppButton>
                <p className="text-uploader">The user is able to upload a new profile photo, using Node.js and Multer uploader.</p>
        </div>
    </div>

);

export default profilePage;