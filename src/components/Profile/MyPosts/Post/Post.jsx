import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {

    // console.log(props.message)

    return(

        <div className={classes.item}>
            <img src={'https://i.pinimg.com/originals/00/3c/c9/003cc9a6329b24fdb4c1a2f843766d25.jpg'} />
            {props.message}
            <div>
                <span>Like {props.likeCounts}</span>
            </div>
        </div>

    );
}

export default Post;