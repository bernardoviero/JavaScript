class Person {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayInfo() {
        // está relacionado a Person (classe).
        console.log(`I am ${this.name} and i have a ${Person.hands} hands.`);
    }

    static sayHi() {
        console.log(`Hi`);
    }
}

let p1 = new Person("Pedro");
p1.sayInfo();
Person.sayHi();
