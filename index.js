#!/usr/bin/env node
const yargs = require('yargs')
const inquirer = require('inquirer')
const path = require('path')
const command = require('./command/command')
const questions = require('./command/questions')

console.log('welcome to react-templates-tool~~~\u{01F923}\u{01F923}\u{01F923}')

const argv = yargs
  .command('create', 'Create A Project Template')
  .help()
  .argv

const commandArgv = argv._[0]
// console.log('Command: ', commandArgv)
// console.log('Yargs', argv)

if (commandArgv === 'create') {
  console.log('----type your basic project info----')
  inquirer
    .prompt(questions.create)
    .then(answers => {
      // console.log(JSON.stringify(answers, null, ' '))
      console.log('project is constructing...')

      const { type, projectName } = answers;
      command.create(type, projectName)

    })
}


