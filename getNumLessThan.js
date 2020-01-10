const generateNumLessThan = (maxNum) => {
  return Math.random() * maxNum;
};

const getNumLessThanTen = (callback) => {
  setTimeout(() => {
    const randNum = generateRandomNum(10);
    callback(null, randNum);
  }, 0);
};




module.exports = getNumLessThanTen;

