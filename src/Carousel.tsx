import React from "react";

interface props {
    src: string
}

const Carousel = (props: props) => {
    return <div className="stage"> 
    <img alt="what should I put in here, the alt text is going to vary with the i.m.g." src={props.src} /></div>
};

export default Carousel;