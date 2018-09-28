import React from 'react';
import './ProfilePage.css';


const profilePage = (props) => (
    <div className="home-wrapper">
        <div className="info">
            <h1 className="header-info">Profile</h1>
            <div className="user-info info-name">
                <h3>Username</h3>
                <p>{ props.userInSession.username }</p>
            </div>
            <div className="user-info">
                <h3>Campus</h3>
                <p>{ props.userInSession.campus }</p>
            </div>
            <div className="user-info">
                <h3>Course</h3>
                <p>{ props.userInSession.course }</p>
            </div>
        </div>
    </div>
);

export default profilePage;