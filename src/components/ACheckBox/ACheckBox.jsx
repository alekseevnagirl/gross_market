import React from 'react';
import classes from './ACheckBox.module.css';

const ACheckBox = function (props) {
    return (
        <div className={classes.checkbox__wrapper}>
            <input type="checkbox" 
                className={classes.checkbox}
                id={props.id}/>
            <label for={props.id}>
                { props.value }
            </label>
        </div>
    )
}

export default ACheckBox;