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
        let charCode = char.charCodeAt(0) - 97
       arr[charCode]++;
      }
      const key = arr.join(',')
      if (!map.has(key)) {
                map.set(key, []);
            }
  map.get(key).push(str);
     }

   
    return Array.from(map.values())
}
}