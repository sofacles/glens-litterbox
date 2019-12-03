import React, {useContext} from "react";
import {SrcContext} from "./SrcContext"

const ContextConsumer = (props) => {
    const [state, setState] = useContext(SrcContext);
    return <div> I am inside the provider {state.src}</div>
};


export default ContextConsumer;