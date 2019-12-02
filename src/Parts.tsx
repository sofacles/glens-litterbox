import React from "react";
let style = { fontSize: "2rem" };

const PurelyVisualBackButton = (): JSX.Element => {
  return <div style={style}> &lt; </div>;
};

const PurelyVisualForwardButton = (): JSX.Element => {
  return <div style={style}> &gt; </div>;
};


export { PurelyVisualBackButton, PurelyVisualForwardButton };