import React, { useState } from 'react';
import classes from './ASlider.module.css'; 

const ASlider = function (props) {
    const[slides, setValues] = useState(props.slides)

    const[slide, setCurrentSlide] = useState(
        {currentIndex: 0, disabledLeft: true, disabledRight: false}
    );
    const [length, setLength] = useState(slides.length);

    function clickLeft() {
        setCurrentSlide(prevSlide => {
            const newIndex = prevSlide.currentIndex - 1;
            let newDisabledLeft, newDisabledRight;

            if (newIndex === 0) {
                newDisabledLeft = true;
                newDisabledRight = false;
            }
            else if ((newIndex + 1) === length) {
                newDisabledLeft = false;
                newDisabledRight = true;
            }
            else {
                newDisabledLeft = false;
                newDisabledRight = false;
            }

            console.log(newIndex, newDisabledLeft, newDisabledRight)

            return {
                ...prevSlide,
                currentIndex: newIndex,
                disabledLeft: newDisabledLeft,
                disabledRight: newDisabledRight
            };
        });
    }
    function clickRight() {
        setCurrentSlide(prevSlide => {
            const newIndex = prevSlide.currentIndex + 1;
            let newDisabledLeft, newDisabledRight;

            if (newIndex === 0) {
                newDisabledLeft = true;
                newDisabledRight = false;
            }
            else if ((newIndex + 1) === length) {
                newDisabledLeft = false;
                newDisabledRight = true;
            }
            else {
                newDisabledLeft = false;
                newDisabledRight = false;
            }

            return {
                ...prevSlide,
                currentIndex: newIndex,
                disabledLeft: newDisabledLeft,
                disabledRight: newDisabledRight
            };
        });
    }

    return (
        slides.map((value, index) => 
            <div>
                {index === slide.currentIndex 
                    ? <div className={classes.slider__wrapper}>
                        <div className={classes.slider__container}>
                            <div className={classes.slider__container__item__switching}>
                                <p>{value.title}</p>
                                <div className={classes.switcher__wrapper}>
                                    <button className={classes.switcher__left}
                                        onClick={clickLeft}
                                        disabled={slide.disabledLeft}>
                                        ◀
                                    </button>
                                    <button className={classes.switcher__right}
                                        onClick={clickRight}
                                        disabled={slide.disabledRight}>
                                        ▶︎
                                    </button>
                                </div>
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

/*<ASwitcher slidesLength={slides.length}
                                    currentSlide={currentSlide}
                                    changeSlide={changeSlide}>
                                </ASwitcher>*/

                                /*const[slides, setValues] = useState(props.slides);
    let currentSlide = { currentIndex: 0, disabledLeft: true, disabledRight: false };
    const[slide, setCurrentSlide] = useState(currentSlide);

    const changeSlide = (slide) => {
        setCurrentSlide((slide) => {
            slide.currentIndex = slide.currentIndex;
        });
    }*/