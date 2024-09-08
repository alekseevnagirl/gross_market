import React, { createContext, useContext } from 'react';
import AButton from './AButton/AButton';
import AIcon from './AIcon/AIcon';
import AInput from './AInput/AInput';
import ASlider from './ASlider/ASlider';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const ComponentContext = createContext();

const ComponentProvider = ({ children }) => {
  const components = {
    AButton,
    AIcon,
    AInput,
    ASlider,
    Footer,
    Header
  };

  return (
    <ComponentContext.Provider value={components}>
      {children}
    </ComponentContext.Provider>
  );
};

const useComponents = () => {
  return useContext(ComponentContext);
};

export { ComponentProvider, useComponents };

/*const ComponentsLibrary = [
    AButton,
    AIcon,
    AInput,
    ASlider,
    Footer,
    Header
];

export default ComponentsLibrary;*/