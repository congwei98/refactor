// “从一个对象中抽取出几个值，单独对这几个值做某些逻辑操作，这是一种代码坏味道（依恋情结），通常标志着这段逻辑应该被搬移到对象中。
// 保持对象完整经常发生在引入参数对象（140）之后，我会搜寻使用原来的数据泥团的代码，代之以使用新的对象。”

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high))
    alerts.push("room temperature went outside range");

withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
}

xxNNEWwithinRange(){

}
