// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// // Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */

// Solution1
var reverse = function (x) {
    let res = Math.abs(x).toString().split('').reverse().join('');
    res = +res;
    return res >= Math.pow(2, 31) ? 0 : x < 0 ? res * -1 : res;
};

// Solution2
var reverse = function (x) {
    let result = '';
    let strArr = Math.abs(x).toString().split('');
    strArr.reverse();

    for (let i in strArr) result += strArr[i];

    result = +result;
    return result >= Math.pow(2, 31) ? 0 : x < 0 ? result * -1 : result;
};
