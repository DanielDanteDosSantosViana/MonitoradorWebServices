var agenteSocket = require('./agenteSocket');

module.exports = {
  connection: function () {
    return agenteSocket();
  }
};
