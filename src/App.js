import { useState } from 'react';
import './App.css';
import Settings from './Components/Settings';
import Timer from './Components/Timer';
import SettingsContext from './Components/SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(true)

  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes: 45,
        breakMinutes: 15
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
