import React from 'react';
import AButton from '../AButton/AButton';
import AIcon from '../AIcon/AIcon';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = function (props) {
    const navigate = useNavigate ();

    const handleClick = () => {
        navigate('/form');
    };

    return (
        <div className={props.page !== '/form' ? classes.header__wrapper : classes.header__wrapper__form}>
            <p className={classes.header__logo}>
                <AIcon iconName="logo-icon"></AIcon>
                гросс маркет
            </p>
            { props.page !== '/form' ? 
                <div className={classes.header__contact}>
                    <p>+7 (926) 433-14-16</p>
                    <AButton value={"заполнить анкету"}
                        click={handleClick}>
                    </AButton>
                </div>
                : <div>
                    <AIcon iconName="close-icon"
                        href="/">
                    </AIcon>
                </div>
            }
        </div>
    )
}

export default Header;