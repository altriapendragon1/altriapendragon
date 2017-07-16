'use strict';

class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
class Class {
    constructor(number) {
        this.number = number;
    }
    assignLeader(student) {
        if (student.klass.number == this.number) {
            this.leader = 1;
            return ''; //成功，返回空字符串
        } else {
            this.leader = 0;
            return 'It is not one of us. ';
        }
    }
    appendMember(student) { //加入班级说明班级号相等
        student.klass.number = this.number;
    }
}

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age); ///写在第一行
        this.klass = klass;
    }
    introduce() {
        if (this.klass.leader == 1) {
            return `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
        } else {
            return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        }
    }
}
class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }
    introduce() {
        if (this.klass == undefined) {
            return `${super.introduce()} I am a Teacher. I teach No Class.`;

        } else {
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`;
        }
    }
}











