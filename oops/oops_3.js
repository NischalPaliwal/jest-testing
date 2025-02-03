// inheritance
class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

class Child extends Parent {
    constructor(name, age, father) {
        super(name, age);
        this.father = father;
    }
}