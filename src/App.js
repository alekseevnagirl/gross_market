import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
      <Header page="formPage"></Header>
      <FormPage></FormPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
