import React, { useRef, useState } from "react";
import { CalculateCountdownNumbers } from "./CountdownMessage/CalculateCountdownNumbers";

/**
 * When I try to useEffect for a countdown, I get an error about the value of cc being lost every time this thing
 * renders.  "To preserve this value over time" use useRef (useRef.current).
 */
const CountdownWithUseRef = () => {
  let currentDate = new Date();
  let something = useRef(currentDate);
  let [cc, setCC] = useState(CalculateCountdownNumbers(new Date(), new Date(2024, 11, 25, 14, 45, 36)));
  console.log("inside my component")

  const timer = window.setInterval(() => {
    something.current = new Date();
    //debugger;
    console.log("insdie th timer")
    setCC( CalculateCountdownNumbers(something.current, new Date(2024, 11, 25, 14, 45, 36)));
  }, 1000);

  return (
      !cc ? <div></div> :  
    <div>{`${cc.yearsLeft} years ${cc.monthsLeft} months ${cc.daysLeft} days ${cc.hoursLeft} hours ${cc.minutesLeft} minutes ${cc.secondsLeft} seconds till...`}</div>
  );
};

export default CountdownWithUseRef;
