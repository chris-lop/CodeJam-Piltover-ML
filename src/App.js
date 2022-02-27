import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
import Timer90Minutes from './Timer90Minutes';
import Timer5217rule from './Timer5217rule';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col} from 'react-bootstrap';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <button className="ToggleBtn" onClick={() => setIsToggled(!isToggled)}>Start Now</button>
      { isToggled && <Timer />}
      { isToggled && <Timer90Minutes />}
      { isToggled && <Timer5217rule />}

      <Container>
        <Carousel className="Carousel" interval="null">
          <Carousel.Item>
            <Timer />
          </Carousel.Item>
          <Carousel.Item>
            <Timer90Minutes />
          </Carousel.Item>
          <Carousel.Item>
            <Timer5217rule />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default App;
