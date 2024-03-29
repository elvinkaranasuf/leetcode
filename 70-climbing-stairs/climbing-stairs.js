/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) return 1;
    
    let prev1 = 0
    let prev2 = 1;

    for (let i = 0; i < n; i++) {
        const steps = prev1 + prev2;

        prev1 = prev2;
        prev2 = steps;
    }

    return prev2;
};