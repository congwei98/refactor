// “如果一个函数用同样的参数调用总是给出同样的结果，我们就说这个函数具有“引用透明性”（referential transparency），
// 这样的函数理解起来更容易。如果一个函数使用了另一个元素，而后者不具引用透明性，那么包含该元素的函数也就失去了引用透明性。
// 只要把“不具引用透明性的元素”变成参数传入，函数就能重获引用透明性。虽然这样就把责任转移给了函数的调用者，但是具有引用透明性的模块能带来很多益处。
// 有一个常见的模式：在负责逻辑处理的模块中只有纯函数，其外再包裹处理I/O和其他可变元素的逻辑代码。
// 借助以参数取代查询，我可以提纯程序的某些组成部分，使其更容易测试、更容易理解。

get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
}

if    (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if(thePlan.targetTemperature<thermostat.currentTemperature)setToCool();
else setOff();

get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    if      (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
}

get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    return this.xxNEWtargetTemperature(selectedTemperature);
}

xxNEWtargetTemperature(selectedTemperature) {
    if      (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
}

get targetTemperature() {
    return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
}

// “但是，去除对thermostat对象的耦合，并不是本重构带来的唯一收益。HeatingPlan类本身是不可变的——字段的值都在构造函数中设置，
// 任何函数都不会修改它们。（不用费心去查看整个类的代码，相信我就好。）
// 在不可变的HeatingPlan基础上，把对thermostat的依赖移出函数体之后，我又使targetTemperature函数具备了引用透明性。
// 从此以后，只要在同一个HeatingPlan对象上用同样的参数调用targetTemperature函数，我会始终得到同样的结果。
// 如果HeatingPlan的所有函数都具有引用透明性，这个类会更容易测试，其行为也更容易理解。”
