import React, { useState, useRef } from 'react';
import classes from './AMiniSlider.module.css';

const AMiniSlider = function (props) {
    const[miniSlides, setValues] = useState(props.slides);

    const scrollContainerRef = useRef(null);
    const [disabled, setDisabled] = useState(
        { left: true, right: false }
    );

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
            setDisabled(prevDisabled => {
                let newDisabledLeft, newDisabledRight;
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                newDisabledLeft = scrollLeft === 0;
                newDisabledRight = scrollLeft + clientWidth >= scrollWidth;
                return {
                    ...prevDisabled,
                    left: newDisabledLeft,
                    right: newDisabledRight
                };
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
            setDisabled(prevDisabled => {
                let newDisabledLeft, newDisabledRight;
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                newDisabledLeft = scrollLeft === 0;
                newDisabledRight = scrollLeft + clientWidth >= scrollWidth;
                return {
                    ...prevDisabled,
                    left: newDisabledLeft,
                    right: newDisabledRight
                };
            });
        }
    };

    return (
        <div className={classes.miniSlider__wrapper}>
            <div className={classes.miniSlider__title__wrapper}>
                <p className={classes.miniSlider__title}>
                    { props.title }
                </p>
                <div className={classes.switcher__wrapper}>
                    <button className={classes.switcher__left}
                        onClick={scrollLeft}
                        disabled={disabled.left}>
                        ◀
                    </button>
                    <button className={classes.switcher__right}
                        onClick={scrollRight}
                        disabled={disabled.right}>
                        ▶︎
                    </button>
                </div>
            </div>

            <div className={classes.miniSlider__slides__wrapper}
                ref={scrollContainerRef}>
                { miniSlides.map((value, index) =>
                    <div>
                        <img src={value.src} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default AMiniSlider;