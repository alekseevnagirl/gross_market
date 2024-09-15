import React, { useState } from 'react';
import classes from './InstagramFeed.module.css';

const InstagramFeed = function (props) {
    const[posts, setValues] = useState(props.posts);

    return (
        <div className={classes.feed__wrapper}>
            <p className={classes.feed__title}>
                { props.title }
            </p>
            <div className={classes.feed__content}>
                { posts.map((value, index) =>
                    <div>
                        <img src={value.src} 
                            className={classes.feed__content__post}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InstagramFeed;