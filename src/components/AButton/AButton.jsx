import React from 'react';
import classes from './AButton.module.css';

const AButton = function (props) {
    return (
        <div>
            <button className={classes.button}
                onClick={props.click}
                disabled={props.disabled}>
                {props.value}
            </button>
        </div>
    )
}

export default AButton;