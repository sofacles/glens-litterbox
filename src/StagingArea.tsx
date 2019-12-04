import React, {useContext} from "react";
import {SrcContext} from "./SrcContext"

const StagingArea = () => {
    const {state} = useContext(SrcContext)
    debugger;
    return <div className="stage"> 
    <img alt="what should I put in here, the alt text is going to vary with the i.m.g." src={state.src} /></div>
};

export default StagingArea;