import React ,{useState,useEffect} from "react";
import { ReactDOM } from "react";
import './style.css';


function Timer() {
    let startingMinutes = 20;
    let startingSeconds = 0;
    const [countDownSecond,setCountSecond] = useState(startingSeconds);
    const [countDownMinute,setCountMinute] = useState(startingMinutes);
    useEffect(()=>{
        let interval = setInterval(()=>{
            updateTime();

        },1000);
        return () => clearInterval(interval);
    })
    function updateTime() {
        if(countDownSecond>0){
            setCountSecond(countDownSecond-1);
        }
        if (countDownSecond===0) {
            if (countDownMinute>0) {
                setCountSecond(59);
                setCountMinute(countDownMinute-1);
            }
        }
        console.log("minutes:"+countDownMinute+"seondes:"+countDownSecond);
    }
    return(
        <div className="timer">
        <h1 className="text-timer" id="Countdown">20:00</h1>
        </div>

    )

}
export default Timer;