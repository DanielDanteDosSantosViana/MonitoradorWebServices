var senderHTTP = require('./senderhttp');
var propertie = require('../properties').properties;
var utils = require('../utils');

function validateToken(data,processo_ok, processo_error){
     senderHTTP("post",JSON.stringify(data),propertie.url_server_validate_token,function(response){
        processo_ok(response);
     },function(error,msg){
        processo_error(error,msg);
     });
}
module.exports = validateToken;
