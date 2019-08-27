function bubble(arr) {
  // let n = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        // n++;
        let temp = arr[j];  // 存储比较后大的值
        arr[j] = arr[j+1];  // 把后一个小的值复制给当前位置的值
        arr[j+1] = temp;    // 把后一个值换成存储的大的值

        // 可以用es6的解构赋值 [a, b] = [b, a] a和b的值就做交换了
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 等同于上面那三行

        // console.log(arr.join(','))
      }
    } 
  }
  // console.log(n) // 总共循环的的次数
  return arr;
}

var arr = [45,2,74,13,56,78,3,9];

console.log(bubble(arr));