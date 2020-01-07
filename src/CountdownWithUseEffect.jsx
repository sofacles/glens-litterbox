import React, { useEffect, useRef, useState } from "react";
import { CalculateCountdownNumbers } from "./CountdownMessage/CalculateCountdownNumbers";

/**
 * When I try to useEffect for a countdown, I get an error about the value of cc being lost every time this thing
 * renders.  "To preserve this value over time" use useRef (useRef.current).
 */
const CountdownWithUseEffect = () => {
  let startTime = new Date();
  let myCountdown = CalculateCountdownNumbers(startTime);
  const [countdown, setCountdown] = useState(myCountdown);
  const countdownRef = useRef(null);
 
  useEffect(() => {
    console.log("inside useEffect");
    const timer = window.setInterval(() => {
      
      let currentTime = new Date();
      console.log("inside timer, currentTime.seconds is: " + currentTime.getSeconds());
      let newCountdown = CalculateCountdownNumbers(currentTime);
      console.log("inside timer, newCountdown.secondsLeft is: " + newCountdown.secondsLeft);
      countdownRef.current = newCountdown;
      setCountdown(newCountdown);
    }, 1000);
    //return clearInterval(timer);
    
   
  }, []);


  return (
      !countdown ? <div></div> :  
    <div>{`${countdown.yearsLeft} years ${countdown.monthsLeft} months ${countdown.daysLeft} days ${countdown.hoursLeft} hours ${countdown.minutesLeft} minutes ${countdown.secondsLeft} seconds till...`}</div>
  );
};

export default CountdownWithUseEffect;
