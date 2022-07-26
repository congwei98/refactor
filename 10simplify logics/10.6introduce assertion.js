applyDiscount(aNumber) {
    return (this.discountRate)
        ? aNumber - (this.discountRate * aNumber)
        : aNumber;
}

applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else return aNumber - (this.discountRate * aNumber);
}

applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else {
        assert(this.discountRate >= 0);
        return aNumber - (this.discountRate * aNumber);
    }
}

// “注意，不要滥用断言。我不会使用断言来检查所有“我认为应该为真”的条件，只用来检查“必须为真”的条件。”
