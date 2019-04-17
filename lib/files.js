const fs = require('fs')
const path = require('path')
const copydir = require('copy-dir')

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },

  readFiles: (filePath) => {
    try {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) console.log(err);
        console.log(data)
      })
    } catch (err) {
      return false;
    }
  },

  makeCopy: (from, to) => {
    try {
      copydir.sync(from, to)
    } catch (err) {
      console.log(err)
    }
  },
}
