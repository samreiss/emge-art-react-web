import React from 'react';
import AppRouter from './AppRouter';
import { useGlobalDebug } from '../src/utils/useGlobalDebug'

const App: React.FC = () => {
  const isLoading = useGlobalDebug(); // turn on/off logging based on config

  if (isLoading) {
    return null; // Render nothing while loading
  }

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
