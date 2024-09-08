import React from 'react';
import AIcon from '../AIcon/AIcon';
import classes from './AFileLoader.module.css';

const AFileLoader = function (props) {
    return (
        <div className={classes.fileLoader__wrapper}>
            { props.labelText !== ''
                ? <div>
                    { props.required === true
                        ? <p className={classes.fileLoader__label}>
                            {props.labelText} *
                        </p>
                        : <p className={classes.fileLoader__label}>
                            {props.labelText}
                        </p>
                    }
                  </div>
                : <div></div>
            }
            <label for="file-input">
                <div className={classes.fileLoader__loader__wrapper}>
                    <AIcon iconName="clip-icon" className={classes.fileLoader__icon}></AIcon>
                    <input type="file" id="file-input"
                        className={classes.fileLoader}/>
                </div>
            </label>
        </div>
    )
}

export default AFileLoader;