// “在隐藏委托关系（189）的“动机”一节中，我谈到了“封装受托对象”的好处。
// 但是这层封装也是有代价的。每当客户端要使用受托类的新特性时，你就必须在服务端添加一个简单委托函数。
// 随着受托类的特性（功能）越来越多，更多的转发函数就会使人烦躁。服务类完全变成了一个中间人（81），
// 此时就应该让客户直接调用受托类。”
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    set department(arg) {
        this._department = arg;
    }
}

class Department {
    get chargeCode() {
        return this._chargeCode;
    }

    set chargeCode(arg) {
        this._chargeCode = arg;
    }

    get manager() {
        return this._manager;
    }

    set manager(arg) {
        this._manager = arg;
    }
}

aPerson = new Person()
// manager = aPerson.department.manager
manager = aPerson.department.manager
