var senderHTTP = require('./senderhttp');
var propertie = require('../properties').properties;
var utils = require('../utils');

function senderCapturedPackets(data,processo_ok, processo_error){
     console.log(JSON.stringify(data));
     senderHTTP("post",JSON.stringify(data),propertie.url_server_capturedPackets,function(response){
        utils.log("info",JSON.stringify(response));
        processo_ok(response);
     },function(error,msg){
        processo_error(error,msg);
     });
}
module.exports = senderCapturedPackets;

