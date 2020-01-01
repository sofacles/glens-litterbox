const CalculateCountdownNumbers = (countdownStartTime, countdownStopTime) => {
  const endDate = countdownStopTime;
  //I will advance this pointer by years, months, etc into  the future till I hit endDate
  let pointer = new Date(countdownStartTime.valueOf());
  const HOUR_MSEC = 60 * 60 * 1000;

  let yearsLeft = 0,
    monthsLeft = 0,
    daysLeft = 0,
    hoursLeft = 0,
    minutesLeft = 0,
    secondsLeft = 0;

  //first figure out whole years of difference
  let oneYearAfterPointer = new Date(pointer.valueOf());
  oneYearAfterPointer.setFullYear(oneYearAfterPointer.getFullYear() + 1);

  while (oneYearAfterPointer < endDate) {
    yearsLeft += 1;
    pointer.setFullYear(pointer.getFullYear() + 1);
    oneYearAfterPointer.setFullYear(oneYearAfterPointer.getFullYear() + 1);
  }

  // Now we are less than a year away from the endDate
  let oneMonthAfterPointer = new Date(pointer.valueOf());
  oneMonthAfterPointer.setMonth(oneMonthAfterPointer.getMonth() + 1);
  while (oneMonthAfterPointer < endDate) {
    monthsLeft += 1;
    oneMonthAfterPointer.setMonth(oneMonthAfterPointer.getMonth() + 1);
    pointer.setMonth(pointer.getMonth() + 1);
  }

  // Now we are less than a month away from the endDate
  let oneDayAfterPointer = new Date(pointer.valueOf());
  oneDayAfterPointer.setDate(oneDayAfterPointer.getDate() + 1);

  while (oneDayAfterPointer <= endDate) {
    daysLeft += 1;
    pointer.setDate(pointer.getDate() + 1);
    oneDayAfterPointer.setDate(oneDayAfterPointer.getDate() + 1);
  }

  // Now we are less than a day away from the endDate
  let oneHourAfterPointer = new Date(pointer.valueOf() + HOUR_MSEC);

  while (oneHourAfterPointer <= endDate) {
    hoursLeft += 1;
    pointer.setHours(pointer.getHours() + 1);
    oneHourAfterPointer = new Date(pointer.valueOf() + HOUR_MSEC);
  }

  // Now we are less than an hour away from the endDate
  const MINUTE_MSEC = 60 * 1000;
  let oneMinuteAfterPointer = new Date(pointer.valueOf() + MINUTE_MSEC);

  while (oneMinuteAfterPointer <= endDate) {
    minutesLeft += 1;
    pointer.setMinutes(pointer.getMinutes() + 1);
    oneMinuteAfterPointer = new Date(pointer.valueOf() + MINUTE_MSEC);
  }

  // Now we are less than a minute away from the endDate
  while (pointer < endDate) {
    secondsLeft += 1;
    if (pointer.getSeconds() === 59) {
      pointer.setMinutes(pointer.getMinutes() + 1);
      pointer.setSeconds(0);
    } else {
      pointer.setSeconds(pointer.getSeconds() + 1);
    }
  }

  return {
    yearsLeft,
    runningTotalDate: pointer,
    monthsLeft,
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft
  };
};

function isLastDayOfMonth(dt) {
  var test = new Date(dt.getTime()),
    month = test.getMonth();

  test.setDate(test.getDate() + 1);
  return test.getMonth() !== month;
}

export { CalculateCountdownNumbers };
