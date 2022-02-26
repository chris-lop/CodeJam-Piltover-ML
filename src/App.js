import React, { useState } from 'react';
import Timer from './Timer';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      { isToggled && <Timer />}
    </div>
  )
}

export default App;
