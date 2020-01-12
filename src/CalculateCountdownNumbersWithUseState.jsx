import React, { useState } from "react";
import { CalculateCountdownNumbers } from "./CountdownMessage/CalculateCountdownNumbers";

const endDate = new Date(2024, 11, 25, 14, 45, 36);

const CalculateCountdownNumbersWithUseState = () => {
  //this line of code runs n times where n sort of doubles every second
  console.log("running my functional component...")
  const [cc, setCurrentCountdown] = useState(() => {
    console.log("setting state...")
    //and this only runs once.... ?
    CalculateCountdownNumbers(new Date(), endDate);
  });

  const timer = window.setInterval(() => {
    setCurrentCountdown(
      CalculateCountdownNumbers(new Date(), endDate)
    );
  }, 1000);

  return (
      !cc ? <div></div> :  
    <div>{`${cc.yearsLeft} years ${cc.monthsLeft} months ${cc.daysLeft} days ${cc.hoursLeft} hours ${cc.minutesLeft} minutes ${cc.secondsLeft} seconds till...`}</div>
  );
};

export default CalculateCountdownNumbersWithUseState;
