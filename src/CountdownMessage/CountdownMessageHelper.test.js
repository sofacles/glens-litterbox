import CountDownMessageHelper from "./CountdownMessageHelper";

describe("Downdown", () => {
  it("Can countdown Christmas 2024", () => {
    let result = CountDownMessageHelper(new Date(2019, 11, 27, 1), new Date(2019, 11, 29, 5));
    expect(result.yearsLeft).toEqual(5);
    expect(result.months).toEqual(0);
    expect(result.daysLeft).toEqual(2);
  
  });
});
