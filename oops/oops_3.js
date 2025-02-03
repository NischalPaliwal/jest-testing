// inheritance
class Parent {
    static noOfInstances = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Parent.noOfInstances++;
    }

    logParent = () => {
        console.log(`Name of this parent is ${this.name}.`);
    }
}

class Child extends Parent {
    constructor(name, age, father) {
        super(name, age);
        this.father = father;
    }

    logChild = () => {
        console.log(`Name of the child of ${this.father} is ${this.name}.`);
    }
}

const parent = new Parent("Saransh Lodha", 21);
const child = new Child("Saksham", 18, "Saransh Lodha");

parent.logParent();
child.logChild();

console.log(child instanceof Parent);
console.log(parent instanceof Child);

console.log(Parent.noOfInstances);