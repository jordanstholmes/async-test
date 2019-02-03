const generateRandomNum = (num) => {
  return Math.random() * num;
}

const generateRandomDelay = () => {
  return generateRandomNum(10) * 100;
}

const getNumLessThanTen = (num, callback) => {
  const randomDelay = generateRandomDelay();

  setTimeout(() => {
    const randNum = generateRandomNum(num);
    callback(null, randNum);
  }, randomDelay);
};




module.exports = getNumLessThanTen;

