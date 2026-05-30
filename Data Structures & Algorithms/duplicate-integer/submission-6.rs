impl Solution {
    pub fn has_duplicate(mut nums: Vec<i32>) -> bool {
        // Sort mảng lại, các phần tử trùng nhau sẽ đứng cạnh nhau
        nums.sort_unstable(); // sort_unstable nhanh hơn sort thường vì không bảo toàn thứ tự gốc của các phần tử bằng nhau
        
        // Dùng windows(2) để check cặp kề nhau
        for w in nums.windows(2) {
            if w[0] == w[1] {
                return true;
            }
        }

        false
    }
}