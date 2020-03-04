const fs = require('fs');

const writeToFile = (data, callback) => {
  fs.writeFile('numFile.txt', data, 'utf8', (err) => {
    if (err) {
      throw err;
    } else {
      callback(null, 'wrote to file!');
    }
  });
};

module.exports = writeToFile;

