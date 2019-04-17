#!/usr/bin/env node
const yargs = require('yargs')
const path = require('path')
const files = require('./lib/files')
const command = require('./command/command')

// console.log(__dirname)

const argv = yargs
  .command('create', 'Create A Project Template', {
    type: {
      demand: true,
      alias: 't',
      describe: 'Template types: eg: react-native / react-single-page/ react-multiple-pages '
    },
    projectName: {
      default: 'project-template',
      alias: 'p',
      describe: 'Project Name'
    }
  })
  .help()
  .argv

const commandArgv = argv._[0]
// console.log('Command: ', commandArgv)
// console.log('Yargs', argv)

if (commandArgv === 'create') {
  const { type, projectName } = argv;
  // some description ...
  console.log('project is constructing...')
  command.create(type, projectName)
}


