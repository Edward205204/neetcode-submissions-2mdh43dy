class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
   const map = new Map()
   const buckets = Array.from({length: nums.length + 1}, () => [])

   for(let num of nums){
    map.set(num, (map.get(num) ?? 0) + 1)
   }

   for(let [num, freq] of map){
    buckets[freq].push(num)
   }

   const res = []
   for(let i = nums.length;i >= 0 && res.length < k;i--) {
    if(buckets[i].length > 0)
    res.push(...buckets[i])
   }
   return res.slice(0,k)
  }
}
