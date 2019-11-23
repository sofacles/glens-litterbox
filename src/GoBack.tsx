import React, {ReactNode} from "react";


type props = {
    goBackCommand: () => void,
    children: ReactNode
}
const GoBack  = (props: props) => {
    return <div className="arrowButton" onClick={(e) => {
        props.goBackCommand();
    }}>
    {props.children}
    </div>
}

export default GoBack;