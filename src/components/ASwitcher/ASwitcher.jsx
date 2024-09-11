import React, { useState } from 'react';
import classes from './ASwitcher.module.css';

const ASwitcher = function ({slidesLength, currentSlide, changeSlide}) {
    const [disabledLeft, setDisabledLeft] = useState(true);
    const [disabledRight, setDisabledRight] = useState(false);
    const [current, setCurrent] = useState(currentSlide);
    const [length, setLength] = useState(slidesLength);
    function clickLeft() { 
        setCurrent((current) => current - 1);
        changeSlide(current);
        changeDisabled(current);
    }
    function clickRight() { 
        setCurrent((current) => current + 1);
        changeSlide(current);
        changeDisabled(current);
    }
    function changeDisabled(current) {
        if (current === 0) {
            setDisabledLeft((disabledLeft) => true);
            setDisabledRight((disabledRight) => false);
        }
        else if ((current + 1) === length) {
            setDisabledLeft((disabledLeft) => false);
            setDisabledRight((disabledRight) => true);
        }
        else {
            setDisabledLeft((disabledLeft) => false);
            setDisabledRight((disabledRight) => false);
        }
    }

    return (
        <div className={classes.switcher__wrapper}>
            <button className={classes.switcher__left}
                onClick={clickLeft}
                disabled={disabledLeft}>
                ◀
            </button>
            <button className={classes.switcher__right}
                onClick={clickRight}
                disabled={disabledRight}>
                ▶︎
            </button>
        </div>
    )
}

export default ASwitcher;