/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let ans = 0;

    for (let i = 2; i < s.length; i++) {
        if (s[i - 2] !== s[i - 1] && s[i - 2] !== s[i] && s[i - 1] !== s[i]) {
            ans++;
        }
    }

    return ans;
};