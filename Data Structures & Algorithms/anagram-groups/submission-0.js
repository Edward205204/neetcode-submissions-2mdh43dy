class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const map = {}
       for (let str of strs){
        const sortChar = str.split('').sort().join('')
        
        if(!map[sortChar]) map[sortChar] = []

      map[sortChar].push(str)

       }

       return Object.values(map)
    }
}
