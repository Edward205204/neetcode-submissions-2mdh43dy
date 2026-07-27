class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int i = 0;i < nums.length; i++){
            int tpm = target - nums[i];
            if(map.containsKey(tpm)) {
                return new int[]  {map.get(tpm),i};
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}