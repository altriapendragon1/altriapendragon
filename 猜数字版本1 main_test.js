猜数字版本一测试用例
'use strict';

describe('compare', function () {

    var collection_a = [1, 2, 3, 4];
    var result_a = `4A0B`;//测试1

    var collection_b = [1, 2, 4, 3];
    var result_b = '2A2B';//测试2

    var collection_c = [4, 3, 2, 1];
    var result_c = '0A4B';//测试3

    var collection_d = [1, 2, 5, 3];
    var result_d = '2A1B';//测试4

    var collection_e = [1, 3, 4, 5];
    var result_e = '1A2B';//测试5

    var collection_f = [3, 4, 5, 6];
    var result_f = '0A2B';//测试6

    var collection_g = [5, 6, 7, 8];
    var result_g = '0A0B';//测试7


    it('猜数字游戏1', function() {
        var result = compare(collection_a);
        expect(result).toEqual(result_a);
    });

    it('猜数字游戏2', function() {
        var result = compare(collection_b);
        expect(result).toEqual(result_b);
    });

    it('猜数字游戏3', function() {
        var result = compare(collection_c);
        expect(result).toEqual(result_c);
    });

    it('猜数字游戏4', function() {
        var result = compare(collection_d);
        expect(result).toEqual(result_d);
    });

    it('猜数字游戏5', function() {
        var result = compare(collection_e);
        expect(result).toEqual(result_e);
    });

    it('猜数字游戏6', function() {
        var result =compare(collection_f);
        expect(result).toEqual(result_f);
    });

    it('猜数字游戏7', function() {
        var result = compare(collection_g);
        expect(result).toEqual(result_g);
    });
});

