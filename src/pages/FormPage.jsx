import React, { useState } from 'react';
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

    const handleSubmit = (event) => {
        /*event.preventDefault();
        const { name, email } = event.target.elements;
        const newErrors = {};
    
        if (!name.value.trim()) {
          newErrors.name = 'Имя является обязательным';
        }
    
        if (!email.value.trim()) {
          newErrors.email = 'Электронная почта является обязательной';
        }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          // Отправляем форму
        }*/
          navigate('/success');
    };
  
    return (
      <div className="FormPage__wrapper">
        <p className="FormPage__title">
            Работа твоей мечты
        </p>

        <div class="FormPage__container">
            <div class="FormPage__container__item__form">
                <form onSubmit={handleSubmit}>
                    <table className="FormPage__container__table">
                        <tr>
                            <td colspan="2">
                                <ASelect labelText="Вакансия" 
                                    values={ vacancies } 
                                    required={true}>
                                </ASelect>
                            </td>
                        </tr>
                        
                        <tr>
                            <td colspan="2">
                                <AInput labelText="ФИО" 
                                    required={true} >
                                </AInput>
                            </td>
                        </tr>

                        <tr>
                            <td width="50%">
                                <div className='FormPage__container__table__input'>
                                    <AInput labelText="Дата рождения" 
                                        required={true} 
                                        placeholder="28.07.2002">
                                    </AInput>
                                </div>
                            </td>
                            <td width="50%">
                                <ARadioButtonGroup labelText="Пол" 
                                    values={ gender }>
                                </ARadioButtonGroup>
                            </td>
                        </tr>

                        <tr>
                            <td width="50%">
                                <div className='FormPage__container__table__input'>
                                    <AInput labelText="Контактный телефон" 
                                        required={true} 
                                        placeholder="+7 (">
                                    </AInput>
                                </div>
                            </td>
                            <td>
                                <AInput labelText="Электронная почта" 
                                    required={false}>
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
                                <ACheckBox value={approvalText}>
                                </ACheckBox>
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

            <div class="FormPage__container__item__info">
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