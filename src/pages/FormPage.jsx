import React, { useState, useRef } from 'react';
import AInput from '../components/AInput/AInput';
import ARadioButtonGroup from '../components/ARadioButtonGroup/ARadioButtonGroup';
import ASelect from '../components/ASelect/ASelect';
import ATextArea from '../components/ATextArea/ATextArea';
import AFileLoader from '../components/AFileLoader/AFileLoader';
import ACheckBox from '../components/ACheckBox/ACheckBox';
import AButton from '../components/AButton/AButton';
import ACaptcha from '../components/ACaptcha/ACaptcha';
import '../styles/FormPage.css'
import { useNavigate } from 'react-router-dom';
import DataProcessing from '../mixins/DataProcessing';
import emailjs from '@emailjs/browser';

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

    const approvalText = "я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений *";

    const [isNotValid, setIsNotValid] = useState(false);

    const navigate = useNavigate ();
    const vacancyRef = useRef();
    const fioRef = useRef();
    const dateRef = useRef();
    const genderRef =useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); console.log(vacancyRef, genderRef);

        let sendMessage = `Вакансия: ${vacancyRef.current.value}.\n 
            ФИО: ${fioRef.current.value}.\n
            Дата рождения: ${dateRef.current.value}.\n
            Пол: .\n
            Контактный телефон: ${phoneRef.current.value}.\n
            Электронная почта: ${emailRef.current.value}.\n
            Резюме: .`;

        let sendData = {
            name: fioRef.current.value,
            message: sendMessage
        }

        emailjs.send('default_service', 'template_lxeib3a', sendData, {
            publicKey: 'O95mwj5YpKOZb-MC-'
        })
        .then(
          () => {
            navigate('/success');
          },
          (error) => {
            alert(error);
          },
        );
    };

    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => {
        setPopupOpen(true);
    };
    const closePopup = () => {
        setPopupOpen(false);
    };

    const [isInvalid, setInvalid] = useState(false);
  
    return (
      <div className="FormPage__wrapper">
        <p className="FormPage__title">
            Работа твоей мечты
        </p>

        <div className="FormPage__container">
            <div className="FormPage__container__item__form">
                <form onSubmit={handleSubmit}>
                    <table className="FormPage__container__table">
                        <tr>
                            <td colspan="2">
                                <ASelect labelText="Вакансия" 
                                    values={ vacancies } 
                                    required={true}
                                    ref={vacancyRef}>
                                </ASelect>
                            </td>
                        </tr>
                        
                        <tr>
                            <td colspan="2">
                                <AInput labelText="ФИО" 
                                    required={true}
                                    isInvalid={isInvalid} 
                                    ref={fioRef}>
                                </AInput>
                            </td>
                        </tr>

                        <tr>
                            <td width="50%">
                                <div className='FormPage__container__table__input'>
                                    <AInput labelText="Дата рождения" 
                                        required={true} 
                                        placeholder="28.07.2002"
                                        isInvalid={isInvalid}
                                        ref={dateRef}>
                                    </AInput>
                                </div>
                            </td>
                            <td width="50%">
                                <ARadioButtonGroup labelText="Пол" 
                                    values={ gender }
                                    name="gender"
                                    ref={genderRef}>
                                </ARadioButtonGroup>
                            </td>
                        </tr>

                        <tr>
                            <td width="50%">
                                <div className='FormPage__container__table__input'>
                                    <AInput labelText="Контактный телефон" 
                                        required={true} 
                                        placeholder="+7 ("
                                        isInvalid={isInvalid} 
                                        ref={phoneRef}>
                                    </AInput>
                                </div>
                            </td>
                            <td>
                                <AInput labelText="Электронная почта" 
                                    required={false}
                                    isInvalid={isInvalid} 
                                    ref={emailRef}>
                                </AInput>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="2">
                                <ATextArea labelText="Резюме">
                                </ATextArea>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="2">
                                <AFileLoader></AFileLoader>
                            </td>
                        </tr>

                        <tr>
                            <td width="50%">
                                <ACaptcha labelText="Капча"></ACaptcha>
                            </td>
                            <td>
                                <p className="FormPage__container__note">
                                    * поля для обязательного заполнения
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="2">
                                <ACheckBox value={approvalText}
                                    onClick={openPopup}>
                                </ACheckBox>
                                <DataProcessing closePopup={closePopup}
                                    isPopupOpen={isPopupOpen}>
                                </DataProcessing>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="2">
                                <AButton value="отправить" 
                                    disabled={isNotValid} 
                                    className="FormPage__sendButton"
                                    type="submit">
                                </AButton>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

            <div className="FormPage__container__item__info">
                <p className="FormPage__container__title">Наша суперцель</p>
                <p>— стать любимым магазином для каждой российской семьи.<br/><br/>
                Сотни тысяч наших сотрудников ежедневно работают над её достижением.<br/><br/>
                Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если вместе с тобой.</p>
                <AButton value="+7 (926) 433-14-16" disabled={true} className="FormPage__phoneNumber"></AButton>
            </div>
        </div>
        
      </div>
    );
  }

export default FormPage;