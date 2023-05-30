import React from 'react';
import './App.css';
import TemperatureControl from './components/TemperatureControl';
import ModeControl from './components/ModeControl';
import SpeedControl from './components/SpeedControl';
import Visor from './components/Visor';
import { TemperatureProvider } from './contexts/TemperatureContext';
import { ModeProvider } from './contexts/ModeContext';
import { SpeedProvider } from './contexts/SpeedContext';

function App() {
  return (
    <div className='card'>
    <TemperatureProvider>
      <ModeProvider>
        <SpeedProvider>
          <Visor />
          <TemperatureControl />
          <ModeControl />
          <SpeedControl />
        </SpeedProvider>
      </ModeProvider>
    </TemperatureProvider>
  </div>
  );
}

export default App;
