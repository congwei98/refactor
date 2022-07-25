/*
如果现有的类尚不具备多态行为，就用工厂函数创建之，令工厂函数返回恰当的对象实例。
在调用方代码中使用工厂函数获得对象实例。
将带有条件逻辑的函数移到超类中。
任选一个子类，在其中建立一个函数，使之覆写超类中容纳条件表达式的那个函数。将与该子类相关的条件表达式分支复制到新函数中，并对它进行适当调整。
重复上述过程，处理其他条件分支。
在超类函数中保留默认情况的逻辑。或者，如果超类应该是抽象的，就把该函数声明为abstract，或在其中直接抛出异常，表明计算责任都在子类中。
*/

function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return "average";
        case 'AfricanSwallow':
            return (bird.numberOfCoconuts > 2) ? "tired" : "average";
        case 'NorwegianBlueParrot':
            return (bird.voltage > 100) ? "scorched" : "beautiful";
        default:
            return "unknown";
    }
}

function airSpeedVelocity(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return 35;
        case 'AfricanSwallow':
            return 40 - 2 * bird.numberOfCoconuts;
        case 'NorwegianBlueParrot':
            return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
        default:
            return null;
    }
}

function plumage(bird) {
    return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {
    return new Bird(bird).airSpeedVelocity;
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        // switch (this.type) {
        //     case 'EuropeanSwallow':
        //         return "average";
        //     case 'AfricanSwallow':
        //         return (this.numberOfCoconuts > 2) ? "tired" : "average";
        //     case 'NorwegianBlueParrot':
        //         return (this.voltage > 100) ? "scorched" : "beautiful";
        //     default:
        //         return "unknown";
        // }
        return "unknown"
    }

    get airSpeedVelocity() {
        switch (this.type) {
            case 'EuropeanSwallow':
                return 35;
            case 'AfricanSwallow':
                return 40 - 2 * this.numberOfCoconuts;
            case 'NorwegianBlueParrot':
                return (this.isNailed) ? 0 : 10 + this.voltage / 10;
            default:
                return null;
        }
    }
}

function plumage(bird) {
    return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        case 'NorweigianBlueParrot':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "average";
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? "tired" : "average";
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }
}

