const martin = new Person();
martin.name = "martin";
martin.id = "1234";

class Person {
    constructor(id) {
        this.id = id
    }
}
const martin = new Person("1234");
martin.name = "martin";

