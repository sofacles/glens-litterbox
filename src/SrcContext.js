import React, { createContext, useState, useRef } from "react";

const SrcContext = createContext([{}, () => {}]);

const SrcContextProvider = props => {
  const [state, setState] = useState({ src: "a.jpg" });
  const index = useRef(0);
  const images = ["a.jpg", "b.jpg", "c.jpg"];

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
    if (index.current === 0) {
      index.current = images.length - 1;
    } else {
      index.current = index.current - 1;
    }
    
    setState({ src: images[index.current] });
  };
  return (
    <SrcContext.Provider value={[state, IncrementIndex, DecrementIndex]}>
      {props.children}
    </SrcContext.Provider>
  );
};

export { SrcContext, SrcContextProvider };
