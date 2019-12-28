const CountDownMessageHelper = (countdownStartTime, countdownStopTime) => {
  const endDate = countdownStopTime;
  let rightNow = countdownStartTime;
  const DAY_MSEC = 1000 * 60 * 60 * 24;
  const YEAR_MSEC = DAY_MSEC * 365;
  debugger;
  let timeDiff = endDate - rightNow;
  
  //first figure out whole years of difference
  let yearsLeft = Math.floor(timeDiff / YEAR_MSEC);
  // Move the running total back in time as you nibble away the parts of the date
  let runningTotal = timeDiff - yearsLeft * YEAR_MSEC; //just a number
  let runningTotalDate = new Date(runningTotal);
  runningTotalDate.setFullYear(endDate.getFullYear() - yearsLeft);

  // So, I can't just say months are 30 days long, I need to get the month of rightNow
  // and see if it is greater than the month of endDate

  let months;

  if (endDate.getMonth() < rightNow.getMonth()) {
    months = endDate.getMonth() - rightNow.getMonth();
  } else {
    months = 11 - endDate.getMonth() + rightNow.getMonth() + 1;
  }
  runningTotalDate.setMonths(months);
  let daysLeft = Math.floor(runningTotal / DAY_MSEC);

  return {
    yearsLeft,
    runningTotalDate,
    months,
    daysLeft
  };
};

export default CountDownMessageHelper;
