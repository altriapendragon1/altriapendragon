/**
 * Created by root on 7/14/17.
 */
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "My name is " + this.name + ". I am "+ this.age + " years old."
    }
    basicIntroduce(){
        return "My name is Tom. I am 21 years old.";
    }

}
class Student extends Person{
    constructor(name,age,klass){
        super (name,age);
        this.klass = klass;
    }
    basicIntroduce(){
        return super.basicIntroduce();
    }
    introduce(){
        return "My name is " + this.name + ". I am "+ this.age + " years old. I am a Student. I am at Class " + this.klass + "."
    }

}
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    basicIntroduce(){
        return super.basicIntroduce();
    }
    introduce(){
        return  "My name is " + this.name + ". I am "+ this.age + " years old. I am a Worker. I have a job.";
    }

}


module.exports = {
    Person,
    Student,
    Worker
};