class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for(const str of strs){
            res += (str.length + "#" + str)
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        const res = []
        while(i < str.length){
            let j = i
            while(str.charAt(j) !== '#')   j++
            // let len = Number(str.slice(i,j))
            let len = parseInt(str.substring(i, j));
            i = j + 1
            const content = str.slice(i, i + len)
            res.push(content)
            i += len
        }
        return res
    }
}
