import React, { ReactNode, useContext } from "react";
import {SrcContext} from "./SrcContext";
import { ContextInterface } from "./ContextInterface";

type props = {
    children: ReactNode
}
const GoForward = (props: props) => {
    const {IncrementIndex} = useContext<ContextInterface>(SrcContext);
    return <div className="arrowButton" onClick={(e) => {
        IncrementIndex();
    }}>
        {props.children}
    </div>
}

export default GoForward;