import React from 'react';
import classes from './ACaptcha.module.css';

const ACaptcha = function (props) {
    return (
        <div className={classes.captcha__wrapper}>
            { props.labelText !== ''
                ? <div>
                    { props.required === true
                        ? <p className={classes.captcha__label}>
                            {props.labelText} *
                        </p>
                        : <p className={classes.captcha__label}>
                            {props.labelText}
                        </p>
                    }
                  </div>
                : <div></div>
            }
        </div>
    )
}

export default ACaptcha;