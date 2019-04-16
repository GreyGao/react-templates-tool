#!/usr/bin/env node
const yargs = require('yargs')
const path = require('path')
const files = require('./lib/files')

const argv = yargs
  .command('create', 'Create A Project Template', {
    type: {
      demand: true,
      alias: 't',
      describe: 'Template types: eg: react-native / react-single/ react-multiple '
    },
    projectName: {
      default: 'project-template',
      alias: 'p',
      describe: 'Project Name'
    }
  })
  .help()
  .argv

const command = argv._[0]
console.log('Command: ', command)
console.log('Yargs', argv)

if (command === 'create') {
  const type = argv.type;
  const projectName = argv.projectName;
  // const currentPath = files.getCurrentDirectoryBase();

  // console.log(currentPath)

  // 1. clone the latest version templates to local path : /templates

  // 2. copy dirs to command execute path
  const filePath = `${__dirname}/templates/${type}/`;
  files.makeCopy(filePath, projectName)

  // 3. clear templates folder
}


