class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        const n = nums.length
        for(let i = 0; i < n; i++) {
             let otherNumber = target - nums[i]
            if(map.has(otherNumber))
            return [map.get(otherNumber), i]
            map.set(nums[i], i)
        }
    }
}
