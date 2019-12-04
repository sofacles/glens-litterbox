import React, { useContext } from "react";
import { SrcContext } from "./SrcContext";
import {ContextInterface} from "./ContextInterface";

const ContextConsumer = (props: any) => {
    const obj = useContext<ContextInterface>(SrcContext);
    debugger;
    return <div> I am inside the provider {obj.state.src}.
    <p>  <button onClick={obj.DecrementIndex}>Decrement</button> &nbsp;
    <button onClick={obj.IncrementIndex}>Increment</button>
        </p>
    </div>
};


export default ContextConsumer;