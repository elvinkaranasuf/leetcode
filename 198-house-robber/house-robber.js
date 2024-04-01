/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < nums.length; i++) {
        const newSum = Math.max(nums[i] + sum1, sum2);

        sum1 = sum2;
        sum2 = newSum;
    }

    return Math.max(sum1 , sum2);
}