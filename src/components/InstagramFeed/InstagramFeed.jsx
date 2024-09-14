import React from 'react';
import classes from './InstagramFeed.module.css';

const InstagramFeed = function (props) {
    return (
        <div className={classes.feed__wrapper}>
            <p className={classes.feed__title}>
                { props.title }
            </p>
            <div></div>
        </div>
    )
}

export default InstagramFeed;