const fs = require('fs');

const writeToHardDrive = (data, callback) => {
  fs.writeFile('numFile.txt', data, 'utf8', (err) => {
    if (err) {
      throw err;
    } else {
      callback(null, 'wrote to file!');
    }
  });
};

module.exports = writeToHardDrive;

