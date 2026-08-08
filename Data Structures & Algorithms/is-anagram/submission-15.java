class Solution {
    public boolean isAnagram(String s, String t) {
      if(s.length() != t.length()) return false;
      HashMap map = new HashMap<Character,Integer>();
      for(char v: s.toCharArray()){
       if( map.containsKey(v)) 
       {
        int value = (int) map.get(v) + 1;
        map.put(v, value);
       }
        else map.put(v, 1);
      }

       for(char v: t.toCharArray()){
         if(map.containsKey(v) == false) return false;
         int value = (int) map.get(v) - 1;
         if(value  < 0) return false;
         map.put(v, value);
       }
       
       return true;
    }
}
