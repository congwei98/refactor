// “一种常见的重复代码是这种情况：一个数据结构的使用者都在检查某个特殊的值，并且当这个特殊值出现时所做的处理也都相同。
// 如果我发现代码库中有多处以同样方式应对同一个特殊值，我就会想要把这个处理逻辑收拢到一处。”

const aCustomer = site.customer;
// ... lots of intervening code ...
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

const plan = (aCustomer === "unknown") ?
    registry.billingPlans.basic
    : aCustomer.billingPlan;

if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;

const weeksDelinquent = (aCustomer === "unknown") ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;

class Customer {
    get isUnknown(){
        return false
    }
}
class UnknownCustomer {
    get isUnknown(){
        return true
    }
}

function isUnknown(arg) {
    if (!((arg instanceof Customer) || (arg === "unknown")))
        throw new Error(`investigate bad value: <${arg}>`);
    return (arg === "unknown");
}