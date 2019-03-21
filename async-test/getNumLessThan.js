const generateRandomNum = (num) => {
  return (Math.random() * num);
}

const generateRandomDelay = () => {
  return generateRandomNum(10) * 100;
}

const getNumLessThanTen = (callback) => {
  const randomDelay = generateRandomDelay();

  setTimeout(() => {
    const randNum = generateRandomNum(10);
    callback(null, randNum);
  }, randomDelay);
};




module.exports = getNumLessThanTen;

