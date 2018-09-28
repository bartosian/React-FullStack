import React from 'react';
import AppButton from '../UI/AppButton/AppButton';
import './HomePage.css';


const homePage = (props) => (
    <div className="home-wrapper">
        <div className="info">
            <h1>IronProfile</h1>
            <p className="main-text">Today we will create cool app with authorization, adding some cool styles.</p>
            <AppButton bg="green">Sign up</AppButton>
            <AppButton bg="green">log in</AppButton>
        </div>
    </div>
);

export default homePage;