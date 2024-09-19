import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ARadioButton from '../ARadioButton/ARadioButton';
import classes from './ARadioButtonGroup.module.css';

const ARadioButtonGroup = forwardRef((props, ref) => {
    const[radioButtonValues, setValues] = useState(props.values);
    const [selectedValue, setSelectedValue] = useState('');
    
    useImperativeHandle(ref, () => ({
        getSelectedValue: () => selectedValue,
    }));

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

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
            <div className={classes.radioButtonGroup}>
                <table width="100%">
                    <tr>
                        { radioButtonValues.map(value => 
                            <td style={{ width: `${100 / radioButtonValues.length}%` }}>
                                <ARadioButton value={value.value} 
                                    name={props.name}
                                    onChange={handleChange}
                                    checked={selectedValue === value.value}>
                                </ARadioButton>
                            </td>
                        )}
                    </tr>
                </table>
            </div>
        </div>
    );
});

export default ARadioButtonGroup;