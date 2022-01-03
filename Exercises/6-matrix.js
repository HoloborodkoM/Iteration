'use strict';

const max = (matrix) => {
  let max = matrix[0][0];
  for (const arr of matrix) {
    for (const value of arr) {
      if (value > max) max = value;
    }
  }
  return max;
  //liguyvo7yoyvcutcjycyrxcgcotxcktucot
  //ougo7ychvlyfoyfoddykuy
};

const m = max([[1, 2, 3], [678, 4, 5, 6], [7, 8, 9]]);
console.log(m); // 9

module.exports = { max };
