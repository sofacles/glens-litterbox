import React from "react";
import CountdownMessageHelper from "./CountdownMessage/CountdownMessageHelper";


const CountdownWithUseState = () => {
   let { 
       yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
   } = CountdownMessageHelper(new Date(2000, 11, 31, 22, 15), new Date(2001, 0, 1, 3, 16));
   
   // 
   
    return <div>{`${yearsLeft} years ${monthsLeft} months ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds till...`}</div>
};

export default CountdownWithUseState;