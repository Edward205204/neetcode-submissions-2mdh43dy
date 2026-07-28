class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap();
        for (int item : nums) {
           map.put(item, map.getOrDefault(item, 0) + 1);
        }

        List<Integer>[] bucket = new ArrayList[nums.length + 1];
        for (int i = 0; i < bucket.length; i++) {
            bucket[i] = new ArrayList<>();
        }
        for (int item : map.keySet()) {
            bucket[map.get(item)].add(item);
        }

        List<Integer> returnValue = new ArrayList<>();
        int count = 0;

        for (int i = nums.length; i > 0; i--) {
            if (bucket[i].size() == 0) continue;
                for (int item : bucket[i]) {
                    returnValue.add(item);
                    count++;
                    if (count == k)
                        break;
                }
           
             if (count == k) break;
        }

        int[] arr = new int[returnValue.size()];
        for (int i = 0; i < returnValue.size(); i++) arr[i] = returnValue.get(i);
        return arr;
    }
}