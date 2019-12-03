import React, {createContext, useState } from "react";

const SrcContext = createContext([{}, () => {}]);

const SrcContextProvider = (props) => {
    const [state, setState ] = useState({src: "a.jpg"});
    return <SrcContext.Provider value={[state, setState]}>
        {props.children}
    </SrcContext.Provider>
}

export {SrcContext, SrcContextProvider};