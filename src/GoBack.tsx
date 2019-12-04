import React, { ReactNode, useContext } from "react";
import {SrcContext} from "./SrcContext";
import { ContextInterface } from "./ContextInterface";

type props = {
    children: ReactNode
}
const GoBack = (props: props) => {
    const {DecrementIndex} = useContext<ContextInterface>(SrcContext);
    return <div className="arrowButton" onClick={(e) => {
       DecrementIndex();
    }}>
        {props.children}
    </div>
}

export default GoBack;