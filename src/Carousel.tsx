import React, {useContext} from "react";
import {SrcContext} from "./SrcContext"
import { ContextInterface } from "./ContextInterface";

interface props {
    src: string
}

const Carousel = (props: props) => {
    const obj = useContext<ContextInterface>(SrcContext);
    return <div className="stage"> 
    <img alt="what should I put in here, the alt text is going to vary with the i.m.g." src={obj.state.src} /></div>
};

export default Carousel;