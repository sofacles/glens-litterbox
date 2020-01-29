import LinkedListOfPolynomials from "./LinkedListOfPolynomials"

const MultiplyPolynomials = (list1, list2) => {
    let MaxCoefficient = list1.head.pow + list2.head.pow;
    //If both polynomials have a max power of zero, we still need someplace to put the units
    let coefficientsByPower = new Array(MaxCoefficient + 1).fill(0);
    let ptr1 = list1.head;
    let ptr2 = list2.head;
    while(ptr1 !== null){
        ptr2 = list2.head;
        while(ptr2 !== null) {
            let power = ptr1.pow + ptr2.pow;
            coefficientsByPower[power] += ptr1.coef * ptr2.coef;
            ptr2 = ptr2.next;
        }
        ptr1 = ptr1.next;
    }

    //If we have, say, 3 items in our coefficientsByPower then our highest order term is x squared
    let currentExponent = coefficientsByPower.length - 1;
    
    //head of the list starts reading from the END of the coefficientsByPower array, because the highest order term is at the end
    let head = {
        pow: currentExponent,
        coef: coefficientsByPower[currentExponent],
        next: null
    }

    let ptr = head;

  while (currentExponent > 0) {
        currentExponent--;
        if(coefficientsByPower[currentExponent] !== 0) {
            //this power has a non-zero coefficient, need to add it to the linkedlist
            ptr.next = {
                pow: currentExponent,
                coef: coefficientsByPower[currentExponent],
                next: null
            };
            ptr = ptr.next;
        }
   }

   return head;
}

export { MultiplyPolynomials }