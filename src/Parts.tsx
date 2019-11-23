import React from "react";

const FirstPart = () : JSX.Element => {
    return <div className="backButton"> &lt; </div>;
  };
  const SecondPart = () : JSX.Element => {
    return <div className="stage"> The Stage</div>;
  };
  const ThirdPart = () : JSX.Element => {
    return <div className="forwardButton"> &gt;</div>;
  };


  export {FirstPart, SecondPart, ThirdPart};