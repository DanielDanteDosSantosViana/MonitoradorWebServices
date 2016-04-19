var unirest = require('unirest');

var method = {
  get: get,
  post: post,
};


function senderhttp(type,msg,url,callback_ok,callback_error){
   method[type](msg,url,function(error,msg){
      callback_error(error,msg);
   },function(msg,response){
      callback_ok(response);
   });
}

function post(data,url,processo_error, processo_ok){
  unirest.post(url)
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send({requisicao:data})
  .end(function (response) {
    if(response.status!=200){
      processo_error("error","Ocorreu um error ao tentar se conectar :"+response.error);
     }
     processo_ok("status code: 200" ,response);
  });
}

function get(data,url,processo_error, processo_ok){
  unirest.get(url)
  .end(function (response) {
    if(response.status!=200){
      processo_error("error","Ocorreu um error ao tentar se conectar :"+response.error);
     }
     processo_ok("status code: 200" ,response);
  });
}


module.exports = senderhttp;
