import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
import Timer90Minutes from './Timer90Minutes';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <button className="ToggleBtn" onClick={() => setIsToggled(!isToggled)}>Start Now</button>
      { isToggled && <Timer />}
      <Timer90Minutes />
    </div>
  )
}

export default App;
