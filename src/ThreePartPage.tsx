import React from "react";
import GoBack from "./GoBack";
import GoForward from "./GoForward";
import ThreePartProps from "./ThreePartProps"
import "./App.css"

const ThreePartPage = (props: ThreePartProps) => {

  const back = () => {
    console.log("Back command")
  };

  const forward = () => {
    console.log("Forward command")
  };
  return (<div className="carousel">
  <GoBack goBackCommand={back}>{props.makeVisualBackButton()}</GoBack>
  {props.stagingArea}
  <GoForward goForwardCommand={forward}>{props.makeVisualForwardButton()}</GoForward>
  </div>);
};

export default ThreePartPage;