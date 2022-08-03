// “命令对象为处理复杂计算提供了强大的机制。借助命令对象，可以轻松地将原本复杂的函数拆解为多个方法，彼此之间通过字段共享状态；
// 拆解后的方法可以分别调用；开始调用之前的数据状态也可以逐步构建。但这种强大是有代价的。”
class ChargeCalculator {
    constructor (customer, usage, provider){
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }
    get baseCharge() {
        return this._customer.baseRate * this._usage;
    }
    get charge() {
        return this.baseCharge + this._provider.connectionCharge;
    }
}

monthCharge = new ChargeCalculator(customer, usage, provider).charge;

monthCharge = charge(customer, usage, provider);

function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, usage, provider).charge;
}

get charge() {
    const baseCharge = this._customer.baseRate * this._usage;
    return baseCharge + this._provider.connectionCharge;
}

charge(customer, usage, provider) {
    const baseCharge = this._customer.baseRate * this._usage;
    return baseCharge + this._provider.connectionCharge;
}

function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, usage, provider)
        .charge(customer, usage, provider);
}

function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
}

// “现在我就可以把所有逻辑都内联到顶层的charge函数中。这是内联函数（115）的一种特殊情况，我需要把构造函数和执行函数一并内联。”
