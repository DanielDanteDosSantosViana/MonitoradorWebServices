var authenticator = require('./authenticator');
var senderhttp = require('./senderhttp');

module.exports = {
  authentication: function (callback_error,callback_ok) {
    return authenticator(callback_error,callback_ok);
  },
  senderHTTP: function (type,msg,callback) {
    return senderhttp(type,msg,callback);
  },
};
