import CalculateCountdownNumbers from "./CountdownMessageHelper";

const CountdownMessage = (countdownStopDate) => {
    const helper =  CalculateCountdownNumbers(new Date, countdownStopDate);
    return helper();
}

export default CountdownMessage;