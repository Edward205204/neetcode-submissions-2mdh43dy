class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;

        HashMap<Character, Integer>  map = new HashMap<>();
        for(char ch : s.toCharArray()){
            int val = 0;
            if(map.containsKey(ch))
                val = map.get(ch) + 1;
            map.put(ch, val);
        }

        for(char ch : t.toCharArray()){
            if(!map.containsKey(ch)) return false;
            int val = map.get(ch);
            if(val == -1) return false;
            map.put(ch, --val);
        }

        return true;
    }
}
