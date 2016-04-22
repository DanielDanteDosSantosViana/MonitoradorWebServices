var senderHTTP = require('./senderhttp');
var propertie = require('../init/properties').properties;
var utils = require('../utils');

function authenticator(data,processo_ok, processo_error){
     senderHTTP("post",JSON.stringify(data),propertie.url_server_authentication,function(response){
        processo_ok(response);
     },function(error,msg){
        processo_error(error,msg);
     });
}

module.exports = authenticator;
