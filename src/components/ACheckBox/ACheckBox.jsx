import React from 'react';
import classes from './ACheckBox.module.css';

const ACheckBox = function (props) {
    return (
        <div className={classes.checkbox__wrapper}>
            <input type="checkbox" 
                className={classes.checkbox}
                id={props.id}/>
            <button className={classes.checkbox__text}
                 onClick={props.onClick}>
                { props.value }
            </button>
        </div>
    )
}

export default ACheckBox;