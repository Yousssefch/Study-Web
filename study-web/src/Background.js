import React from "react";
import { ReactDOM } from "react";
import videobg from './assets/bgvideo.mp4'
import './style.css';


function Background() {
    return(
        <div className="bgvid">
            <video src={videobg}  preload="true" autoPlay loop muted></video>
            <div className="square"></div>
            
        </div>
        
    )
}
export default Background;