import React, { useState } from "react";
import { CalculateCountdownNumbers } from "./CountdownMessage/CalculateCountdownNumbers";

const CountdownWithUseState = () => {
  const [cc, setCurrentCountdown] = useState(() => {
    CalculateCountdownNumbers(new Date(), new Date(2024, 11, 25, 14, 45, 36));
  });

  const timer = window.setInterval(() => {
    setCurrentCountdown(
      CalculateCountdownNumbers(new Date(), new Date(2024, 11, 25, 14, 45, 36))
    );
  }, 1000);

  return (
      !cc ? <div></div> :  
    <div>{`${cc.yearsLeft} years ${cc.monthsLeft} months ${cc.daysLeft} days ${cc.hoursLeft} hours ${cc.minutesLeft} minutes ${cc.secondsLeft} seconds till...`}</div>
  );
};

export default CountdownWithUseState;
