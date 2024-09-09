import React from 'react';
import classes from './AIcon.module.css';

const AIcon = function (props) {
    const src = "images/icons/" + props.iconName + ".png";
    return (
        <div>
            <a href={props.href}>
                <img src={src} className={classes.icon}/>
            </a>
        </div>
    )
}

export default AIcon;