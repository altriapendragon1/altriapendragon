'use strict';

describe('pos', function()  {
    it('test1', function()  {
      var result = new Person("Tom",21).introduce();
      var expect_string = "My name is Tom. I am 21 years old."
      expect(expect_string).toEqual(result);
  });
    it("test2",function () {
       var result = new Student("Tom",21,2).introduce();
       var expect_string = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2."
        expect(expect_string).toEqual(result)
    })
    it("test3",function () {
        var result = new Worker("Tom",21).introduce();
        var expect_string = "My name is Tom. I am 21 years old. I am a Worker. I have a job.";
        expect(expect_string).toEqual(result);
    })
    it('test4', function()  {
        var result = new Person().basicIntroduce();
        var expect_string = "My name is Tom. I am 21 years old."
        expect(expect_string).toEqual(result);
    });
    it('test5', function()  {
        var result = new Student().basicIntroduce();
        var expect_string = "My name is Tom. I am 21 years old."
        expect(expect_string).toEqual(result);
    });
    it('test6', function()  {
        var result = new Worker().basicIntroduce();
        var expect_string = "My name is Tom. I am 21 years old."
        expect(expect_string).toEqual(result);
    });

});
