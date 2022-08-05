class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        // this._type = type;
    }

    validateType(arg) {
        if (!["engineer", "manager", "salesman"].includes(arg))
            throw new Error(`Employee cannot be of type ${arg}`);
    }


    // get type() {
    //     return this._type;
    // }

    toString() {
        return `${this._name} (${this.type})`;
    }
}

class Engineer extends Employee {
    get type() {return "engineer";}
}

function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name, type);
    }
    return new Employee(name, type);
}

class Salesman extends Employee {
    get type() {return "salesman";}
}

class Manager extends Employee {
    get type() {return "manager";}
}

function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name, type);
        case "salesman": return new Salesman(name, type);
        case "manager":  return new Manager (name, type);
    }
    return new Employee(name, type);
}

function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name);
        case "salesman": return new Salesman(name);
        case "manager":  return new Manager (name);
    }
    // return new Employee(name);
}

