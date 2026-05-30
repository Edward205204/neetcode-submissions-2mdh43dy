impl Solution {
    pub fn has_duplicate(mut nums: Vec<i32>) -> bool {
        nums.sort_unstable(); // Không tốn thêm 1 byte RAM nào cho Set
        for w in nums.windows(2) {
            if w[0] == w[1] { return true; }
        }
        false
    }
}