/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let ans = 0;
    let left = 0, right = 0, count = 0;
    const map = new Map();

    while (right < s.length) {
        if (!map[s[right]]) map[s[right]] = 1;
        else map[s[right]]++;

        while (map[s[right]] > 2) {
            map[s[left]]--;
            count--;
            left++;
        }

        ans = Math.max(ans, ++count);

        right++;
    }

    return ans;
};


// bcbbbcba
// bbcccbdas