class Term {
  get next() {
    return this._next;
  }

  set next(n) {
    this._next = n;
  }

  get coefficient() {
    return this._coefficient;
  }
  set coefficient(c) {
    this._coefficient = c;
  }

  get power() {
    return this._power;
  }
  set power(p) {
    this._power = p;
  }
  constructor(coEff, power, next) {
    this._coefficient = coEff;
    this._power = power;
    this._next = next;
  }

  isValid() {
      if(!(this._coefficient && this._power)) return false;
      const currentTerm = this;
      while(currentTerm.next !== null) {
          if(currentTerm.next.power > currentTerm.power) return false;
          currentTerm = currentTerm.next; //wait.  This is destructive right?
      }
  }

  times(other) {
    if(!this.isValid()) {
        return Error("this term is not valid")
    }
      if(!other) {
          return Error("other term is not valid")
      }
      // Assume terms are sorted, start with the highest ordered terms: the first ones
      let retVal = new Term(this.coefficient * other.coefficient, this.power + other.power, null );
      while(!(this.next !== null && other.next)) {
          
      }
  }
}

export { Term };
