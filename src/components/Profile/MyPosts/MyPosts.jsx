import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi', likeCounts: 15},
        {id: 2, message: 'It\'s my first post', likeCounts: 20},
    ];

    return (
        <div className={classes.postsBlock}>
            <h3>My posts!</h3>
            <div>
                <div>
                    <textarea rows="3" cols="37" placeholder="Insert your post!"></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>

            <div className={classes.posts}>
                <Post message={postData[0].message} likeCounts={postData[0].likeCounts}/>
                <Post message={postData[1].message} likeCounts={postData[1].likeCounts}/>
            </div>
        </div>
    );
}

export default MyPosts;