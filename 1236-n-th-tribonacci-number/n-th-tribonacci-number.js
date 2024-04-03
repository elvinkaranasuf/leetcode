/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n, memo = {}) {
    if (n === 0) return 0;
    else if (n <= 2) return 1;

    if (!(n in memo)) {
        memo[n] = tribonacci(n - 3, memo) + tribonacci(n - 2, memo) + tribonacci(n - 1, memo);
    }

    return memo[n];
};