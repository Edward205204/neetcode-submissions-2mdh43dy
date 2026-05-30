impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        };
        
        let mut map = std::collections::HashMap::new();

        for val in s.chars() {
            let mut cur = map.get(&val).copied().unwrap_or(0);
            map.insert(val, cur + 1);
        }

        for val in t.chars() {
             let mut cur = map.get(&val).copied().unwrap_or(0);
             if cur <= 0 {
                return false;
             };
             map.insert(val, cur - 1);
        }

        return true;
    }
}
