import React from 'react';


const profilePage = (props) => (
    <div className="home-wrapper">
        <div className="info">
            <h1>Profile</h1>
            <div>
                <h3>Username</h3>
                <p>{ props.userInSession.username }</p>
            </div>
            <div>
                <h3>Campus</h3>
                <p>{ props.userInSession.campus }</p>
            </div>
            <div>
                <h3>Course</h3>
                <p>{ props.userInSession.course }</p>
            </div>
        </div>
    </div>
);

export default profilePage;