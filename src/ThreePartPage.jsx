import React from "react";


const ThreePartPage = props => {
  return (<article>
  <div className="first-bracket">{props.makeFirstPart()}</div>
  <div className="second-bracket">{props.makeSecondPart()}</div>
  <div className="third-bracket">{props.makeThirdPart()}</div>
  </article>);
};

export default ThreePartPage;