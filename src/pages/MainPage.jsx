import React from 'react';
import ASlider from '../components/ASlider/ASlider';
import AMiniSlider from '../components/AMiniSlider/AMiniSlider';
import '../styles/MainPage.css';

function MainPage() {
    const slides = [
        {title: "У тебя к этому талант", src: "images/banners/banner-1.png"},
        {title: "У тебя всё под контролем", src: "images/banners/banner-2.png"}
    ];

    const miniSlides = [
        {src : "images/commodityExpert.png"},
        {src : "images/driver.png"},
        {src : "images/baker.png"},
        {src : "images/cashier.png"},
        {src : "images/seller.png"},
        {src : "images/cook.png"},
        {src : "images/receptionist.png"}
    ];
    console.log(miniSlides);

    return (
        <div className="MainPage__wrapper">
            <ASlider slides={slides}>
            </ASlider>

            <AMiniSlider title="вакансии в гросс маркете"
                slides={miniSlides}>
            </AMiniSlider>
        </div>
    );
}

export default MainPage;