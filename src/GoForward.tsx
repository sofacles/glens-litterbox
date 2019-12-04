import React, {ReactNode, useContext} from "react";
import {SrcContext} from "./SrcContext";

type props = {
    goForwardCommand: () => void,
    children: ReactNode
}
const GoForward  = (props: props) => {
    const { IncrementIndex } = useContext(SrcContext);
    return <div className="arrowButton" onClick={(e) => {
       IncrementIndex();
    }}>
    {props.children}
    </div>
}

export default GoForward;