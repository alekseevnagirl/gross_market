import React from 'react';
import ASlider from '../components/ASlider/ASlider';
import AMiniSlider from '../components/AMiniSlider/AMiniSlider';

function MainPage() {
    const slides = [
        {title: "У тебя к этому талант", src: "images/banners/banner-1.png"},
        {title: "У тебя всё под контролем", src: "images/banners/banner-2.png"}
    ];
    return (
        <div>
            <ASlider slides={slides}>
            </ASlider>

            <AMiniSlider></AMiniSlider>
        </div>
    );
}

export default MainPage;