import React, { useContext } from 'react';
import { ModeContext } from '../contexts/ModeContext';

const ModeControl = () => {
  const { changeMode } = useContext(ModeContext);

  return (
    <div className='modeControl'>
      <button className='modeControl-button' onClick={() => changeMode('🍃Ventilar')}>🍃</button>
      <button className='modeControl-button' onClick={() => changeMode('❄️Refrigerar')}>❄️</button>
      <button className='modeControl-button' onClick={() => changeMode('☀️Aquecer')}>☀️</button>
    </div>
  );
};

export default ModeControl;
