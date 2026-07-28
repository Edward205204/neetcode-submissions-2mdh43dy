class Solution {

public String encode(List<String> strs) {
    StringBuilder sb = new StringBuilder();
    sb.append(strs.size()).append('#');
    for (String s : strs) {
        sb.append(s.length()).append('#').append(s);
    }
    return sb.toString();
}

public List<String> decode(String str) {
    int sep = str.indexOf('#');
    int size = Integer.parseInt(str.substring(0, sep));
    List<String> list = new ArrayList<>();
    int i = sep + 1;
    for (int k = 0; k < size; k++) {
        int j = str.indexOf('#', i);
        int len = Integer.parseInt(str.substring(i, j));
        list.add(str.substring(j + 1, j + 1 + len));
        i = j + 1 + len;
    }
    return list;
}
}