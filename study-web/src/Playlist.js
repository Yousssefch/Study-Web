import React from "react";
import { ReactDOM } from "react";
import "./style.css"

function Playlist() {
    return(
        <div className="playlist">
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8?utm_source=generator" className="spotify" frameBorder={0}></iframe>
        </div>
    )
    
}

export default Playlist;