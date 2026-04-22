class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
     for(let str of strs){
        const arr = new Array(26).fill(0)
        for(let char of str){
            const index = char.charCodeAt(0) - 97
            arr[index] += 1
        }
            if(!map[arr]) map[arr] = []
            map[arr].push(str)

     }
        return Object.values(map)
    }
}
