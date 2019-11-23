import React from "react";
import GoBack from "./GoBack";
import GoForward from "./GoForward";
import "./App.css"

interface props {
  makeVisualBackButton: () => JSX.Element,
  makeStagingArea: () => JSX.Element,
  makeVisualForwardButton: () => JSX.Element,
}
const ThreePartPage = (props: props) => {

  const back = () => {
    console.log("Back command")
  };

  const forward = () => {
    console.log("Forward command")
  };
  return (<div className="carousel">
  <GoBack goBackCommand={back}>{props.makeVisualBackButton()}</GoBack>
  <>{props.makeStagingArea()}</>
  <GoForward goForwardCommand={forward}>{props.makeVisualForwardButton()}</GoForward>
  </div>);
};

export default ThreePartPage;