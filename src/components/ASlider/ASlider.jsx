import React, { useState } from 'react';
import ASwitcher from '../ASwitcher/ASwitcher';
import classes from './ASlider.module.css';

const ASlider = function (props) {
    const[slides, setValues] = useState(props.slides);
    const[currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (slide) => {
        setCurrentSlide((currentSlide) => slide);
    }

    return (
        slides.map((value, index) => 
            <div>
                {index === currentSlide 
                    ? <div className={classes.slider__wrapper}>
                        <div className={classes.slider__container}>
                            <div className={classes.slider__container__item__switching}>
                                <p>{value.title}</p>
                                <ASwitcher slidesLength={slides.length}
                                    currentSlide={currentSlide}
                                    changeSlide={changeSlide}>
                                </ASwitcher>
                            </div>

                            <div className={classes.slider__container__item__image}>
                                <img src={value.src} />
                            </div>
                        </div>
                    </div>
                    : <div></div>
                }
            </div>
        )
    );
}

export default ASlider;