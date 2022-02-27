import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';


function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <button className="ToggleBtn" onClick={() => setIsToggled(!isToggled)}>Start Now</button>
      { isToggled && <Timer />}
    </div>
  )
}

export default App;
