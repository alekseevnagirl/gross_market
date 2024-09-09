import React, { useState } from 'react';
import AInput from '../components/AInput/AInput';
import ARadioButtonGroup from '../components/ARadioButtonGroup/ARadioButtonGroup';
import ASelect from '../components/ASelect/ASelect';
import ATextArea from '../components/ATextArea/ATextArea';
import AFileLoader from '../components/AFileLoader/AFileLoader';
import '../styles/FormPage.css'

function FormPage() {
    const [gender, setGender] = useState([
        {key: 'man', value: 'мужской'},
        {key: 'woman', value: 'женский'}
      ]
    )
  
    const [vacancies, setVacancies] = useState([
      {key: 'commodityExpert', value: 'товаровед'},
      {key: 'driver', value: 'водитель'},
      {key: 'baker', value: 'пекарь'},
      {key: 'cashier', value: 'кассир'},
      {key: 'seller', value: 'продавец'},
      {key: 'cook', value: 'повар'},
      {key: 'receptionist', value: 'приёмщик'}
    ])

    const [verified, setVerified] = useState(false);

    const onChangeCaptcha = (value) => {
        setVerified(true);
    };
  
    return (
      <div className="FormPage__wrapper">
        <p className="FormPage__title">
            Работа твоей мечты
        </p>

        <div class="FormPage__container">
            <div class="FormPage__contaier__item">
                <ASelect labelText="Вакансия" 
                    values={ vacancies } 
                    required={true}>
                </ASelect>

                <AInput labelText="ФИО" 
                    required={true} >
                </AInput>

                <div className="displayFlex">
                    <AInput labelText="Дата рождения" 
                        required={true} 
                        placeholder="28.07.2002">
                    </AInput>
                    <ARadioButtonGroup labelText="Пол" 
                        values={ gender }>
                    </ARadioButtonGroup>
                </div>

                <div className="displayFlex">
                    <AInput labelText="Контактный телефон" 
                        required={true} 
                        placeholder="+7 (">
                    </AInput>
                    <AInput labelText="Электронная почта" 
                        required={false}>
                    </AInput>
                </div>

                <ATextArea labelText="Резюме"></ATextArea>
        
                <AFileLoader></AFileLoader><br/><br/>
            </div>

            <div class="FormPage__contaier__item">
                <p className="FormPage__contaier__title">Наша суперцель</p>
                <p>— стать любимым магазином для каждой российской семьи.<br/><br/>
                Сотни тысяч наших сотрудников ежедневно работают над её достижением.<br/><br/>
                Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если вместе с тобой.</p>
            </div>
        </div>
        
      </div>
    );
  }

export default FormPage;