/*
* “在重构之前，每个账户都自己维护一份利率数据，而现在我要让所有相同类型的账户共享同一个利率值。如果当前类型相同的账户确实拥有相同的利率
* ，那么这次重构就能成立，因为这不会引起可观测的行为变化。但只要存在一个特例，即同一类型的账户可能有不同的利率值，那么这样的修改就不叫重构了，
* 因为它会改变系统的可观测行为。倘若账户的数据保存在数据库中，那我就应该检查一下数据库，确保同一类型的账户都拥有与其账户类型匹配的利率值。”
*/
class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        console.assert(interestRate === this._type.interestRate)
        this._interestRate = interestRate;
    }

    get interestRate() {
        // return this._interestRate;
        return this._type.interestRate;
    }
}

class AccountType {
    get interestRate() {
        return this._interestRate;
    }

    constructor(nameString, interestRate) {
        this._name = nameString;
        this._interestRate = interestRate
    }
}
