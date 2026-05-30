impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut set = std::collections::HashSet::new();
       for val in nums {
            if set.contains(&val) {
                return true;
            }
            set.insert(val);
       }

       return false;
    }
}
