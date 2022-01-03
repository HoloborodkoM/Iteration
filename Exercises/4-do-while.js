'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let sumNumb = 0;
  do {
    sumNumb += args.pop();
  } while (0 < args.length);
  return sumNumb;
};

module.exports = { sum };
