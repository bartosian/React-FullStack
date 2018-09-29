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
            <AppButton bg="white"><Link className="Log-link" to="/logout">Logout</Link></AppButton>
        </div>
        <div className="info">
            <div>
               <i className="fa fa-user-circle"></i>
            </div>
        </div>
    </div>

);

export default profilePage;