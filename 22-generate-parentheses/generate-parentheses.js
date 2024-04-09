/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];

    function dfs(path, left, right) {
        if (left > n || right > n || right > left) return;

        if (path.length === n * 2) {
            ans.push(path);
            return;
        }

        dfs(path + "(", left + 1, right);
        dfs(path + ")", left, right + 1);
    }

    dfs("(", 1, 0);

    return ans;
};