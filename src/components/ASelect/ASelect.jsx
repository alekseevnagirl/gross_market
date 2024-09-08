import React, { useState } from 'react';
import classes from './ASelect.module.css';

const ASelect = function (props) {
    const[selectValues, setValues] = useState(props.values);

    return (
        <div className={classes.select__wrapper}>
            { props.labelText !== ''
                ? <div>
                    { props.required === true
                        ? <p className={classes.select__label}>{ props.labelText } *</p>
                        : <p className={classes.select__label}>{ props.labelText }</p>
                    }
                  </div>
                : <div></div>
            }

            <select className={classes.select}>
                { selectValues.map(value => 
                    <option className={classes.select__option}>{value.value}</option>
                )}
            </select>
        </div>
    )
}

export default ASelect;