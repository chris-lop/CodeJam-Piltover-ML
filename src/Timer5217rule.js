import React, {useEffect, useState} from "react";

import useCountDown from 'react-countdown-hook';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timer.css';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var initialTime = 6 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 50; // interval to change remaining time amount, defaults to 1000

export default function Timer() {

   const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);
   const [work, setWork] = useState(false);

   

   React.useEffect(() => {
       if (timeLeft === 0) {
           if(work){
               setWork(false)
           }
           else {
               setWork(true);
           }
           
       }
     }, [timeLeft]);
     React.useEffect(() => {
       if (work) {
           start(3120000);
           }
           else {
           start(1020000);
           }
           
       
     }, [work]);

   function initTime(){
       if(work) return 3120000
       else return 1020000
   }
     

    return ( 
       <div className="Timer">
       <h1> {WorkOrBreak(work)} </h1> 

       <div style={{width: 200, height: 200}} className="ProgCircle"><CircularProgressbar value={timeLeft/initTime*100} text={ `${timeToHours(timeLeft)}: ${timeToMinutes(timeLeft)} : ${timeToSeconds(timeLeft)} : ${timeToMillis(timeLeft)}` } /></div>
       
       <Container className="btnContainer">
           <Row className="rows">
               <Col className="columns"><button className="btns" onClick={pause}>Pause</button></Col>
               <Col className="columns"><button className="btns" onClick={resume}>Resume</button></Col>
               <Col className="columns"><button className="btns" onClick={start}>{WorkOrBreak(!work)}!</button></Col>
           </Row>
       </Container>
       </div>
    )
    function timeToHours(time){
        
        var hours = Math.floor((time/1000) / 3600)
        if (hours<10){
            var str = `0${hours} `
        }
        else str = hours
        return str
    }
    function timeToMinutes(time) {
       var min = Math.floor((time/1000%3600)/60)
       if (min<10) {
           var str = `0${min} `
       }
       else str = min
       return str
   }
    function timeToSeconds(time) {
      
       var sec = Math.floor(time/1000%60)
       if (sec<10) {
           var str = `0${sec} `
       }
       else str = sec
       return str;
   }
//    function timeToMillis(time) {
      
//        var mil = Math.floor(time/100%10)
       
//        return mil
//    }

   function WorkOrBreak(work){
       if (work){
           return "Work"
       }
       else return "Break"
   }
}


