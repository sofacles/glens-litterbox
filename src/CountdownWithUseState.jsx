import React from "react";
import { CalculateCountdownNumbers } from "./CountdownMessage/CountdownMessageHelper";


const CountdownWithUseState = () => {
   let { 
       yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
   } = CalculateCountdownNumbers(new Date(2019, 6, 27, 12, 50, 30), new Date(2024, 11, 25, 14, 45, 36));
   
   
   
    return <div>{`${yearsLeft} years ${monthsLeft} months ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds till...`}</div>
};

export default CountdownWithUseState;