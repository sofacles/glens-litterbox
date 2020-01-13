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
   
}

export { Term };