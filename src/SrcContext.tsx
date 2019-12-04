import React, { createContext, useState, useRef } from "react";
import { ContextInterface } from "./ContextInterface";

const SrcContext = createContext<ContextInterface>({
  state: {src: ""},
  IncrementIndex: () => {},
  DecrementIndex: () => {},
});

const SrcContextProvider = (props : any) => {
  const [state, setState] = useState({ src: "images/img1.jpg" });
  const index = useRef(0);
  const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg","images/img4.jpg",];

  const IncrementIndex = () => {
    const length = images.length;
    if (index.current < length - 1) {
      index.current = index.current + 1;
    } else {
      index.current = 0;
    }
    
    setState({ src: images[index.current] });
  };

  const DecrementIndex = () => {
      debugger;
    if (index.current === 0) {
      index.current = images.length - 1;
    } else {
      index.current = index.current - 1;
    }
    
    setState({ src: images[index.current] });
  };
  
  return (
    <SrcContext.Provider value={{state, IncrementIndex, DecrementIndex}}>
      {props.children}
    </SrcContext.Provider>
  );
};

export { SrcContext, SrcContextProvider };