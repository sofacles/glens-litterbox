import React, { useState, useMemo } from "react";
import CountdownMessage from "./CountdownMessage/CountdownMessage";

const CountdownWithUseMemo = () => {
  const [expDate, setExpDate] = useState(new Date());
  const [cc, setCC] = useState(null);
  console.log("inside my component");

  useMemo(() => {
    /**
     * Yes, you can use useMemo too.  I thought I might be able to have some date object that I update, 
     * but the tricky art is where to put the declaration and setting up of that timer.  You have to avoid 
     * running that code every time the state changes.  
     */
    console.log("I only run once, just like in the useEffect version, because of the empty dependency array");
    let expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    setExpDate(expirationDate);

    const timer = window.setInterval(() => {
      setCC(CountdownMessage(expirationDate));
    }, 1000);
  }, []);

  return !cc ? (
    <div></div>
  ) : (
    <div>{`${cc.yearsLeft} years ${cc.monthsLeft} months ${cc.daysLeft} days ${cc.hoursLeft} hours ${cc.minutesLeft} minutes ${cc.secondsLeft} seconds till...`}</div>
  );
};

export default CountdownWithUseMemo;
