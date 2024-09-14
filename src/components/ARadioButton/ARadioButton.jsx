import React from 'react';
import classes from './ARadioButton.module.css';

const ARadioButton = function (props) {
    return (
        <div className={classes.radioButton__wrapper}>
            <input type="radio" 
                className={classes.radioButton}
                name={props.name}>
            </input>
            <p className={classes.radioButton__label}>
                {props.value}
            </p>
        </div>
    )
}

export default ARadioButton;