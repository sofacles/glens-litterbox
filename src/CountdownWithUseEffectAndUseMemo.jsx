import React, { useState, useEffect, useMemo } from "react";
import CountdownMessage from "./CountdownMessage/CountdownMessage";

const CountdownWithUseEffectAndUseMemo = () => {
  const [expDate, setExpDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(null);

  const [cc, setCC] = useState(null);
  console.log("inside my component");

  useMemo(() => {
    let expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    setExpDate(expirationDate);

    const timer = window.setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, [/* only run once */]);

  useMemo(() => {
    /*  
    OK, I want to update a currentTime object every second and then have a memoized? function set the 
    countdown state.
    It does work, but activityMonitor shows chrome render helper consuming 5% cpu, vs, like 1% with 
    CountdownWithUseEffect.
    */
    console.log("at the top of useMemo fxn");
    setCC(CountdownMessage(expDate));

  }, [currentDate, expDate]);

 
  return !cc ? (
    <div></div>
  ) : (
    <div>{`${cc.yearsLeft} years ${cc.monthsLeft} months ${cc.daysLeft} days ${cc.hoursLeft} hours ${cc.minutesLeft} minutes ${cc.secondsLeft} seconds till...`}</div>
  );
};

export default CountdownWithUseEffectAndUseMemo;
