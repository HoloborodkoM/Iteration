'use strict';

const sum = (...args) => {
  let sumNum = 0;
  for (const value of args) {
    sumNum += value;
  }
  return sumNum;
};

module.exports = { sum };
