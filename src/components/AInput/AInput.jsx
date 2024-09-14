import React, { useState } from 'react';
import classes from './AInput.module.css';

const AInput = function (props) {
    const errorRequired ='поле не заполнено';
    let error1 = 'поле заполнено не корректно';

    const [isInvalid, setInvalid] = useState(props.isInvalid);

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
            {props.required === true && props.value === '' && isInvalid === true
                ? <p className={classes.input__error}>
                    {errorRequired}
                </p>
                : <div></div>
            }
        </div>
    )
}

export default AInput;