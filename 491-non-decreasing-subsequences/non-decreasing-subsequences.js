/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const ans = [];
    const visited = new Set();

    function dfs(indx, sequence) {
        for (let i = indx; i < nums.length; i++) {
            sequence.push(nums[i]);

            const str = JSON.stringify(sequence);
            if (sequence.length > 1 && !visited.has(str)) {
                if (nums[i] < sequence[sequence.length - 2]) {
                    sequence.pop();
                    continue;
                }

                ans.push([...sequence]);
                visited.add(str)
            }

            dfs(i + 1, sequence);

            sequence.pop();
        }
    }

    dfs(0, []);

    return ans;
};