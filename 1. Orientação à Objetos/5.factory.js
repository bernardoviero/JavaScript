class Person {
    age = 0;
    constructor(name) {
        this.name = name;
    }
}

// conceito de factory
// função de criar pessoas.
function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}


let p1 = createPerson('Bernardo', 14);

console.log(p1);