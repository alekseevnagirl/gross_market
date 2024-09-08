import React from 'react';
import AButton from '../AButton/AButton';
import AIcon from '../AIcon/AIcon';
import classes from './Header.module.css';

const Header = function (props) {
    return (
        <div className={classes.header__wrapper}>
            <div className={classes.header__logo}>
                <AIcon iconName="logo-icon"></AIcon>
                <p>гросс маркет</p>
            </div>
            <div className={classes.header__contact}>
                <p>+7 (926) 433-14-16</p>
                <AButton value={"заполнить анкету"}>
                </AButton>
            </div>
        </div>
    )
}

export default Header;