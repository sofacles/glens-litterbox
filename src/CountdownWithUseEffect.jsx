import React, { useState, useEffect } from "react";
import CountdownMessage from "./CountdownMessage/CountdownMessage";

const CountdownWithUseEffect = () => {
  const [expDate, setExpDate] = useState(new Date());

  const [cc, setCC] = useState(null);
  console.log("inside my component");

  useEffect(() => {
    console.log("at the top of useEffect")
    let expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    setExpDate(expirationDate);

    const timer = window.setInterval(() => {
      setCC(CountdownMessage(expirationDate));
    }, 1000);

    return () => {
      clearInterval(timer);
    };

  }, []);

 
  return !cc ? (
    <div></div>
  ) : (
    <div>{`${cc.yearsLeft} years ${cc.monthsLeft} months ${cc.daysLeft} days ${cc.hoursLeft} hours ${cc.minutesLeft} minutes ${cc.secondsLeft} seconds till...`}</div>
  );
};

export default CountdownWithUseEffect;
