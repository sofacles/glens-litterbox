import React from "react";
import GoBack from "./GoBack";
import GoForward from "./GoForward";
import ThreePartProps from "./ThreePartProps";
import "./App.css"


const CarouselViewer = (props: ThreePartProps) => {

  return (<div className="carousel">
      <GoBack>{props.makeVisualBackButton()}</GoBack>
      {props.stagingArea}
      <GoForward>{props.makeVisualForwardButton()}</GoForward>
  </div>);
};

export default CarouselViewer;