import React, {useContext} from "react";

interface props {
    src: string
}

const Carousel = (props: props) => {
    const a = props;
    debugger;
    return <div className="stage"> 
    <img alt="what should I put in here, the alt text is going to vary with the i.m.g." src={props.src} /></div>
};

export default Carousel;