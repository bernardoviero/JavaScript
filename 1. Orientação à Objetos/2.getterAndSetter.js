class Person {
    //propriedades
    _age = 10;
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    //ações
    steps = 0;
    takeAStep() {
        this.steps++;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age == 'number') {
            this._age = age;
        }
    }

    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
}

let p1 = new Person("Pedro", "Braga");
p1.age = 16;
p1.age = 'abcd';

console.log(`${p1.fullName} have ${p1.age} years old`);



