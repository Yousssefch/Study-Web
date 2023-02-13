import React from "react";
import { ReactDOM } from "react";
import Background from "./Background";
import Timer from "./Timer";
import overlayop from "./overlayop";
import Playlist from "./Playlist";
import Title from "./Title";

function App() {
  return(
    <>
      <Title></Title>
      <Background></Background>
      <Timer></Timer>
      <Playlist></Playlist>
    </>
  )
  
}

export default App;
