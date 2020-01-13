import { Term } from "./polynomialLL";

describe("Polynomial Terms", () => {
  const squaredTerm = new Term(9, 2, null);
  squaredTerm.next = new Term(3, 1, null);

  it("should set properties right", () => {
    expect(squaredTerm.coefficient).toEqual(9);
    expect(squaredTerm.power).toEqual(2);
  });
});
