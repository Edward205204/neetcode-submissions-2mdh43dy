class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      const map = new Map()

      if(s.length !== t.length) return false
      

      for(const char of s){
        map.set(char, (map.get(char) ?? 0) + 1)
      }


      for(const char of t){
        const freq = map.get(char)
        if(!freq ) return false
        map.set(char, freq - 1)
      }
   
   return true
    }
}
