var senderHTTP = require('./senderhttp');
var propertie = require('../properties').properties;
var utils = require('../utils');

function creator(data,processo_ok, processo_error){
     senderHTTP("post",JSON.stringify(data),propertie.url_server_create_user,function(response){
        processo_ok(response);
     },function(error,msg){
        processo_error(error,msg);
     });
}

module.exports = creator;
