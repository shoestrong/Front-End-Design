import { enMorse, deMorse } from './index'

const xmorse = require('./xmorse');

// console.log(enMorse('好学习Good study'))
// console.log(deMorse('.-./..---/..---/----./-----/----./..-./..---/..---/----./-----/----./..-./..---/...--/...--/----./---../..-./..---/-----/-----/-..../....-/..-./--.../.----/..-./.----/.----/.----/..-./.----/.----/.----/..-./.----/-----/-----/..-./...--/..---/..-./.----/.----/...../..-./.----/.----/-..../..-./.----/.----/--.../..-./.----/-----/-----/..-./.----/..---/.----/'))

const inquirer = require('inquirer')
const chalk = require('chalk')
const choices = [
  {
    name: '编码',
    handle: (...r) => xmorse.encode(...r),
    value: 1
  },
  {
    name: '解码',
    handle: (...r) => xmorse.decode(...r),
    value: 2
  },
  {
    name: '埃特巴什码-编码',
    handle: (...r) => enMorse(...r),
    value: 3
  },
  {
    name: '埃特巴什码-解码',
    handle: (...r) => deMorse(...r),
    value: 4
  }
]

inquirer.prompt([{
  type: 'list',
  message: '请选择编码/解码?',
  name: 'value',
  choices: choices
}]).then(answers => {
  let choice = choices.filter(choice => choice.value === answers.value)[0]
  let val = choice.name

  inquirer.prompt([{
    type: 'input',
    message: `请输入${val}内容?`,
    name: 'value'
  }]).then(input => {
    console.log(`${val}结果: ${chalk.green(choice.handle(...input.value.split(',')))}`)
  })
})
