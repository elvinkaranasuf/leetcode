/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = "aeiouAEIOU";

    let i = 0;
    let j = s.length - 1;
    let arr = s.split("");

    while (i < j) {
        while (i < j && vowels.indexOf(arr[i]) == -1) {
            i++;
        }
        while (i < j && vowels.indexOf(arr[j]) == -1) {
            j--;
        }

        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;

        i++;
        j--;
    }

    return arr.join("");
};