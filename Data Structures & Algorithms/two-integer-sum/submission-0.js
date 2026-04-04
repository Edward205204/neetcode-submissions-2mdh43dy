class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map()
        let index = 0;
        for(let i of nums){
            const jv = target - i 
            if(m.has(jv)) return [m.get(jv), index]
            m.set(i, index)
            index += 1
        }
    }
}
