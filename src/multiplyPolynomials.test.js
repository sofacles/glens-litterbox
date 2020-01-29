import { MultiplyPolynomials } from "./multiplyPolynomials";
import  LinkedListOfPolynomials, {printLinkedList}  from "./LinkedListOfPolynomials"

describe("Polynomial Terms", () => {
  

  it("can multiply two one node lists", () => {
    const left = new LinkedListOfPolynomials([{pow: 0, coef: 4}]);
    const right = new LinkedListOfPolynomials([{pow: 0, coef: 5}]);

    let result = MultiplyPolynomials(left, right);
    expect(printLinkedList(result)).toEqual( `${20} x to the ${0} -> `);

  });

  it("can multiply a one node by a two node list", () => {
    const left = new LinkedListOfPolynomials([{pow: 0, coef: 4}]);
    const right = new LinkedListOfPolynomials([{pow: 1, coef: 1}, {pow: 0, coef: 5}]);

    let result = MultiplyPolynomials(left, right);
    expect(printLinkedList(result)).toEqual( `${4} x to the ${1} -> ${20} x to the ${0} -> `);

  });

  it("can multiply two two-node lists", () => {
    const left = new LinkedListOfPolynomials([{pow: 1, coef: 4}, {pow: 0, coef: 5}]);
    const right = new LinkedListOfPolynomials([{pow: 1, coef: 9}, {pow: 0, coef: 3}]);

    let result = MultiplyPolynomials(left, right);
    expect(printLinkedList(result)).toEqual( `${36} x to the 2 -> 57 x to the 1 -> 15 x to the ${0} -> `);

  });

});
