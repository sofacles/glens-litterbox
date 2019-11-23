import React from "react";
import GoBack from "./GoBack";
import GoForward from "./GoForward";
import "./App.css"

interface props {
  makeFirstPart: () => JSX.Element,
  makeSecondPart: () => JSX.Element,
  makeThirdPart: () => JSX.Element,
}
const ThreePartPage = (props: props) => {

  const back = () => {
    console.log("Back command")
  };

  const forward = () => {
    console.log("Forward command")
  };
  return (<div className="carousel">
  <GoBack goBackCommand={back}>{props.makeFirstPart()}</GoBack>
  <>{props.makeSecondPart()}</>
  <GoForward goForwardCommand={forward}>{props.makeThirdPart()}</GoForward>
  </div>);
};

export default ThreePartPage;