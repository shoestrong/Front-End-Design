console.time('test0')
function qSort (arr) {
  if (arr.length == 0) {
    return []
  }
  var left = []
  var right = []
  var pivot = arr[0]
  for (var i = 1; i < arr.length; i++) { // 注意这里的起始值，因为有一个作为flag了
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...qSort(left), pivot, ...qSort(right)]
}
console.log(qSort([9, 4, 10, 3, 1, 1, 0, 10, 8, 3, 9, 9, 4, 10, 10, 9, 9, 9, 1, 0]))
console.timeEnd('test0')

console.time('test1')
function qSort3 (arr) { // 三路快排
  if (arr.length == 0) {
    return []
  }
  var left = []
  var center = []
  var right = []
  var pivot = arr[0]; // 直接取第一个,实际取值情况 参考[快速排序算法的优化思路总结]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else if (arr[i] === pivot) {
      center.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...qSort3(left), ...center, ...qSort3(right)]
}
console.log('结果为', qSort3([9, 4, 10, 3, 1, 1, 0, 10, 8, 3, 9, 9, 4, 10, 10, 9, 9, 9, 1, 0]))
console.timeEnd('test1')
