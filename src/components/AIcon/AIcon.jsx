import React from 'react';
import classes from './AIcon.module.css';

const AIcon = function (props) {
    const href = "images/icons/" + props.iconName + ".png";
    return (
        <div>
            <img src={href} className={classes.icon}/>
        </div>
    )
}

export default AIcon;