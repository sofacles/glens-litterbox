import React, { useState, useContext } from "react";
import GoBack from "./GoBack";
import GoForward from "./GoForward";
import ThreePartProps from "./ThreePartProps";
import { SrcContext } from "./SrcContext"
import "./App.css"
import StagingArea from "./StagingArea";
import { ContextInterface } from "./ContextInterface";


const CarouselViewer = (props: ThreePartProps) => {
  const obj = useContext<ContextInterface>(SrcContext);
  
  const back = () => {
    obj.DecrementIndex();
  };

  const forward = () => {
    obj.IncrementIndex();
  };

  return (<div className="carousel">
   
      <GoBack goBackCommand={back}>{props.makeVisualBackButton()}</GoBack>
      <StagingArea src={obj.state.src} />
      <GoForward goForwardCommand={forward}>{props.makeVisualForwardButton()}</GoForward>
  </div>);
};

export default CarouselViewer;