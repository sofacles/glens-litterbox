import { CalculateCountdownNumbers } from "./CalculateCountdownNumbers";

describe("Downdown", () => {

  it("Can countdown to tommorrow", () => {
    let result = CalculateCountdownNumbers(new Date(2019, 11, 2), new Date(2019, 11, 3));
    expect(result.yearsLeft).toEqual(0);
    expect(result.monthsLeft).toEqual(0);
    expect(result.daysLeft).toEqual(1);
  
  });

  it("Can countdown to an hour from now", () => {
    let result = CalculateCountdownNumbers(new Date(2000, 6, 1, 12), new Date(2000, 6, 1, 13));
    expect(result.yearsLeft).toEqual(0);
    expect(result.monthsLeft).toEqual(0);
    expect(result.daysLeft).toEqual(0);
    expect(result.hoursLeft).toEqual(1);
    expect(result.minutesLeft).toEqual(0);
  });

  it("Can countdown hours, minutes and seconds", () => {
    let result = CalculateCountdownNumbers(new Date(2019, 11, 27, 1, 0, 0), new Date(2019, 11, 29, 5, 20, 40));
    expect(result.yearsLeft).toEqual(0);
    expect(result.monthsLeft).toEqual(0);
    expect(result.daysLeft).toEqual(2);
    expect(result.hoursLeft).toEqual(4);
    expect(result.minutesLeft).toEqual(20);
    expect(result.secondsLeft).toEqual(40);
  });

  it("Can handle 'borrowing' from the next biggest unit", () => {
    let result = CalculateCountdownNumbers(new Date(2019, 6, 27, 12, 50, 30), new Date(2024, 11, 25, 14, 45, 20));
    expect(result.yearsLeft).toEqual(5);
    expect(result.monthsLeft).toEqual(4);
    expect(result.daysLeft).toEqual(28);
    expect(result.hoursLeft).toEqual(1);
    expect(result.minutesLeft).toEqual(54);
    expect(result.secondsLeft).toEqual(50);
  });

  it("Can countdown to a day that is less than the current day next month", () => {
    let result = CalculateCountdownNumbers(new Date(2019, 0, 25, 1), new Date(2019, 1, 5, 5));
    expect(result.yearsLeft).toEqual(0);
    expect(result.monthsLeft).toEqual(0);
    expect(result.daysLeft).toEqual(11);
  });

  it("Can countdown to a day next year", () => {
    let result = CalculateCountdownNumbers(new Date(2019, 11, 21), new Date(2020, 0, 2));
    expect(result.yearsLeft).toEqual(0);
    expect(result.monthsLeft).toEqual(0);
    expect(result.daysLeft).toEqual(12);
  });

  it("Can countdown a span of less than a day into next year", () => {
    let result = CalculateCountdownNumbers(new Date(2000, 11, 31, 22, 15), new Date(2001, 0, 1, 3, 16));
    expect(result.yearsLeft).toEqual(0);
    expect(result.monthsLeft).toEqual(0);
    expect(result.daysLeft).toEqual(0);
    expect(result.hoursLeft).toEqual(5);
    expect(result.minutesLeft).toEqual(1);
  });
  
});
