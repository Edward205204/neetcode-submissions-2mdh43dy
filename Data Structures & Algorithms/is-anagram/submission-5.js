class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

    if(s.length !== t.length) return false

      const map = new Map()
      for(const vs of s) {
        map.has(vs) ? map.set(vs, (map.get(vs) + 1))  : map.set(vs, 1)
      }

      for(const vt of t){
        if(!map.has(vt)) return false
        let count = map.get(vt) 
        if((count - 1) < 0)  return false
        count -= 1
        map.set(vt, count)
      }

      console.log(map)

      
      return true
    }
}
