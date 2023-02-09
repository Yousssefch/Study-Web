import React from "react";
import { ReactDOM } from "react";
import Background from "./Background";
import Timer from "./Timer";
import overlayop from "./overlayop";
import Playlist from "./Playlist";

function App() {
  return(
    <>
      <Background></Background>
      <overlayop></overlayop>
      <Timer></Timer>
      <Playlist></Playlist>
    </>
  )
  
}

export default App;
