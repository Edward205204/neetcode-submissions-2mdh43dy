class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
//    bước 1 đẩy vào set với key là các giá trị cần đếm tần suất, value là tần suất
//    bước 2 tạo sô rỗng với n + 1 phần tử
//    bước 3 đẩy các giá trị cần đếm vào các bucket tương ứng với tần suất
//    bước 4 làm theo yêu cầu đề, ở đây lấy k phần tử xuất hiện nhiều nhất.
//    bước 4.5 cụ thể để làm đc bước 4, t duyệt ngược mảng rồi sau đó check xô

    const map  = new Map()
    const buckets =  Array.from({length:nums.length + 1}, ()=>[])

    for(const num of nums){
      map.set(num, (map.get(num)??0) + 1)
    }

    for(const [num,freq] of map){
      buckets[freq].push(num)
    }
const res = []
    for(let i = nums.length;i >= 0 && res.length < k;i--){
      if(buckets[i].length > 0){
        res.push(...buckets[i])
      }
    }
    return res.slice(0,k)
  }
}
