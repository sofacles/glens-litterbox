import React from "react";

interface props {
  makeFirstPart: () => JSX.Element,
  makeSecondPart: () => JSX.Element,
  makeThirdPart: () => JSX.Element,
}
const ThreePartPage = (props: props) => {
  return (<article>
  <div className="first-bracket">{props.makeFirstPart()}</div>
  <div className="second-bracket">{props.makeSecondPart()}</div>
  <div className="third-bracket">{props.makeThirdPart()}</div>
  </article>);
};

export default ThreePartPage;