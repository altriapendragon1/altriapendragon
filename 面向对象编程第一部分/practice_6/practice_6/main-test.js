'use strict';

describe('pos', function()  {
    it('test1', function()  {
      var result = new Person("Tom",21).introduce();
      var expect_string = "My name is Tom. I am 21 years old."
      expect(expect_string).toEqual(result);
  });
    it("test2",function () {
       var result = new Student("Tom",21,2).introduce();
       var expect_string = "My name is Tom. I am 21 years old."
        expect(expect_string).toEqual(result)
    })
    it("test3",function () {
        var result = new Worker("Tom",21).introduce();
        var expect_string = "My name is Tom. I am 21 years old.";
        expect(expect_string).toEqual(result);
    })


});
