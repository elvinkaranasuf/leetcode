/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    const set1 = new Set();
    const set2 = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!set1.has(nums[i])) set1.add(nums[i]);
        else if (!set2.has(nums[i])) set2.add(nums[i]);
        else return false;
    }

    return true;
};