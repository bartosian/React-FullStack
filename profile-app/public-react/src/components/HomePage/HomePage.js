import React from 'react';
import AppButton from '../UI/AppButton/AppButton';
import './HomePage.css';


const homePage = (props) => (
    <div className="home-wrapper">
        <AppButton bg="green">Sign up</AppButton>
        <AppButton bg="green">log in</AppButton>
    </div>
);

export default homePage;