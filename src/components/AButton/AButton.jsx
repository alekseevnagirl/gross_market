import React from 'react';
import classes from './AButton.module.css';

const AButton = function (props) {
    return (
        <div>
            <button className={props.filterSelected ? classes.button__filterSelected : classes.button}
                onClick={props.click}
                disabled={props.disabled}
                type={props.type}>
                {props.value}
            </button>
        </div>
    )
}

export default AButton;