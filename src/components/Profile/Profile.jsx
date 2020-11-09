import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div>
            <div>
                <img src='data:image/png;base64,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' />
            </div>

            <div>
                ava + description
            </div>

            <MyPosts />
        </div>
    );
}

export default Profile;