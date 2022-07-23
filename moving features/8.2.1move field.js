class Customer {
    _name;
    _contract;

    constructor(name, discountRate) {
        this._name = name;
        this.discountRate(discountRate);
        this._contract = new CustomerContract(dateToday());
    }

    get discountRate() {
        return this._contract.discountRate;
    }

    set discountRate(value) {
        this._contract.discountRate(value)
    }

    becomePreferred() {
        this.discountRate(this.discountRate += 0.03)
        // other nice things
    }

    applyDiscount(amount) {
        return amount.subtract(amount.multiply(this.discountRate));
    }
}

class CustomerContract {
    _startDate;
    _discountRate;


    get discountRate() {
        return this._discountRate;
    }

    set discountRate(value) {
        this._discountRate = value;
    }

    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }
}
