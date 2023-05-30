import React, { createContext, useState } from 'react';

export const TemperatureContext = createContext();

export const TemperatureProvider = ({ children }) => {
  const [temperature, setTemperature] = useState(25);

  const increaseTemperature = () => {
    if(temperature < 30){
      setTemperature(prevTemperature => prevTemperature + 1);
    }
  };

  const decreaseTemperature = () => {
    if(temperature > 16) {
      setTemperature(prevTemperature => prevTemperature - 1);
    }
  };

  return (
    <TemperatureContext.Provider value={{ temperature, increaseTemperature, decreaseTemperature }}>
      {children}
    </TemperatureContext.Provider>
  );
};