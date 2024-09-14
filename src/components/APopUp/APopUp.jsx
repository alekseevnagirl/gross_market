import React, { useState } from 'react';
import AIcon from '../AIcon/AIcon';
import classes from './APopUp.module.css';

const APopUp = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;
  
    return (
      <div className={classes.popup__wrapper} onClick={onClose}>
        <div className={classes.popup__scroll}>
          <div className={classes.popup} onClick={e => e.stopPropagation()}>
              <div className={classes.popup__close__wrapper}>
                  <button onClick={onClose}
                          className={classes.popup__close}>
                      <AIcon iconName="thin-close-icon">
                      </AIcon>
                  </button>
              </div>

              

              <div className={classes.popup__content__wrapper}>
                  {children}
              </div>
          </div>
        </div>
      </div>
    );
  };

export default APopUp;

/*
<div className={classes.popup__header__wrapper}>
                <div className={classes.popup__header}>
                  <p>{title}</p>
                  <button onClick={onClose}
                    className={classes.popup__close}>
                    <AIcon iconName="thin-close-icon">
                    </AIcon>
                  </button>
                </div>
              </div>
               */