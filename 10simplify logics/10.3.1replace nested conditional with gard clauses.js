// “这两类条件表达式有不同的用途，这一点应该通过代码表现出来。如果两条分支都是正常行为，就应该使用形如if...else...的条件表达式；
// 如果某个条件极其罕见，就应该单独检查该条件，并在该条件为真时立刻从函数中返回。这样的单独检查常常被称为“卫语句”（guard clauses）。”

function payAmount(employee) {
    let result;
    if(employee.isSeparated) {
        result = {amount: 0, reasonCode:"SEP"};
    }
    else {
        if (employee.isRetired) {
            result = {amount: 0, reasonCode: "RET"};
        }
        else {
            // logic to compute amount
            lorem.ipsum(dolor.sitAmet);1
            consectetur(adipiscing).elit();
            sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
            ut.enim.ad(minim.veniam);
            result = someFinalComputation();
        }
    }
    return result;
}

function payAmount(employee) {
    let result;
    if (employee.isSeparated) return {amount: 0, reasonCode: "SEP"};
    if (employee.isRetired)   return {amount: 0, reasonCode: "RET"};
    // logic to compute amount
    lorem.ipsum(dolor.sitAmet);
    consectetur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minim.veniam);
    return someFinalComputation();
}

