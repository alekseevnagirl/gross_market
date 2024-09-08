import React, { useState } from 'react';
import Header from '../components/Header/Header';
import AInput from '../components/AInput/AInput';
import ARadioButtonGroup from '../components/ARadioButtonGroup/ARadioButtonGroup';
import ASelect from '../components/ASelect/ASelect';
import ATextArea from '../components/ATextArea/ATextArea';
import AFileLoader from '../components/AFileLoader/AFileLoader';

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
  
    return (
      <div className="App">
        <Header></Header>
  
        <AInput labelText="ФИО" 
          required={true} 
          placeholder="tyui">
        </AInput>
  
        <ARadioButtonGroup labelText="Пол" 
          values={ gender }>
        </ARadioButtonGroup>
  
        <ASelect labelText="Вакансия" 
          values={ vacancies } 
          required={true}>
        </ASelect>
  
        <ATextArea labelText="Резюме"></ATextArea>
  
        <AFileLoader></AFileLoader>
      </div>
    );
  }

export default FormPage;