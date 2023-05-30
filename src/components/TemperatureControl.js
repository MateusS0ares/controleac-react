import React, { useContext } from 'react';
import { TemperatureContext } from '../contexts/TemperatureContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const TemperatureControl = () => {
  const {increaseTemperature, decreaseTemperature } = useContext(TemperatureContext);

  return (
    <div className='tempControl'>
      <button className='temp-button' onClick={increaseTemperature}>
        <FontAwesomeIcon icon={faAngleUp} size='3x' />
      </button>
      <button className='temp-button' onClick={decreaseTemperature}>
      <FontAwesomeIcon icon={faAngleDown} size='3x'/>
      </button>
      
    </div>
  );
};

export default TemperatureControl;
