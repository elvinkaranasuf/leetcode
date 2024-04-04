/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const mod = 10**9 + 7;

    let num1 = 0;
    let num2 = 1;
    let num3 = 1;

    for (let i = 1; i < n; i++) {
        let num = ((2 * num3) % mod + num1) % mod;

        num1 = num2;
        num2 = num3;
        num3 = num;
    }

    return num3;
};