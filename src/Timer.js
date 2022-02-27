 import React, {useEffect, useState} from "react";

 import useCountDown from 'react-countdown-hook';

 var initialTime = 6 * 1000; // initial time in milliseconds, defaults to 60000
 const interval = 1000; // interval to change remaining time amount, defaults to 1000

 export default function Timer() {

    const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);
    const [work, setWork] = useState(true);
   // const isActive = timeLeft > 0;

    // start the timer during the first render
    React.useEffect(() => {
      start();
    }, []);
    
    const restartWork = React.useCallback(() => {
      // you can start existing timer with an arbitrary value
      // if new value is not passed timer will start with initial value
      if(work){

      const newTime = 7 * 1000;
        start(newTime);
        setWork(false);}
        else if (!work) {
            const newTime = 2 * 1000;
        
        start(newTime);
        setWork(true);
        }

    }, []);
   


     return ( 
         <>
         <div>
         <h1>{work.toString()}</h1>
<p>Time left: {timeToMinutes(timeLeft)} : {timeToSeconds(timeLeft)}  </p>

      <button onClick={restartWork}>
        Work
      </button>
      <button onClick={restartWork}>
        Break
      </button>
      <button onClick={pause}>
        Pause
      </button>
      <button onClick={resume}>
        Resume
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
         if(time === 0) restartWork();
        var sec = Math.floor(time/1000%60)
        if (sec<10) {
            var str = `0${sec} `
        }
        else str = sec
        return str;
    }
 }


