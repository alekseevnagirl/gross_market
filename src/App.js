import React, { useState } from 'react';
import FormPage from './pages/FormPage';
import './styles/App.css'

function App() {
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
      <FormPage></FormPage>
    </div>
  );
}

export default App;
