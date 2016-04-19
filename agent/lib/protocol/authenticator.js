var senderHTTP = require('./senderhttp');
var propertie = require('../init/properties').properties;
var utils = require('../utils');

var fileConfig = function(email,senha){
    this.email = email,
    this.senha = senha;
}


function authenticator(processo_ok, processo_error){
  utils.readConfig(function(error){
    utils.log("error",error)
    processo_error(error);
  },function(data){
     senderHTTP("post",JSON.parse(data),propertie.url_server_authentication,function(response){
        processo_ok(response);
     },function(error,msg){
        processo_error(error,msg);
     });
  });
}

module.exports = authenticator;
