import React, { useState } from 'react';
import AIcon from '../AIcon/AIcon';
import DataProcessing from '../../mixins/DataProcessing';
import classes from './Footer.module.css';

const Footer = function (props) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => {
        setPopupOpen(true);
    };
    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className={classes.footer__wrapper}>
            <div className={classes.footer__block__wrapper}>
                <table className={classes.footer__block}>
                    <tr>
                        <td width="50%">
                            <p className={classes.footer__logo__contact}>
                            <AIcon iconName="logo-icon"></AIcon>
                                гросс маркет
                            </p>
                        </td>
                        <td>
                            <div className={classes.footer__contact__wrapper}>
                                <p className={classes.footer__logo__contact}>поделиться</p>
                                <div className={classes.footer__contact__icons}>
                                    <AIcon iconName="facebook-icon" href="https://www.facebook.com"></AIcon>
                                    <AIcon iconName="vk-icon" href="https://www.vk.com"></AIcon>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <table className={classes.footer_text__wrapper}>
                <tr>
                    <td width="50%">
                        <p>© Гросс маркет 2020</p>
                    </td>
                    <td>
                        <button onClick={openPopup}
                            className={classes.footer__popup}>
                            Политика обработки персональных данных
                        </button>
                        <DataProcessing closePopup={closePopup}
                            isPopupOpen={isPopupOpen}>
                        </DataProcessing>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Footer;