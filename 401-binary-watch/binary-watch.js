/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const ans = [];
    const LEDs = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];

    function dfs(indx, hours, minutes, count) {
        for (let i = indx; i < LEDs.length + 1; i++) {
            if (hours > 11 || minutes > 59) return;

            if (count === turnedOn) {
                ans.push(`${ hours }:${ minutes < 10 ? `0${ minutes }` : minutes}`);
                return;
            }

            if (i < 4) dfs(i + 1, hours + LEDs[i], minutes, count + 1);
            else dfs(i + 1, hours, minutes + LEDs[i], count + 1);
        }
    }

    if (turnedOn > 8) return [];

    dfs(0, 0, 0, 0);

    return ans;
};