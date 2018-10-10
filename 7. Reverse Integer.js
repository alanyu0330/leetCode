/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = '';
    let strArr = Math.abs(x).toString().split('');

    strArr.reverse();

    for (let i in strArr) result += strArr[i];

    result = +result;

    // if (result >= Math.pow(2,31)) return 0;
    // return x < 0 ? result * -1 : result;    

    return result >= Math.pow(2, 31) ? 0 : x < 0 ? result * -1 : result;
};