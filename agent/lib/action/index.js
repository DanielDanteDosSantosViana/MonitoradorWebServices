
module.exports = {
  init: function (email,senha) {
    return require('../init').start(email,senha);
  },
  create: function (email,senha) {
    return require('../create').start(email,senha);
  },
  start: function () {
    return require('../start').start();
  },
  reset: function () {
    return require('../reset').start();
  }
};
