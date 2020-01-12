import React, { useEffect, useRef, useState } from "react";

/**
 * When I try to useEffect for a countdown, I get an error about the value of cc being lost every time this thing
 * renders.  "To preserve this value over time" use useRef (useRef.current).
 wereturnit.com is apparently where you might find your phone after you leave it on a plane.
 I was on Aer Lingus flight EI651 on Jan 9, 2020 from Frankfurt to Dublin and I lost my Galaxy S5.  It has a floral 
 pattern on the back, little blue flowers, in what I believe might be called a "brocade". 
 
 */
const CounterWithUseEffect = () => {
  
  const [countdown, setCountdown] = useState({count: 0});
  const countdownRef = useRef({count: 0});
 
  useEffect(() => {
    
    const timer = window.setInterval(() => {
      console.log("inside timer");
      
      setCountdown(cr => {
        return {
              ...cr,
              count: cr.count + 1
            }
      });
    }, 1000);
    return () => clearInterval(timer);
    
   
  }, []);


  return (
      !countdown ? <div></div> :  
    <div>{countdown.count}</div>
  );
};

export default CounterWithUseEffect;
