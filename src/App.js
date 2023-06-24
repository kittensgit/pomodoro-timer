import { useState } from 'react';
import './App.css';
import Settings from './Components/Settings';
import Timer from './Components/Timer';
import SettingsContext from './Components/SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(true)
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)

  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
