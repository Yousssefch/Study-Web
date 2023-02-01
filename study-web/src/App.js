import React from "react";
import { ReactDOM } from "react";
import Background from "./Background";
import Timer from "./Timer";
import overlayop from "./overlayop";

function App() {
  return(
    <>
      <Background></Background>
      <overlayop></overlayop>
      <Timer></Timer>
    </>
  )
  
}

export default App;
