import { useState } from 'react';
import './App.css';
import Settings from './Components/Settings';
import Timer from './Components/Timer';

function App() {

  const [showSettings, setShowSettings] = useState(true)

  return (
    <main>
      {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
