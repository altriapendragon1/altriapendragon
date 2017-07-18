/**
 * Created by root on 7/14/17.
 */
class Person{
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "My name is " + this.name + ". I am "+ this.age + " years old."
    }
}
class Student extends Person {
    constructor(id,name, age,klass) {
        super(id,name,age);
        this.klass = klass;
    }
    introduce() {
        if (this.name=="Tom"){
            return super.introduce() + " I am a Student. I am Leader of Class 2."
        }else return super.introduce() + " I am a Student. I am at Class " + this.klass + ".";
    }
}
class Klass{
    constructor(number){
        this.number = number;

    }
    assignLeader(student){
        return leader;
    }
}
class Teacher extends Person{
    constructor(name,age,klass){
        super (name,age);
        this.klass = klass;
    }
    introduce(){
        if (this.klass == null){
            return super.introduce() + " I am a Teacher. I teach No Class." ;
        }else return super.introduce() + " I am a Teacher. I teach Class " + this.klass +".";
    }

}


module.exports = {
    Person,
    Student,
    Teacher,
    Klass
};