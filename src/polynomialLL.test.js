import { Term } from "./polynomialLL";

describe("Polynomial Terms", () => {
  

  it("should set properties right", () => {
    const squaredTerm = new Term(9, 2, null);
    squaredTerm.next = new Term(3, 1, null);
    expect(squaredTerm.coefficient).toEqual(9);
    expect(squaredTerm.power).toEqual(2);
  });

  it("can be multiplied by another term", () => {
    let xSquared = new Term(1, 2, null);
    let anotherXSquared = new Term(1, 2, null);
  });
});
