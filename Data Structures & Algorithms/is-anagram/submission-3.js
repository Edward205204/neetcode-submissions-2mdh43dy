class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const m = new Map()
        const sl = s.length
        const tl = t.length
        let fl;
        let scl;
        if(sl < tl) {fl = s; scl = t;} else {fl = t; scl = s}
        for(const char of fl){
            let value = m.get(char) || 0
            value += 1
            m.set(char,value)
        }
        for(const char of scl){
            let value =  (m.get(char) || 0) - 1
            if(!m.has(char) || value < 0) return false  
             m.set(char,value)
        }
      
        return true
    }
}
