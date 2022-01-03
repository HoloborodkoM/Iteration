'use strict';

const sum = (...args) => {
  let sumNumb = 0;
  for (let i = 0; i < args.length; i++) {
    sumNumb += args[i];
  }
  return sumNumb;
};

module.exports = { sum };
