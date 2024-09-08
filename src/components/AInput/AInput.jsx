import React from 'react';
import classes from './AInput.module.css';

const AInput = function (props) {
    return (
        <div className={classes.input__wrapper}>
            { props.labelText !== ''
                ? <div>
                    { props.required === true
                        ? <p className={classes.input__label}>
                            {props.labelText} *
                        </p>
                        : <p className={classes.input__label}>
                            {props.labelText}
                        </p>
                    }
                  </div>
                : <div></div>
            }
            <input type="text" 
                className={classes.input} 
                required={props.required}
                placeholder={props.placeholder}>
            </input>
        </div>
    )
}

export default AInput;