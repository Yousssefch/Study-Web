import React ,{useState,useEffect} from "react";
import { ReactDOM } from "react";
import './style.css';


function Timer() {
    let startingMinutes = 20;
    let startingSeconds = 0;
    const [buttonText,setbuttonText] = useState("Start");
    const [isActivated,setisActivated] = useState(false);
    const [countDownSecond,setCountSecond] = useState(startingSeconds);
    const [countDownMinute,setCountMinute] = useState(startingMinutes);
    useEffect(()=>{
        let interval = setInterval(()=>{
            if (isActivated===true) {
                updateTime();
            }
                console.log(isActivated);

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
            else if (countDownMinute==0) {
                Break();
            }
        }
        console.log("minutes:"+countDownMinute+"seondes:"+countDownSecond);
    }
    function Activate() {
        setisActivated(!isActivated);
        console.log(isActivated);
        if (isActivated) {
            setbuttonText("Resume");
        }
        else{
            setbuttonText("Pause");
        }
    }
    function Break() {
        setCountMinute(5);
        setCountSecond(0);
        setisActivated(false);
        setbuttonText('Start');
    }
    return(
        <div className="timer">
        <h1 className="stateName">Study cycle</h1>
        <h1 className="text-timer" id="Countdown">{countDownMinute}:{countDownSecond}</h1>
        <div className="buttons">
        <button type="button" className="startButton" onClick={Activate}>{buttonText}</button>
        </div>
        </div>

    )

}
export default Timer;