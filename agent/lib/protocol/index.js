var authenticator = require('./authenticator');
var senderhttp = require('./senderhttp');
var creator = require('./creatoruser');
var senderCapturedPackets = require('./capturedPackage');
var validateToken = require('./validateToken');




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

  senderCapturedPackets: function (data,callback_error,callback_ok) {
    return senderCapturedPackets(data,callback_error,callback_ok);
  },

  validateToken: function (data,callback_error,callback_ok) {
    return validateToken(data,callback_error,callback_ok);
  },
};
