 import React, {useEffect, useState} from "react";

 import useCountDown from 'react-countdown-hook';

 var initialTime = 6 * 1000; // initial time in milliseconds, defaults to 60000
 const interval = 50; // interval to change remaining time amount, defaults to 1000

 export default function Timer() {

    const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);
    const [work, setWork] = useState(true);

    

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
            start(5000);
            }
            else {
            start(3000);
            }
            
        
      }, [work]);

   
      

     return ( 
         <>
         <div>
         <h1>{WorkOrBreak(work)} </h1>

<p>Time left: {timeToMinutes(timeLeft)} : {timeToSeconds(timeLeft)} : {timeToMillis(timeLeft)} </p>
    
     
      <button onClick={pause}>
        Pause
      </button>
      <button onClick={resume}>
        resume
      </button>

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


