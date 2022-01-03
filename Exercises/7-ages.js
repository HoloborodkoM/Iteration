'use strict';

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = (persons) => {
  const objLive = {};
  for (const name in persons) {
    const live = persons[name].died - persons[name].born;
    objLive[name] = live;
  }
  return objLive;
};
module.exports = { ages };
