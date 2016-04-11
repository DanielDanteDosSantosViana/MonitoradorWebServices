var unirest = require('unirest');
var propertie = require('../init/properties');

var method = {
  get: get,
  post: post,
};


function senderhttp(type,msg,callback){
   method[type](msg, function(error,msg){
      console.log(msg);
   },function(msg,response){
      callback(response);
   });
}

function post(data,processo_error, processo_ok){
  unirest.post(propertie.properties.url_server)
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send({requisicao:data})
  .end(function (response) {
    if(response.status!=200){
      processo_error("error","Ocorreu um error ao tentar se conectar :"+response.error);
     }
     processo_ok("status code: 200" ,response);
  });
}

function get(data,processo_error, processo_ok){
  unirest.get(url)
  .end(function (response) {
    if(response.status!=200){
      processo_error("error","Ocorreu um error ao tentar se conectar :"+response.error);
     }
     processo_ok("status code: 200" ,response);
  });
}


module.exports = senderhttp;
