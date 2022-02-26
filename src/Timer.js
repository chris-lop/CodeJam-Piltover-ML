 import React, {useEffect, useState} from "react";
 import { useTimer } from 'use-timer';

 
 export default function Timer() {

    const {time, start, pause, reset, status, advanceTime } = useTimer({
        initialTime: 200,
        timerType: 'DECREMENTAL',
        initialStatus: "RUNNING",
        autostart: true,
        endTime: 0,
        onTimeOver: () => {
            console.log('Time is over');
          },
    });
    function addTime() {
        advanceTime(-60);
    }
    function removeTime(){
        advanceTime(60)
    }
     return ( 
         <div>
             
           {timeToMinutes(time)}: {timeToSeconds(time)}
           {<button onClick={reset}>
                Reset
            </button>}
            {<button onClick={start}>
                Start
            </button>}
            {<button onClick={pause}>
                Stop
            </button>}
            {<button onClick={removeTime}>
                -1 min
            </button>}
            {<button onClick={addTime}>
                +1 min
            </button>}
        </div>
     )
     
 }

function timeToMinutes(time) {
    var min = Math.floor(time/60)
    if (min<10) {
        var str = `0${min} `
    }
    else str = min
    return str
}
function timeToSeconds(time) {
    var sec = time%60
    if (sec<10) {
        var str = `0${sec} `
    }
    else str = sec
    return str
}

