import React, { useContext } from 'react';
import { SpeedContext } from '../contexts/SpeedContext';

const SpeedControl = () => {
  const { changeSpeed } = useContext(SpeedContext);

  return (
    <div className='speedControl'>
      <button className='speedControl-button' onClick={() => changeSpeed(1)}>1</button>
      <button className='speedControl-button'  onClick={() => changeSpeed(2)}>2</button>
      <button className='speedControl-button'  onClick={() => changeSpeed(3)}>3</button>
    </div>
  );
};

export default SpeedControl;
