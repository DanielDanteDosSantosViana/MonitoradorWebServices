var authenticator = require('./authenticator');
var senderhttp = require('./senderhttp');

module.exports = {
  authentication: function () {
    return authenticator();
  },
  senderHTTP: function (type,msg,callback) {
    return senderhttp(type,msg,callback);
  },
};
