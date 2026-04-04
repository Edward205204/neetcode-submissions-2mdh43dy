class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const m = new Map()
        for(const char of s){
            let value = m.get(char) || 0
            value += 1
            m.set(char,value)
        }
        for(const char of t){
            let value =  (m.get(char) || 0) - 1
            if(!m.has(char) || value < 0) return false  
             m.set(char,value)
        }
      
        return true
    }
}
