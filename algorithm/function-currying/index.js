export const currying = (fn, arr = []) => {
  let len = fn.length
  return function (...args) {
    arr = [...arr, ...args]
    if (arr.length < len) {
      return currying(fn, arr)
    } else {
      return fn(...arr)
    }
  }
}

// function add(a, b, c, d, e) {
//   return a + b + c + d + e
// }

// const c = currying(add)(1,2)(3)(4,5)
// console.log(c)

// 使用函数柯里化
let types = ['String', 'Number', 'Object', 'Array', 'Null', 'Undefined']
let util = {}

function checkType(type, value) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

types.forEach(type => {
  util[`is${type}`] = currying(checkType)(type)
})

console.log(util.isString('qq'))