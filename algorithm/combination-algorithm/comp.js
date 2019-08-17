/**
 * 组合算法
 * 给出已知键盘上面的的字母['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
 * 映射到0 - 9 数字键盘上
 * 如果输入23， 映射到['abc', 'def]
 * 得到结果为：['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
 * @param {*} strs
 * @returns
 */
function telComp(strs) {
  // 映射手机键盘0-9
  let keyboardLetter = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let codes = [];
  strs.split('').forEach(str => {
    // 过滤前面两个值['', 1]
    keyboardLetter[str] && keyboardLetter[str] !== 1 && codes.push(keyboardLetter[str]);
  });

  let comp = (arr) => {
    let temp = [];
    if (arr.length > 1) {
      // 相邻的两个组合做对比
      for (let i = 0, iLen = arr[0].length; i < iLen; i++) {
        for (let j = 0, jLen = arr[1].length; j < jLen; j++) {
          temp.push(`${arr[0][i]}${arr[1][j]}`)
        }
      }
      // 最重要的一步，把合并过后的数据删除掉，放入新组合的数据
      arr.splice(0, 2, temp);
      // 递归调用自己
      comp(arr);
    } else {
      temp = arr;
      return temp;
    }
    return arr[0];
  }

  return comp(codes);
}

// console.log(telComp('23')) 
// [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]

// module.exports = telComp
export default telComp
