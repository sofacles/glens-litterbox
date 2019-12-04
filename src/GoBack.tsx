import React, {ReactNode, useContext} from "react";
import {SrcContext} from "./SrcContext";

type props = {
    goBackCommand: () => void,
    children: ReactNode
}
const GoBack  = (props: props) => {
    const {DecrementIndex} = useContext(SrcContext)
    return <div className="arrowButton" onClick={(e) => {
        DecrementIndex();
    }}>
    {props.children}
    </div>
}

export default GoBack;