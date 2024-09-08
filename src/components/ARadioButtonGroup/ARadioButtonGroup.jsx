import React, { useState } from 'react';
import ARadioButton from '../ARadioButton/ARadioButton';
import classes from './ARadioButtonGroup.module.css';

const ARadioButtonGroup = function (props) {
    const[radioButtonValues, setValues] = useState(props.values);

    return (
        <div className={classes.radioButtonGroup__wrapper}>
            { props.labelText !== ''
                ? <div>
                    { props.required === true
                        ? <p className={classes.radioButtonGroup__label}>{ props.labelText } *</p>
                        : <p className={classes.radioButtonGroup__label}>{ props.labelText }</p>
                    }
                  </div>
                : <div></div>
            }

            { radioButtonValues.map(value => 
                <ARadioButton value={value.value}></ARadioButton>
            )}
        </div>
    )
}

export default ARadioButtonGroup;