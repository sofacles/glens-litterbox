import CountdownMessageHelper from "./CountdownMessageHelper";

const CountdownMessage = (countdownStopDate) => {
    const helper =  CountdownMessageHelper(new Date, countdownStopDate);
    return helper();
}

export default CountdownMessage;