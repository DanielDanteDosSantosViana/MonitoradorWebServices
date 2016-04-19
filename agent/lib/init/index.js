var init = require('./init');

module.exports = {
  start: function (email,senha) {
    return init(email,senha);
  }
};
