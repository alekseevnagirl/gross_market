import React, { useState } from 'react';
import AButton from '../components/AButton/AButton';
import '../styles/SuccessfulSending.css'

function SuccessfulSending() {
    return (
        <div className='SuccessfulSending__wrapper'>
            <p className='SuccessfulSending__title'>
                Ждем тебя!
            </p>

            <div className='SuccessfulSending__container'>
                <div className='SuccessfulSending__container__content__wrapper'>
                    <p className='SuccessfulSending__container__content'>
                        В 2020 году самыми востребованными умениями и качествами на рынке труда станут: 
                    </p>
                    <p className='SuccessfulSending__container__contentWithBorder'>
                        Умение ставить цели, планировать свое время, инициативность, настойчивость, 
                        высокая мотивация, умение эффективно общаться, любознательность. 
                    </p>
                    <p className='SuccessfulSending__container__content'>
                        А профессиональным навыкам можно научить любого человека.
                    </p>
                </div>

                <div className='SuccessfulSending__container__contact__wrapper'>
                    <p className='SuccessfulSending__container__contact__title'>
                        Остались вопросы?
                    </p>
                    <AButton value="+7 (926) 433-14-16" disabled={true} className="SuccessfulSending__phoneNumber"></AButton>
                </div>
            </div>
        </div>
    )
}

export default SuccessfulSending;