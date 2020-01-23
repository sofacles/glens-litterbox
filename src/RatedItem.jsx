import React from "react";
import RatingStar from "./RatingStar";

const RatedItem = ({rating, text}) => {
    const stars = [];
    for(var i=0; i<5; i++) {
        stars.push(<RatingStar key={i} on={i < rating} />)
    }
    return <div>
       {text} {stars}
    </div>
}

export { RatedItem }