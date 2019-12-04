import React, {useState} from "react";
import GoBack from "./GoBack";
import GoForward from "./GoForward";
import ThreePartProps from "./ThreePartProps";
import {SrcContextProvider} from "./SrcContext"
import "./App.css"
import Carousel from "./Carousel";


const CarouselViewer = (props: ThreePartProps) => {

  const images = props.items;
  const [currentIndex, setCurrentIndex] =  useState(0)
  const back = () => {
    if(currentIndex === 0){
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((currentIndex) => (currentIndex - 1));
    }
  };

  const forward = () => {
    if(currentIndex === images.length - 1){
      setCurrentIndex( currentIndex - 1);
    } else {
      setCurrentIndex((currentIndex) => (currentIndex + 1));
    }
  };
  return (<div className="carousel">
    <SrcContextProvider>
  <GoBack goBackCommand={back}>{props.makeVisualBackButton()}</GoBack>
  <Carousel src={"images/" + images[currentIndex]} />
  <GoForward goForwardCommand={forward}>{props.makeVisualForwardButton()}</GoForward>
  </SrcContextProvider>
  </div>);
};

export default CarouselViewer;