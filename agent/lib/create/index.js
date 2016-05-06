var create = require('./create');

module.exports = {
  start: function (email,senha) {
    return create(email,senha);
  }
};
