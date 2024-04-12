class Node {
    constructor(value, isEnd = false) {
        this.value = value;
        this.isEnd = isEnd;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new Node("");
    }

    /** 
    * @param {string} word
    * @return {void}
    */
    insert(word) {
        let tmp = this.root;
        let index = 0;
 
        while (index < word.length) {
            if (!(word[index] in tmp.children)) {
                tmp.children[word[index]] = new Node(word[index]);
            }

            tmp = tmp.children[word[index++]];
        }

        if (index > 0) tmp.isEnd = true;
    }

    search(word) {
        let tmp = this.root;
        let index = 0;

        while(index < word.length && word[index] in tmp.children) {
            tmp = tmp.children[word[index++]];
        }

        return index === word.length && tmp.isEnd === true;
    }

    /** 
    * @param {string} prefix
    * @return {boolean}
    */

    startsWith(prefix) {
        let tmp = this.root;
        let index = 0;

        while(index < prefix.length && prefix[index] in tmp.children) {
            tmp = tmp.children[prefix[index++]];
        }

        return index === prefix.length;
    }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */