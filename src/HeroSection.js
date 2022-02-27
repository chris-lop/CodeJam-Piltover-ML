import React, { useRef } from 'react'
import './HeroSection.css';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
 const appSection = useRef(null);

  return (
    <div className="hero-container">
        <video src="/videos/study.mp4" autoPlay loop muted />
        <Container className="text-container"> 
            <Row>
                <Col lg={6}><h1>Study Timer</h1></Col>
            </Row>
            <Row>
                <Col lg={6}><p>Struggling with school?</p></Col>
            </Row>
            <Row>
                <Col lg={6}><p>What are you waiting for?</p></Col>
            </Row>
            <Row>
                <Col lg={6}><button className="btn" onClick={scrollToApp}>Get Started</button>
                </Col>
            </Row>
        </Container>  
    </div>
  )
}
const scrollToApp = () => window.scrollTo({ top:5000, behavior: "smooth"})

export default HeroSection