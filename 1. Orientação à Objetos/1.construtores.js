class Person {
    //propriedades
    age = 0;
    constructor(name, age, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    //ações
    steps = 0;
    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        if (typeof newAge == 'number') {
            this.age = newAge;
        }
    }
}

let person1 = new Person("Pedro", 22, "Gonçalves");
let person2 = new Person("Guilherme", 22, "Silva");
let person3 = new Person("José", 22, "Soarez");

console.log(`Person 1 is ${person1.name}`);
console.log(`Person 2 have a ${person2.age} years old`);

person1.takeAStep();
console.log(`Steps of the person ${person1.name}: ${person1.steps}`)
console.log(`Steps of the person ${person2.name}: ${person2.steps}`)


person3.setAge(23);
person3.setAge("jose");

console.log(`${person3.name} have a ${person2.age} years old`);



