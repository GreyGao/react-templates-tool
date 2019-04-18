const fs = require('fs')
const path = require('path')
const copydir = require('copy-dir')
const util = require('util');

// promisify
const copydirAsync = util.promisify(copydir)

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

  makeCopyAsync: (from, to) => {
    return copydirAsync(from, to, (stat, filepath, filename) => {
      if (stat === 'directory' && filename === '.git') {
        return false;
      }
      return true
    })
  },
}
