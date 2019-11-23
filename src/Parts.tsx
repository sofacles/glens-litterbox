import React from "react";
let style = {fontSize: "2rem"};

const PurelyVisualBackButton = () : JSX.Element => {
    return <div style={style}> &lt; </div>;
  };
  const StagingArea = () : JSX.Element => {
    return <div className="stage"> <img alt="what should I put in here, the alt text is going to vary with the i.m.g." src="images/image1.png" /></div>;
  };
  const PurelyVisualForwardButton = () : JSX.Element => {
    return <div style={style}> &gt; </div>;
  };


  export {PurelyVisualBackButton, StagingArea, PurelyVisualForwardButton};