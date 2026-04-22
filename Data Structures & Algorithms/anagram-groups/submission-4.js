class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
     const map = new Map();

    for (let str of strs) {
        const count = new Uint8Array(26); // Dùng TypedArray nhanh hơn và tốn ít bộ nhớ hơn
        for (let i = 0; i < str.length; i++) {
            count[str.charCodeAt(i) - 97]++;
        }

        // Tạo key bằng cách biến mảng thành chuỗi một cách tường minh
        const key = count.join(','); 
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}
}