class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map()
    for(const str of strs){
        const arr = new Array(26).fill(0)
        for(const char of str){
            const nums = char.charCodeAt(0) - 97
            arr[nums]++
        }
        const hash = arr.join('#')
        if(!map.has(hash)) map.set(hash, [])
        map.get(hash).push(str)
    }

    return [...map.values()]
    
}
}