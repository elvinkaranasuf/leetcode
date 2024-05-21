/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '[' : ']',
        '{' : '}',
        '(' : ')', 
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (stack.length === 0) return false;

            if (map[stack.pop()] !== s[i]) return false;

            continue;
        }

        stack.push(s[i]);
    }

    if (stack.length > 0) return false;
    
    return true;
};


// ({[]})