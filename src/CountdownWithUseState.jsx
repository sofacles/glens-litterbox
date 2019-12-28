import React from "react";
import CountdownMessageHelper from "./CountdownMessage/CountdownMessage";


const CountdownWithUseState = () => {
   let { 
       yearsLeft,
        months = 1,
        daysLeft
   } = CountdownMessageHelper(new Date(2019, 11, 27, 1), new Date(2019, 11, 29, 5));
   
   
   
    return <div>{`${yearsLeft} years ${months} months ${daysLeft}`} days till Chrismas 2024.</div>
};

export default CountdownWithUseState;