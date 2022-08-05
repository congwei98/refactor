// “但继承也有其短板。最明显的是，继承这张牌只能打一次。导致行为不同的原因可能有多种，但继承只能用于处理一个方向上的变化。
// 比如说，我可能希望“人”的行为根据“年龄段”不同，并且根据“收入水平”不同。使用继承的话，子类可以是“年轻人”和“老人”，
// 也可以是“富人”和“穷人”，但不能同时采用两种继承方式。

// “更大的问题在于，继承给类之间引入了非常紧密的关系。在超类上做任何修改，都很可能破坏子类，所以我必须非常小心，并且充分理解子类如何从超类派生。
// 如果两个类的逻辑分处不同的模块、由不同的团队负责，问题就会更麻烦。”

class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    // get hasTalkback() {
    //     return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    // }

    get hasTalkback() {
        return (this._premiumDelegate)
            ? this._premiumDelegate.hasTalkback
            : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }

    // get basePrice() {
    //     let result = this._show.price;
    //     if (this.isPeakDay) result += Math.round(result * 0.15);
    //     return result;
    // }

    get basePrice() {
        return (this._premiumDelegate)
            ? this._premiumDelegate.basePrice
            : this._privateBasePrice;
    }

    get _privateBasePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }

    set _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }

    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this._host.isPeakDay;
    }
}

class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }

    // get hasTalkback() {
    //     return this._premiumDelegate.hasTalkback
    // }

    // get basePrice() {
    //     return Math.round(super.basePrice + this._extras.premiumFee);
    // }

    // get hasDinner() {
    //     return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
    // }
}


function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    return new PremiumBooking(show, date, extras);
}

aBooking = createBooking(show, date);
aBooking = createPremiumBooking(show, date, extras);

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }

    get hasTalkback() {
        return this._host._show.hasOwnProperty('talkback');
    }

    get basePrice() {
        return Math.round(this._host._privateBasePrice + this._extras.premiumFee);
    }

}
