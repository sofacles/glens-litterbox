import React from "react";
import RatingStar from "./RatingStar";


const RatedItem = ({rating, text, onRatingChange}) => {

    const handleNewRating = (stars) => {
        onRatingChange(stars, text);
    }
    console.log(`start of rendering for ${text}.  Rating is ${rating}`);
    const stars = [];
    for(var i=1; i<=5; i++) {
        stars.push(<RatingStar onRate={handleNewRating} key={i} n={i} on={i <= rating} />)
    }
    return <div>
       {text} {stars}
    </div>
}

export { RatedItem }