import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://i.pinimg.com/236x/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860--mr-bean-funny-color-blue.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ex modi, odit porro quo reiciendis repudiandae sed ut!
            </div>
        </div>

    );
}

export default ProfileInfo;