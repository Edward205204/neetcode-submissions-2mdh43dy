class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = {}
    for(let str of strs){
        const strSort = str.split('').sort().join('')
        if(!map[strSort]) map[strSort] = []
        map[strSort].push(str)
    }

    return Object.values(map)

    }
}
