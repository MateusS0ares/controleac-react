import React, { createContext, useState } from 'react';

export const SpeedContext = createContext();

export const SpeedProvider = ({ children }) => {
  const [speed, setSpeed] = useState(1);

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <SpeedContext.Provider value={{ speed, changeSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};
