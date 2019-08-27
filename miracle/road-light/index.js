/**
 * 实现红黄绿灯切换
 * promise延时定时器
 * @param {*} timer
 * @returns
 */
function delay (timer) {
  return () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, timer)
    })
  }
}

// 定义红黄绿灯延时时间
let red = delay(5000)
let green = delay(8000)
let yellow = delay(3000)

/**
 * 需要运动递归，循环红黄绿灯的切换
 * restart
 */
function restart () {
  console.log('目前为----红灯，5s后变成绿灯')
  red().then(() => {
    console.log('目前为----绿灯，8s后变成黄灯')
    return green()
  }).then(() => {
    console.log('目前为----黄灯，3s后变成绿灯')
    return yellow()
  }).then(() => {
    return restart()
  })
}
restart()
