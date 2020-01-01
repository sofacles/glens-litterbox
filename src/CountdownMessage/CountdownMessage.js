import CalculateCountdownNumbers from "./CalculateCountdownNumbers";

const CountdownMessage = (countdownStopDate) => {
    const helper =  CalculateCountdownNumbers(new Date, countdownStopDate);
    return helper();
}

export default CountdownMessage;