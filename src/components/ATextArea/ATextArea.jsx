import React from 'react';
import classes from './ATextArea.module.css';

const ATextArea = function (props) {
    return (
        <div className={classes.textarea__wrapper}>
            { props.labelText !== ''
                ? <div>
                    { props.required === true
                        ? <p className={classes.textarea__label}>
                            {props.labelText} *
                        </p>
                        : <p className={classes.textarea__label}>
                            {props.labelText}
                        </p>
                    }
                  </div>
                : <div></div>
            }
            <textarea className={classes.textarea} 
                required={props.required}
                placeholder={props.placeholder}>
            </textarea>
        </div>
    )
}

export default ATextArea;