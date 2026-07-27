class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();
        for(String item: strs){
            int[] count = new int[26];
            for(char ch: item.toCharArray()){
                count[ch - 'a']++;
            }
            String signature = Arrays.toString(count);
            if(map.containsKey(signature)){
                map.get(signature).add(item);
                continue;
            }
            List<String> list = new ArrayList<>();
            list.add(item);
            map.put(signature, list);
        }

        return new ArrayList<>(map.values());
    }
}
