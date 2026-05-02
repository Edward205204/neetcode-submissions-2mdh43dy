class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     const res = []

     let left = 1
     for(let i = 0;i < nums.length;i++){
          res.push(left)
          left = left * nums[i]
     }

     let right = 1
     for(let i = nums.length - 1;i >=0;i--){
          res[i] = res[i] * right
          right = right * nums[i]
     }

     return res 
    }
}
