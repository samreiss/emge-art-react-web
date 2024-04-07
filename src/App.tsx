import React from 'react';
import AppRouter from './AppRouter';
import { useGlobalDebug } from '../src/utils/useGlobalDebug'
import './styles/styles.css';

const App: React.FC = () => {
  useGlobalDebug() // Turn on/off console logging based on configuration

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
