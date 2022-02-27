import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
import Timer90Minutes from './Timer90Minutes';
import Timer5217rule from './Timer5217rule';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <button className="ToggleBtn" onClick={() => setIsToggled(!isToggled)}>Start Now</button>
      { isToggled && <Timer />}
      { isToggled && <Timer90Minutes />}
      { isToggled && <Timer5217rule />}
    </div>
  )
}

export default App;
