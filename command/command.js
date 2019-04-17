const repositories = require('../const/repositories')
const git = require('simple-git')(__dirname)
const path = require('path')
const files = require('../lib/files')
const fs = require('fs')
const rimraf = require('rimraf')

module.exports = {
  create: (type, projectName) => {
    console.log('get the latest repositories ...')
    git
      // 1. clone the latest version templates to local path : /templates
      .clone(`${repositories[type].url}`, `../templates/${type}`)
      .exec(
        () => {
          console.log('begin to make copy...')

          // 2. copy dirs to command execute path
          const filePath = path.resolve(__dirname, `../templates/${type}/`)
          files.makeCopy(filePath, projectName)

          // 3. clear templates folder
          rimraf(filePath, err => {
            if (err) {
              console.log(err)
            } else {
              console.log('construction done')
            }
          })
        }
      )

  }
}