const repositories = require('../const/repositories')
const git = require('simple-git')(__dirname)
const path = require('path')
const files = require('../lib/files')
const fs = require('fs')
const rimraf = require('rimraf')
const util = require('util');

const rimrafAsync = util.promisify(rimraf)

module.exports = {
  create: (type, projectName) => {
    try {
      console.log('get the latest repositories ...')
      git
        // 1. clone the latest version templates to local path : /templates
        .clone(`${repositories[type].url}`, `../templates/${type}`)
        .exec(
          async () => {
            console.log('begin to make copy...')

            // 2. copy dirs to command execute path
            const filePath = path.resolve(__dirname, `../templates/${type}/`)
            await files.makeCopyAsync(filePath, projectName)

            // 3. clear templates folder
            await rimrafAsync(filePath)
            console.log('construction done')
          }
        )
    } catch (err) {
      console.log(err)
    }
  }
}