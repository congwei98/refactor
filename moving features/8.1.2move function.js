class Account {
    get daysOverdrawn() {
        return this._daysOverdrawn;
    }
    type = new AccountType();
    _daysOverdrawn;
    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge(this._daysOverdrawn);
        return result;
    }
    overdraftCharge() {
        return this.type.overdraftCharge(this)
    }
}

class AccountType {
    isPremium;
    overdraftCharge(account) {
        if (this.isPremium) {
            const baseCharge = 10;
            if (account.daysOverdrawn <= 7)
                return baseCharge;
            else
                return baseCharge + (account.daysOverdrawn - 7) * 0.85;
        } else
            return account.daysOverdrawn * 1.75;
    }
}
