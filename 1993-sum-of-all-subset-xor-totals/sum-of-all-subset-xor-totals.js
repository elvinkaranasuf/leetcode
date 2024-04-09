/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let sum = 0;

    function dfs(subset, indx) {
        for (let i = indx; i < nums.length; i++) {
            subset.push(nums[i]);

            let xor = subset[0];
            for (let j = 1; j < subset.length; j++) xor ^= subset[j];

            sum += xor;

            dfs(subset, i + 1);

            subset.pop();
        }
    }

    dfs([], 0);

    return sum;
};