import React from 'react';
import ASlider from '../components/ASlider/ASlider';
import AMiniSlider from '../components/AMiniSlider/AMiniSlider';
import YandexMap from '../components/YandexMap/YandexMap';
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

    const points = [
        { id: 1, coords: [55.747034, 37.539156], type: 'юрлица' },
        { id: 2, coords: [55.753605, 37.619773], type: 'юрлица' },
        { id: 3, coords: [55.734643, 37.605768], type: 'физлица'},
        { id: 4, coords: [55.715677, 37.552166], type: 'физлица' },
        { id: 5, coords: [55.743041, 37.566494], type: 'юрлица' },
        { id: 6, coords: [55.773818, 37.654649], type: 'физлица' },
        { id: 7, coords: [55.738095, 37.666848], type: 'юрлица'},
        { id: 8, coords: [55.721184, 37.634344], type: 'физлица'},
        { id: 9, coords: [55.761061, 37.577638], type: 'физлица'},
        { id: 10, coords: [55.760674, 37.619595], type: 'физлица' }
    ];

    return (
        <div className="MainPage__wrapper">
            <ASlider slides={slides}>
            </ASlider>

            <AMiniSlider title="вакансии в гросс маркете"
                slides={miniSlides}>
            </AMiniSlider>

            <br/><br/><br/> insta <br/><br/><br/>

            <YandexMap points={points} />
        </div>
    );
}

export default MainPage;