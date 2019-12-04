import React, { ReactNode } from "react";

type props = {
    goForwardCommand: () => void,
    children: ReactNode
}
const GoForward = (props: props) => {
    return <div className="arrowButton" onClick={(e) => {
        props.goForwardCommand();
    }}>
        {props.children}
    </div>
}

export default GoForward;