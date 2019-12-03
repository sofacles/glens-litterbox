import React, {useContext} from "react";
import {SrcContext} from "./SrcContext"

const ContextConsumer = (props) => {
    const [state, Increment, Decrement] = useContext(SrcContext);
    return <div> I am inside the provider {state.src}. 
    <p>  <button onClick={Decrement}>Decrement</button> &nbsp;  <button onClick={Increment}>Increment</button></p></div>
};


export default ContextConsumer;