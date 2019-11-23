import React from "react";
import "./App.css"

interface props {
  makeFirstPart: () => JSX.Element,
  makeSecondPart: () => JSX.Element,
  makeThirdPart: () => JSX.Element,
}
const ThreePartPage = (props: props) => {
  return (<div className="carousel">
  <>{props.makeFirstPart()}</>
  <>{props.makeSecondPart()}</>
  <>{props.makeThirdPart()}</>
  </div>);
};

export default ThreePartPage;