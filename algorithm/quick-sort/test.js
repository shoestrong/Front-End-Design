import { quickSort, quickSortBest } from './index'

const inquirer = require('inquirer')
const chalk = require('chalk')
const choices = [
  {
    name: '快速排序',
    handle: (...r) => quickSort(...r),
    value: 1
  },
  {
    name: '三路快排',
    handle: (...r) => quickSortBest(...r),
    value: 2
  }
]

inquirer.prompt([{
  type: 'list',
  message: '请选择快速排序/三路快排?',
  name: 'value',
  choices: choices
}]).then(answers => {
  let choice = choices.filter(choice => choice.value === answers.value)[0]
  let val = choice.name

  inquirer.prompt([{
    type: 'input',
    message: `请输入你要${val}的内容?`,
    name: 'value'
  }]).then(input => {
    console.log(`${val}结果: ${chalk.green(choice.handle(...input.value.split(',')))}`)
  })
})
