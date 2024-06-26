/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && s[i] === "*") {
            stack.pop();
            continue;
        }

        stack.push(s[i]);
    }

    return stack.join("");
};