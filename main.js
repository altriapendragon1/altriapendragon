'use strict';
 class Person {
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
     //将person作为一个类，然后在这个类里面构建了一个函数，函数的参数是name，age
     //然后将name和age分别赋值给this.name和this.age

     basicIntroduce() {
         return `My name is ${this.name}. I am ${this.age} years old.`;
     }
 }

 class Student extends Person {
     constructor(name, age, klass) {
         super(name, age);
         this.klass = klass;//赋予一个新的属性：klass
     }


    introduce() {
     return(super.basicIntroduce()+` I am a Student.I am at Class ${this.klass}.`);
    }
 }
 class Worker extends Person {
     constructor(name, age,) {
         super(name, age);  //super是调用函数的意思
     }

     introduce() {
         return(super.basicIntroduce() + ` I am a Student. I have a job.`);
     }
 }












