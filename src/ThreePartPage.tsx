import React from "react";
import GoBack from "./GoBack";
import GoForward from "./GoForward";
import ThreePartProps from "./ThreePartProps"
import "./App.css"

const ThreePartPage = (props: ThreePartProps) => {

  return (<div>
    <GoBack >{props.makeVisualBackButton()}</GoBack>
    {props.stagingArea}
    <GoForward>{props.makeVisualForwardButton()}</GoForward>
  </div>);
};

export default ThreePartPage;