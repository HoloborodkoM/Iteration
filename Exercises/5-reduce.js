'use strict';

const sum = (...args) => args.reduce((acc, index) => acc + index, 0);

module.exports = { sum };
