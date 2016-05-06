var authenticator = require('./authenticator');
var senderhttp = require('./senderhttp');
var creator = require('./creatoruser');


module.exports = {
  authentication: function (data,callback_error,callback_ok) {
    return authenticator(data,callback_error,callback_ok);
  },
  senderHTTP: function (type,msg,callback) {
    return senderhttp(type,msg,callback);
  },

  create: function (data,callback_error,callback_ok) {
    return creator(data,callback_error,callback_ok);
  },

};
