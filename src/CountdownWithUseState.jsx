import React, { useState, useEffect } from "react";
import CountdownMessage from "./CountdownMessage/CountdownMessage";

const CountdownWithUseState = () => {
  const [expDate, setExpDate] = useState(null);

  const [cc, setCC] = useState(null);

  let expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);
  /**
   * Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
   *  You set state, which causes a rerender, which sets state again...
   */
  setExpDate(expirationDate);

  const timer = window.setInterval(() => {
    setCC(CountdownMessage(expDate));
  }, 1000);

  return !cc ? (
    <div></div>
  ) : (
    <div>{`${cc.yearsLeft} years ${cc.monthsLeft} months ${cc.daysLeft} days ${cc.hoursLeft} hours ${cc.minutesLeft} minutes ${cc.secondsLeft} seconds till...`}</div>
  );
};

export default CountdownWithUseState;
