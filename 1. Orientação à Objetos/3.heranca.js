class Person {
    //propriedades
    age = 0;
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} say hi`)
    }
}


// nova classe student que herda os atributos de person
class Student extends Person {

    constructor(name, id) {
        super(name);
        this.id = id;
    }
}

let studant1 = new Student("Bernardo", 2);
studant1.age = 20;

console.log(`${studant1.name} have ${studant1.age} years old. His id is ${studant1.id}`);

studant1.sayHi();