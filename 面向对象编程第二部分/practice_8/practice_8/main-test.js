'use strict';

describe('pos', function()  {
    it('test1', function()  {
      var result = new Person("Tom",21).introduce();
      var expect_string = "My name is Tom. I am 21 years old."
      expect(expect_string).toEqual(result);
  });
    it("test2",function () {

        var wtf = new Klass(2);
       var result = new Student("Tom",21,wtf.number).introduce();
       var expect_string = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2."
        expect(expect_string).toEqual(result)
    })


    it("test3",function () {
        var student =new Student("Jerry",15,2)
        var result = new Teacher("Tom",21,2).introduceWith(student);
        var expect_string = "My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.";
        expect(expect_string).toEqual(result);
    })
    it("test4",function () {
        var student = new Student("Jerry",15,2)
        var result = new Teacher("Tom",21,3).introduceWith(student);
        var expect_string = "My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.";
        expect(expect_string).toEqual(result);
    })


});
