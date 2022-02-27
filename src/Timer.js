 import React, {useEffect, useState} from "react";

 import useCountDown from 'react-countdown-hook';
 import { CircularProgressbar } from 'react-circular-progressbar';
 import 'react-circular-progressbar/dist/styles.css';

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
            start(1500000);
            }
            else {
            start(300000);
            }
            
        
      }, [work]);

    function initTime(){
        if(work) return 1500000
        else return 300000
    }
      

     return ( 
         <>
         <div style={{ width: 200, height: 200 }}>
         <h1> <center>{WorkOrBreak(work)}

<div style={{ width: 200, height: 200 }}>
<CircularProgressbar value={timeLeft/initTime*100} text={ `${timeToMinutes(timeLeft)} : ${timeToSeconds(timeLeft)} : ${timeToMillis(timeLeft)}` } />;
</div>
     
      <button onClick={pause}>
        Pause
      </button>
      <button onClick={resume}>
        Resume
      </button>
      <button onClick={start}>
        {WorkOrBreak(!work)}!
      </button>
      </center></h1>
        </div>
        </>
     )
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
    function timeToMillis(time) {
       
        var mil = Math.floor(time/100%10)
        
        return mil
    }

    function WorkOrBreak(work){
        if (work){
            return "Work"
        }
        else return "Break"
    }
 }


