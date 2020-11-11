import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to="/profile">
                <img src='https://seeklogo.com/images/A/android-messages-logo-020799A598-seeklogo.com.png' />
            </NavLink>
        </header>
    );
}

export default Header;