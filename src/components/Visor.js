import React, { useContext } from 'react';
import '../App.css';
import { TemperatureContext } from '../contexts/TemperatureContext';
import { ModeContext } from '../contexts/ModeContext';
import { SpeedContext } from '../contexts/SpeedContext';


const Visor = () => {
const { temperature } = useContext(TemperatureContext);
const { mode } = useContext(ModeContext);
const { speed } = useContext(SpeedContext);


return (
    <div className='visor'>
        <h1 className='temp'>Temperatura: {temperature}°C</h1>
        <h1>Modo: {mode}</h1>
        <h1>Velocidade: {speed}</h1>
    </div>
  );
};

export default Visor;