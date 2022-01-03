'use strict';

const sum = (...args) => {
  let sumNumb = 0;
  let i = 0;
  while (i < args.length) {
    sumNumb += args[i]; i++;
  }
  return sumNumb;
};

module.exports = { sum };
