/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    
    let gcd = 1;
    let l1 = str1.length;
    let l2 = str2.length;

    while (true) {
        let remainder = l1 % l2;

        if (remainder === 0) {
            gcd = l2;
            break;
        }

        l1 = l2;
        l2 = remainder;
    }

    return str1.slice(0, gcd);
};