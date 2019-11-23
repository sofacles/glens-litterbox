import React from "react";
let style = {fontSize: "2rem"};
const FirstPart = () : JSX.Element => {
  
    return <div style={style}> &lt; </div>;
  };
  const SecondPart = () : JSX.Element => {
    return <div className="stage"> <img src="images/image1.png" /></div>;
  };
  const ThirdPart = () : JSX.Element => {
    return <div style={style}> &gt;</div>;
  };


  export {FirstPart, SecondPart, ThirdPart};