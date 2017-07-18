'use strict';

describe('pos', function()  {
    it('test1', function()  {
      var result = new Person(undefined,"Tom",21).introduce();
      var expect_string = "My name is Tom. I am 21 years old."
      expect(expect_string).toEqual(result);
  });
    it("test2",function () {
        var wtf = new Klass(2);
       var result = new Student(undefined,"Tom",21,wtf.number).introduce();
       var expect_string = "My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2."
        expect(expect_string).toEqual(result)
    })



});
