export default class LinkedListOfPolynomials {
    /*
        Each node looks like { pow: 2, coef: 8}
    */
    constructor(arrPolys) {
       if(!arrPolys || arrPolys.length == 0) throw new Error("please provide some polynomials when constructing a LinkedListPolynomial");

       this.head = {
           pow: arrPolys[0].pow,
           coef: arrPolys[0].coef,
           next: null
       }

       let ptr = this.head;
       arrPolys.slice(1).forEach(p => {
           ptr.next = {
            pow: p.pow,
            coef: p.coef,
            next: null
           };
           ptr = ptr.next
       })
    }

    print() {
        let retVal;
        let ptr = this.head;
        while(ptr !== null) {
            retVal += `${ptr.coef} x to the ${ptr.pow} -> `;
        }

        return retVal;
    }
}

const printLinkedList = (node) => {
    let retVal = "";
    let ptr = node
    while(ptr !== null) {
        retVal += `${ptr.coef} x to the ${ptr.pow} -> `;
        ptr = ptr.next;
    }

    return retVal;
}

export { printLinkedList}